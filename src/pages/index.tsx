/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Fragment } from 'react';
import Button from '../components/Button/Button';
import { ThemeProvider } from 'emotion-theming';
import { lightTheme } from '../utils/theme';
import ColourSwatch from '../components/Colours/ColourSwatch';
import { colourSets } from '../utils/colourUtil';
import { Container } from './Container';
// import { Button } from 'monolith-ui-components';

const background = 'red';
const primary = 'blue';

export default () => {
    return (
        <Container>
            <h1>Gatbsy starter Monolith</h1>
            <p>
                This starter is designed to work alongside extended versions of
                gatsby-theme-monolith and monolith-ui-components in a workspace, but nothing is
                stopping you from extending these however you wish. The whole repo can be found here{' '}
                <a href="https://github.com/danspratling/monolith">
                    https://github.com/danspratling/monolith
                </a>
                .
            </p>
            <p>
                This is not a pretty starter, i've left that for you to define. This is a functional
                starter which gives you a lot of options and puts you in a good position to start
                building medium-large sites
            </p>
            <p>
                This starter is set up using Theme-UI, TypeScript, and Storybook. Everything else is
                up to you (this may not be the best starter for beginners).
            </p>
            <div
                css={css`
                padding: 10,
                mb: 3,
                color: ${background},
                backgroundColor: ${primary},
            `}
            >
                This is a themed page. Default colour is{' '}
                <span css={css`backgroundColor: '#663399', color: '#fff'`}>gatsby purple</span>.
                Override colour is{' '}
                <span css={css`backgroundColor: 'primary', color: '#fff'`}>tomato</span>
            </div>
            <Button>Button ui component</Button>
        </Container>
    );
};
