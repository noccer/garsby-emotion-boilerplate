require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    plugins: [
        `gatsby-plugin-emotion`,
        `gatsby-plugin-typescript`
    ],
}