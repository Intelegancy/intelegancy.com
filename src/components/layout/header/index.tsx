import React, { FC, Fragment } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import ElevationScroll from './elevationScroll'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { Link } from 'gatsby'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Container from '@material-ui/core/Container'
import Slide from '@material-ui/core/Slide'
import Logo from '../../illustrations/logo'
import Navigation from './navigation'


const useStyles = makeStyles( (theme: Theme) =>

    createStyles({

        appBar: {

            paddingTop: theme.spacing(1),

        },


    }),

)


const Header: FC = () => {

    const classes = useStyles()

    const trigger = useScrollTrigger()

    return (

        <Fragment>

            <ElevationScroll>

                <Slide appear={ false } direction='down' in={ !trigger }>

                    <AppBar className={ classes.appBar } color='default'>

                        <Container>

                            <Toolbar disableGutters>

                                <Link to='/'>

                                    <Logo />

                                </Link>

                                <div className='grow' />

                                <Navigation />

                            </Toolbar>

                        </Container>

                    </AppBar>

                </Slide>

            </ElevationScroll>

        </Fragment>

    )

}


export default Header
