import React, { ReactNode } from 'react'

type Props = {
    className?: string
    children: ReactNode
}

const GlobalContainer = ({className, children}: Props) => {
  return (
    <div className={`p-10 ${className}`}>{children}</div>
  )
}

export default GlobalContainer