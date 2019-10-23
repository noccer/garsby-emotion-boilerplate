import * as React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { lightTheme } from '../utils/theme';

interface LayoutProps {}

export const Container: React.FunctionComponent<LayoutProps> = (props) => {
    return (
        <ThemeProvider theme={lightTheme}>
            <section className="sectiony">{props.children}</section>
        </ThemeProvider>
    );
};
