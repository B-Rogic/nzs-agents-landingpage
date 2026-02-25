import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

const ThreeColGrid = ({children}: Props) => {
  return (
    <div className='grid md:grid-cols-3 grid-cols-1 gap-2'>
        {children}
    </div>
  )
}

export default ThreeColGrid