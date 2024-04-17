const API_BASE_URL = 'http://localhost:8000';

export async function loginUser(username, password) {
  try {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
      credentials: 'include', // Include cookies in the request
    });

    if (!response.ok) {
      throw new Error('Failed to log in');
    }

    return response.json();
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
}
export async function authUser() {
  try {
    const response = await fetch(`${API_BASE_URL}/profile`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include', 
    });

    if (!response.ok) {
      throw new Error('Failed to log in');
    }

    return response.json();
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
}