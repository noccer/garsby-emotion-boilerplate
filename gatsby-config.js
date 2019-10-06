require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [`gatsby-theme-monolith`, `gatsby-plugin-typescript`],
}
