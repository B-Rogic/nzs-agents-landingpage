import React, { ReactNode } from 'react'

type Props = {
    gap?: string,
    className?: string
    children: ReactNode
}

const FlexCol = ({gap, className, children}: Props) => {
  return (
    <div className={`flex flex-col ${gap || "gap-5"} ${className}`}>{children}</div>
  )
}

export default FlexCol