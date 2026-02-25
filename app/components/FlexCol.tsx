import React, { ReactNode } from 'react'

type Props = {
    gap?: string,
    className?: string
    children: ReactNode
    handleClick?: () => void
}

const FlexCol = ({gap, className, children, handleClick}: Props) => {
  return (
    <div onClick={handleClick} className={`flex flex-col ${gap || "gap-5"} ${className}`}>{children}</div>
  )
}

export default FlexCol