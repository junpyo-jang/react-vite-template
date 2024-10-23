import { ReactElement, ReactNode, useState } from 'react'
import Header from '@layout/Main/Header'
import Sidebar from '@layout/Main/Sidebar'
import Content from '@layout/Main/Content'
import './index.css'

interface MainProps {
  children: ReactNode;
}

const Main = ({ children }: MainProps): ReactElement => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="app">
      <Sidebar isExpanded={isExpanded} toggleSidebar={toggleSidebar} />
      <div className="main-content">
        <Header/>
        <Content>
          {children}
        </Content>
      </div>
    </div>
  )
}

export default Main
