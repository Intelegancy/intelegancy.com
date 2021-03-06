import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import StartupIllustration from './illustrations/startupIllustration'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
// import CanvasComponent from './canvas'
import FastForwardIcon from './illustrations/icons/fastForwardIcon'
import PriceTagIcon from './illustrations/icons/priceTagIcon'
import BoxesIcon from './illustrations/icons/boxesIcon'
import GearIcon from './illustrations/icons/gearIcon'


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

                                <Typography color='textSecondary' component='p' gutterBottom paragraph variant='body1'>
                                    
                                    Vi utvecklar webbsidor och progressiva webbappar till företag och organisationer över hela Sverige.
                                    
                                </Typography>

                            </Box>

                            <Button className={ classes.deskTopOnly } color='primary' size='large' variant='contained'>Kontakta Oss</Button>

                        </Box>

                    </Grid>

                    <Grid item xs={ 12 } sm={ 5 } md={ 6 }>

                        <Box my={ 5 }>

                            <StartupIllustration />

                            {/* <CanvasComponent /> */}

                        </Box>

                    </Grid>

                    <Button className={ classes.mobileOnly } color='primary' fullWidth size='large' variant='contained'>
                        
                        Kontakta Oss
                        
                    </Button>

                </Grid>

                <Box mt={ 5 } pt={ 5 }>

                    <Grid container spacing={ 5 }>

                        <Grid item xs={ 12 } sm={ 6 } lg={ 3 }>

                            <PriceTagIcon />

                            <Typography component='h2' gutterBottom variant='h6'>Kostnadseffektivitet</Typography>

                            <Typography color='textSecondary' component='p' gutterBottom paragraph variant='body2'>
                                
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam eum voluptate cumque suscipit provident qui repellat maxime vitae consectetur facere!
                                
                            </Typography>

                        </Grid>

                        <Grid item xs={ 12 } sm={ 6 } lg={ 3 }>

                            <FastForwardIcon />

                            <Typography component='h2' gutterBottom variant='h6'>Prestanda</Typography>

                            <Typography color='textSecondary' component='p' gutterBottom paragraph variant='body2'>
                                
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam eum voluptate cumque suscipit provident qui repellat maxime vitae consectetur facere!
                                
                            </Typography>

                        </Grid>

                        <Grid item xs={ 12 } sm={ 6 } lg={ 3 }>

                            <BoxesIcon />

                            <Typography component='h2' gutterBottom variant='h6'>Skalbarhet</Typography>

                            <Typography color='textSecondary' component='p' gutterBottom paragraph variant='body2'>
                                
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam eum voluptate cumque suscipit provident qui repellat maxime vitae consectetur facere!
                                
                            </Typography>

                        </Grid>

                        <Grid item xs={ 12 } sm={ 6 } lg={ 3 }>

                            <GearIcon />

                            <Typography component='h2' gutterBottom variant='h6'>Drift och förvaltning</Typography>

                            <Typography color='textSecondary' component='p' gutterBottom paragraph variant='body2'>
                                
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam eum voluptate cumque suscipit provident qui repellat maxime vitae consectetur facere!
                                
                            </Typography>

                        </Grid>

                    </Grid>

                </Box>

            </Box>

        </section>
    
    )

}


export default Masthead
