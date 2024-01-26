import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarComp from './Navbar'
import { Provider } from 'react-redux'
import store from '../store/store'


function RootRoute() {
  return (
       <div>
       <Provider store={store}>
     <NavbarComp />
      <main>
        <Outlet/>
      </main>
      </Provider>
    </div>
  )
}

export default RootRoute
