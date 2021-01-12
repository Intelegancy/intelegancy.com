import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import StartupIllustration from './illustrations/startupIllustration'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'


const useStyles = makeStyles( (theme: Theme) =>

    createStyles({

        mobileOnly: {

            display: 'inherit',

            [theme.breakpoints.up('sm')]: {

                display: 'none',
                
            },

        },

        deskTopOnly: {

            display: 'none',

            [theme.breakpoints.up('sm')]: {

                display: 'inherit',
                
            },

        },

    }),

)


const Masthead: React.FC = () => {

    const classes = useStyles()

    return (

        <section>

            <Box component={ Container } pt={ 5 }>

                <Grid container>

                    <Grid item container alignContent={ 'center' } justify={ 'center' } xs={ 12 } sm={ 7 } md={ 6 }>

                        <Box maxWidth={ '80ch' } my={ `auto` }>

                            <Typography color='textSecondary' component='h1' gutterBottom variant='h1' >
                            
                                Stärk er digitala närvaro med 
                                
                                    <Typography color='primary' component='span' variant='inherit' > intelegancy </Typography> 
                                    
                                webbyrå
                            
                            </Typography>

                            <Box my={ 4 }>

                                <Typography color='textSecondary' component='p' gutterBottom paragraph variant='h5'>
                                    
                                    Vi utvecklar webbsidor och progressiva webbappar till företag och organisationer över hela Sverige.
                                    
                                </Typography>

                            </Box>

                            <Button className={ classes.deskTopOnly } color='primary' size='large' variant='contained'>Kontakta Oss</Button>

                        </Box>

                    </Grid>

                    <Grid item xs={ 12 } sm={ 5 } md={ 6 }>

                        <Box my={ 5 }>

                            <StartupIllustration />

                        </Box>

                    </Grid>

                    <Button className={ classes.mobileOnly } color='primary' fullWidth size='large' variant='contained'>
                        
                        Kontakta Oss
                        
                    </Button>

                </Grid>

            </Box>

        </section>
    
    )

}


export default Masthead
