import { Outlet } from 'react-router-dom'

import { Main } from './Main'
import { Navigation } from './Navigation'
import { Toast } from './Toast'

export function App() {
  return (
    <>
      <Toast/>
      <Navigation></Navigation>
      <Main>
         <Outlet/>
      </Main>
    </>
  )
}
