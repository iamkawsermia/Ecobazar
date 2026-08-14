import React from 'react'
import { Outlet, useLocation } from 'react-router'
import {HeadNav}from '../Layout/HeadNav'
import { SearchBar } from './SearchBar'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { FooterTop } from './FooterTop'
import { Breadcrumbs } from './Breadcrumbs'
import PopUp from '../PopUp/PopUp'

export const MainLayout = () => {
  let PageName = useLocation().pathname

  return (
    <>
        <PopUp/>
        <HeadNav/>
        <SearchBar className=''/>
        <Navbar/>
       {PageName !=='/'&& <Breadcrumbs/>}
        <Outlet/>
        <FooterTop/>
        <Footer/>
    </>

  )
}
