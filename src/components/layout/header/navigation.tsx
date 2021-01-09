import React, { FC } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'



const useStyles = makeStyles( (theme: Theme) =>

    createStyles({

        grow: {

            flexGrow: 1,

        },

        deskTopOnly: {

            display: 'none',

            [theme.breakpoints.up('md')]: {

                display: 'flex',
                
            },

        },

        btn: {

            color: theme.palette.grey['700'],
            fontWeight: 300,
            fontFamily: `Montserrat, Verdana`,
            minWidth: `0`,
            padding: `0 1rem`,
            // textTransform: `none`,

        },

    }),

)


interface LinkProps {

    name: string

    link: string

}


const Navigation: FC = () => {

    const { site: { siteMetadata: { navLinks } } } = useStaticQuery(graphql`
        query NavQuery {
            site {
                siteMetadata {
                    navLinks {
                        name
                        link
                    }
                }
            }
        }
    `)

    const classes = useStyles()

    return (

        <nav className={ classes.deskTopOnly }>

            { 

                navLinks.map( (link: LinkProps) => {

                    return (

                        <Button
                            className={ classes.btn }
                            component={ Link }
                            key={ link.link }
                            to={ '#' }
                        >

                            { link.name }

                        </Button>

                    )

                })

            }
            
        </nav>
    
    )

}


export default Navigation
