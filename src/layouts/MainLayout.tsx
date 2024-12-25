import React, {ReactNode} from 'react'
import Header from '../components/Shared/Header/MainHeader'
import Footer from '../components/Shared/Footer/MainFooter'
import { HEADER_NAME } from '../constants'



const MainLayout: React.FC<{children: ReactNode}> = ({ children }) => {

  return (
    <>
    <Header name={HEADER_NAME}/>
    {children}
    <Footer />
    </>
  )
}

export default MainLayout
