import React, { ReactNode } from 'react'

interface Props {
  // "children" is a special prop that all components supports.
  // We can pass our value as a child element to a component
  // If you specify the type of children to "string", you can only pass plain text instead of HTML.
  // However, if you use "ReactNode" as a type, you can pass HTML.
  children: ReactNode
}

const Alert = ({ children }: Props) => {
  return (
    <div className='alert alert-primary'>{ children }</div>
  )
}

export default Alert