import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode
    className?: string,
    justify?: string
}

const JustifyBetween = ({children, className, justify}: Props) => {
  return (
    <div className={`flex ${justify || "justify-between"} ${className}`}>
        {children}
    </div>
  )
}

export default JustifyBetween