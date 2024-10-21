import React, { ReactElement, ReactNode } from 'react'
import './index.css'

interface ContentProps {
  children: ReactNode;
}

const Content: React.FC<ContentProps> = ({ children }): ReactElement => {
  return (
    <main className="main-content">
      {children}
    </main>
  )
}

export default Content
