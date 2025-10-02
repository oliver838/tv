import React from 'react'
import { Outlet } from 'react-router'
import { MyBottomNav } from './MyBottomNav'

export const MyLayout = () => {
  return (
    <div>
      <Outlet/>{}
      <MyBottomNav/>
    </div>
  )
}
