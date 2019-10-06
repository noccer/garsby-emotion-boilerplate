import baseTheme from 'gatsby-theme-monolith/src/gatsby-plugin-theme-ui'
import merge from 'deepmerge'

export default merge(baseTheme, {
  colors: {
    text: '#222',
    primary: 'tomato',
  },
})
