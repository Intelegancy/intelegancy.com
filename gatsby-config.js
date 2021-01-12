module.exports = {
    siteMetadata: {
        title: 'Intelegancy',
        navLinks:[
            {
                name: 'Tjänster',
                link: '/tjänster',
            },
            {
                name: 'Kontakt',
                link: '/kontakt',
            },
            {
                name: 'Om oss',
                link: '/om-oss',
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
