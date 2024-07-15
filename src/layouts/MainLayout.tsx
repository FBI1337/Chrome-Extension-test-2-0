import React, { ReactElement } from 'react'
import Header from '../components/Widgets/Header'
import Footer from '../components/Widgets/Footer'
import { HEADER_NAME } from '../constants'


type IProps = {
    children: ReactElement 
}


const MainLayout: React.FC<IProps> = ({children}) => {
  return (
    <>
    <Header name={HEADER_NAME}/>
    {children}
    <Footer />
    </>
  )
}

export default MainLayout
