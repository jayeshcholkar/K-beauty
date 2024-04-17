import React from 'react'

function Button(props: { [x: string]: any; children: any }) {
    const {children, onClick, className, ...rest} = props
  return <button  {...rest} className={className}>{children}</button>
}

export default Button
