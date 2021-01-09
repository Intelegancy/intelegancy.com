import React, { FC, Fragment, ReactNode } from 'react'
import Header from './header'


interface Props {

    children: ReactNode

}

const Layout: FC<Props> = ({ children }) => {

    return (
    
        <Fragment>

            <Header />

            <main>

                { children }

            </main>
            
        </Fragment>
    
    )

}


export default Layout
