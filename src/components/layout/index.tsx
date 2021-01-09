import React, { FC, Fragment, ReactNode } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Header from './header'


interface Props {

    children: ReactNode

}


const Layout: FC<Props> = ({ children }) => {

    return (
    
        <Fragment>

            <CssBaseline />

            <Header />

            <main>

                { children }

            </main>
            
        </Fragment>
    
    )

}


export default Layout
