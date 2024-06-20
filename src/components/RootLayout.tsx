import React from 'react'
import { ReactElement } from 'react'
import Header from './header/Header'
import HeaderBottom from './header/HeaderBottom'
import Footer from './Footer'

interface Props {
    children: ReactElement
}

export default function RootLayout({children}:Props) {
  return (
    <div>
      <Header/>
      <HeaderBottom/>
      {children}
      <Footer/>
    </div>
  )
}
