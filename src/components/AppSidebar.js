import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  CCloseButton,
  CImage,
  CSidebar,
  CSidebarBrand,
  CSidebarFooter,
  CSidebarHeader,
  CSidebarToggler,
} from '@coreui/react'
import { toggle } from '../store/sidebarActions'
import store from '../store/store'

import { AppSidebarNav } from './AppSidebarNav'

// sidebar nav config
import navigation from '../_nav'

const AppSidebar = () => {
  // const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const isSidebarVisible = useSelector((state) => state.sidebar.isSidebarVisible)
  console.log('isSidebarVisible', isSidebarVisible)
  return (
    <CSidebar
      className="border-end"
      colorScheme="dark"
      position="fixed"
      unfoldable={false}
      visible={isSidebarVisible}
      onVisibleChange={() => {
        // store.dispatch(toggle())
      }}
    >
      <CSidebarHeader className="border-bottom">
        <CSidebarBrand to="/">
          <CImage rounded thumbnail src="src/assets/logo.jpg" width={200} height={200} />
        </CSidebarBrand>
        <CCloseButton
          className="d-lg-none"
          dark
          onClick={() => store.dispatch(toggle())}
        />
      </CSidebarHeader>
      <AppSidebarNav items={navigation} />
      <CSidebarFooter className="border-top d-none d-lg-flex">
        <CSidebarToggler
          onClick={() => store.dispatch(toggle())}
        />
      </CSidebarFooter>
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
