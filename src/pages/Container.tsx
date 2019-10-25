import * as React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { lightTheme } from '../utils/theme';
import { Global, css } from '@emotion/core';

interface LayoutProps {}

export const Container: React.FunctionComponent<LayoutProps> = (props) => {
    return (
        <ThemeProvider theme={lightTheme}>
            <Global
                styles={css`
                    body {
                        font-family: sans-serif;
                        // todo: include CSS reset here instead
                    }
                `}
            />
            {props.children}
        </ThemeProvider>
    );
};
