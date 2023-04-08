import React from 'react'
import { Header } from './components/Header'
import {Outlet} from 'react-router-dom'
import { Watchlist } from './pages/Watchlist'

export const Layout = () => {
  return (
    <div>
        <Header/>
        
        <Outlet/>
    </div>
  )
}
