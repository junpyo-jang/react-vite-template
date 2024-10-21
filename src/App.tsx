import { Suspense, Fragment, ReactElement } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './layouts/Main'
import Accounts from './pages/Accounts'
import Devices from './pages/Devices'
import Tasks from './pages/Tasks'
import Settings from './pages/Settings'

const App = (): ReactElement => {
  const breadcrumbItems = [
    { label: 'Accounts', path: '/' },
    { label: 'choroc', path: '/choroc' },
    { label: 'wms', path: '/choroc/wms' },
  ];

  return (
    <BrowserRouter>
      <Suspense fallback={<Fragment>로딩 중...</Fragment>}>
        <Main breadcrumbItems={breadcrumbItems}>
          <Routes>
            <Route path="/" element={<Accounts />} />
            <Route path="/devices" element={<Devices />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Main>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
