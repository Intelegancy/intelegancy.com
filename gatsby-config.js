module.exports = {
    siteMetadata: {
        title: 'Intelegancy',
        navLinks:[
            {
                name: 'Tjänster',
                link: '#',
            },
            {
                name: 'Kontakt',
                link: '#',
            },
            {
                name: 'Om oss',
                link: '#',
            },
        ]
    },
    plugins: [
        {
            resolve: `gatsby-plugin-material-ui`,
            options: {
                stylesProvider: {
                    injectFirst: true,
                },
            },
        },
        `gatsby-plugin-styled-components`,
    ],
}
