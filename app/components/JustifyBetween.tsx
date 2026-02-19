import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode
    className?: string
}

const JustifyBetween = ({children, className}: Props) => {
  return (
    <div className={`flex justify-between ${className}`}>
        {children}
    </div>
  )
}

export default JustifyBetween