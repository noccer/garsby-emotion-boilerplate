# A Gatsby Starter designed to work with monolith

```shell
gatsby new my-site https://github.com/danspratling/gatsby-starter-monolith
cd my-site
yarn develop
```

## Layout

```shell
.
└── gatsby-starter-monolith
    ├── .storybook
    │   ├── addons.js
    │   ├── config.js
    │   └── webpack.config.js
    ├── src
    │   ├── gatsby-plugin-theme-ui
    │   │   └── index.ts
    │   ├── gatsby-theme-monolith
    │   │   └── templates
    │   │       └── index.tsx
    │   └── pages
    │       └── theme.tsx
    ├── stories
    │   └── Button.stories.tsx
    ├── gatsby-config.js
    ├── package.json
    └── README.md

8 folders, 10 files
```

### `gatsby-starter-monolith`

Despite its name, Gatsby Starter Monolith is a very basic gatsby site. It's designed as a starter for a custom gatsby theme, only containing a couple default components and some theme settings. It can be extended on its own but it's best used in conjunction with the [Gatsby Monolith Workspace](https://github.com/danspratling/monolith)

It is built using **Typescript** and **Theme-UI**
