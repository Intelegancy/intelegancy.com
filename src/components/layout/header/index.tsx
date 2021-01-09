import React, { FC, Fragment } from 'react'
import ElevationScroll from './elevationScroll'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Container from '@material-ui/core/Container'
import Slide from '@material-ui/core/Slide'


const Header: FC = () => {

    const trigger = useScrollTrigger()

    return (

        <Fragment>

            <ElevationScroll>

                <Slide appear={ false } direction='down' in={ !trigger }>

                    <AppBar color='default'>

                        <Container>

                            <Toolbar>

                                <Typography variant='h6'>intelegancy</Typography>

                            </Toolbar>

                        </Container>

                    </AppBar>

                </Slide>

            </ElevationScroll>

        </Fragment>

    )

}


export default Header
