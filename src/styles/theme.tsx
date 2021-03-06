import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
// import blue from '@material-ui/core/colors/blue'
import grey from '@material-ui/core/colors/grey'


const COLOR_PALETTE = {

    bgLightGrey: grey['50'],
    textBody: '#0000008a',
    darkGrey: grey['700'],
    inverseTextColor: `#fff`,
    mainColor: '#5c79e2',

}



const theme = responsiveFontSizes(createMuiTheme({

    overrides: {
        
        MuiCssBaseline: {
            
            '@global': {

                body: {

                    overflowY: `scroll`,

                },

                '#___gatsby': {

                    overflowX: `hidden`,

                },

                '#gatsby-focus-wrapper': {

                    minHeight: `100vh`,
                    position: `relative`,
                    paddingTop: `72px`,

                },

                '.grow': {

                    flexGrow: 1,
        
                },

            },

        },

        MuiAppBar: {

            colorDefault: {

                backgroundColor: COLOR_PALETTE.bgLightGrey,

            }

        },

        MuiButton: {

            contained: {

                fontSize: `calc(0.8rem + 0.2vw) !important`,
            
            },

        },

        MuiContainer: {

            maxWidthLg: {

                padding: `0 2rem`,

            },

        },

        MuiTypography: {

            body1: {

                fontSize: `20px`,

            },

            body2: {

                fontSize: `17px`,

            },

            h1: {

                fontFamily: `Comfortaa`,
                fontSize: `calc(1.5rem + 1vw) !important`,
                fontWeight: 600,

            },

            h6: {

                fontFamily: `Comfortaa`,
                // fontSize: `18px`,
                fontWeight: 600,
                color: `#000000a0`,

            }

        },

    },

    palette: {

        primary: {

            main:  COLOR_PALETTE.mainColor,

        },

    },

    shape: {

        borderRadius: 10,

    },

}))


export default theme
