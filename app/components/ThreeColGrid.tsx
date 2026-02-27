import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode
    gridCols?: string
    gap?: string
}

const ThreeColGrid = ({children, gridCols, gap}: Props) => {
  return (
    <div className={`grid ${gridCols || 'md:grid-cols-3'} grid-cols-1 ${gap ? `gap-${gap}` : 'gap-3'}`}>
        {children}
    </div>
  )
}

export default ThreeColGrid