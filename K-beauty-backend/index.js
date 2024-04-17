const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

const app = express();
const port = 8000;
const SECRET_KEY = "jauyegrwqr79";

// Middleware
const allowedOrigins = ["http://localhost:3000"]; // Add the allowed origins here
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Origin not allowed by CORS"));
      }
    },
    credentials: true, // Allow sending cookies with the request
  })
);
app.use(cookieParser());
app.use(express.json());

// Mock user data
const users = [
  { id: 1, username: "john@gmail.com", password: "password123" },
  { id: 2, username: "jane", password: "secret456" },
];

function generateTokens(user) {
  const accessToken = jwt.sign({ userId: user.id }, SECRET_KEY, {
    expiresIn: "15m",
  });
  const refreshToken = jwt.sign({ userId: user.id }, SECRET_KEY, {
    expiresIn: "7d",
  });
  return { accessToken, refreshToken };
}

// Login route
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const tokens = generateTokens(user);
  res.cookie("token", tokens, { httpOnly: true, secure: true });
  res.json(tokens);
});

// Refresh token route
app.post("/refresh-token", (req, res) => {
  const refreshToken = req.body.refreshToken;

  if (!refreshToken) {
    return res.status(401).json({ message: "No refresh token provided" });
  }

  try {
    const decoded = jwt.verify(refreshToken, SECRET_KEY);
    const user = users.find((u) => u.id === decoded.userId);

    if (!user) {
      return res.status(401).json({ message: "Invalid refresh token" });
    }

    const accessToken = jwt.sign({ userId: user.id }, SECRET_KEY, {
      expiresIn: "15m",
    });
    res.json({ accessToken });
  } catch (err) {
    res.status(403).json({ message: "Invalid refresh token" });
  }
});

app.get("/profile", (req, res) => {
  const tokens = req.cookies.token;
  if (!tokens) {
    console.log('erorr')
    return res.status(401).json({ message: "Unauthorized" });
  }

  const decoded = jwt.verify(tokens.accessToken, SECRET_KEY);
  const user = users.find((u) => u.id === decoded.userId);
console.log(user)
  if (!user) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  res.json({ user });
});

app.get("/users", (req, res) => {
  const user = users;
  if (!user) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  res.json({ user });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
