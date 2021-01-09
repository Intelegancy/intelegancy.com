import React, { FC, Fragment, ReactNode } from 'react'


interface Props {

    children: ReactNode

}

const Layout: FC<Props> = ({ children }) => {

    return (
    
        <Fragment>

            <main>

                { children }

            </main>
            
        </Fragment>
    
    )

}


export default Layout
