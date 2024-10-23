import { Suspense, Fragment, ReactElement } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider, createStore } from 'jotai'
import { useBreadcrumbs } from './hooks/useBreadcrumbs'

import Main from '@layout/Main'
import Dashboard from '@pages/Dashboard'
import Accounts from '@pages/Accounts'
import Devices from '@pages/Devices'
import Tasks from '@pages/Tasks'
import Settings from '@pages/Settings'

const stateStore = createStore()

const AppContent = () => {
  useBreadcrumbs();

  return (
    <Main>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/devices" element={<Devices />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Main>
  );
};

const App = (): ReactElement => {
  return (
    <BrowserRouter>
      <Provider store={stateStore}>
        <Suspense fallback={<Fragment>로딩 중...</Fragment>}>
          <AppContent />
        </Suspense>
      </Provider>
    </BrowserRouter>
  )
}

export default App
