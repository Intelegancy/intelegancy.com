import React, { FC, ReactNode } from 'react'
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../styles/theme'
import CssBaseline from '@material-ui/core/CssBaseline'
import Header from './header'


interface Props {

    children: ReactNode

}


const Layout: FC<Props> = ({ children }) => {

    return (

        <ThemeProvider theme={ theme }>

            <CssBaseline />

            <Header />

            <main>

                { children }

            </main>
   
        </ThemeProvider>

    )

}


export default Layout
