import { createMuiTheme } from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'
import grey from '@material-ui/core/colors/grey'


const COLOR_PALETTE = {

    bgLightGrey: grey['50'],
    darkGrey: grey['700'],
    inverseTextColor: `#fff`,
    mainColor: blue.A200,

}



const theme = createMuiTheme({

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

    },

    palette: {

        primary: {

            main: COLOR_PALETTE.mainColor,

        },

    },

    shape: {

        borderRadius: 5,

    },

})


export default theme
