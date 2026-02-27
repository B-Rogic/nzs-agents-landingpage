"use client"
import React, { createContext, ReactNode, useContext, useState } from 'react'

type Props = {
  children: ReactNode
}

interface ClickContextType {
    click: boolean
    setClick: (click: boolean) => void
}

const ClickContext = createContext<ClickContextType | undefined>(undefined)

const ContextProvider = ({children}: Props) => {
  const [click, setClick] = useState<boolean>(false)
  return (
    <ClickContext.Provider value={{click, setClick}}>
      {children}
    </ClickContext.Provider>
  )
}

export const useClickContext = () => {
  const context = useContext(ClickContext)
  if (!context) {
    throw new Error('useClickContext must be used within a ContextProvider')
  }
  return context
}

export default ContextProvider