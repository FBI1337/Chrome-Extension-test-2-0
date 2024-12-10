import React, {ReactNode} from 'react'
import Header from '../components/Shared/Header/MainHeader'
import Footer from '../components/Shared/Footer/MainFooter'
import { HEADER_NAME } from '../constants'
import ThemeProvider from './ThemeLayout'



const MainLayout: React.FC<{children: ReactNode}> = ({ children }) => {

  return (
    <>
    <ThemeProvider>
    <Header name={HEADER_NAME}/>
    {children}
    <Footer />
    </ThemeProvider>
    </>
  )
}

export default MainLayout
