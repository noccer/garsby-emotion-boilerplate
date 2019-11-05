/** @jsx jsx */
import { jsx, InterpolationWithTheme, css } from '@emotion/core';

import * as React from 'react';
import { useTheme } from 'emotion-theming';
import { NiallTheme } from '../../utils/theme';

interface ButtonProps {
    onClick?: (event: any) => void;
    label?: string;
}
/**
 *
 * @param param0
 */

const Button: React.FunctionComponent<ButtonProps> = ({ children, label, onClick }) => {
    const theme = useTheme<NiallTheme>();

    const cssStyles: InterpolationWithTheme<NiallTheme> = css({
        ':focus': {
            outline: 'none',
            borderRadius: '100px',
            boxShadow: `0px 0px 3px ${theme.colors.secondary}`,
        },
        color: theme.colors.primary,
        backgroundColor: theme.buttons.primary.bg,
        borderRadius: '100px',
        border: 'none',
        padding: `${theme.lineHeights.body / 3}rem ${theme.lineHeights.body / 2}rem`,
        // outline: 'green', // TODO: use a context and detect 'userIsTabbing'
        // https://medium.com/hackernoon/removing-that-ugly-focus-ring-and-keeping-it-too-6c8727fefcd2
    });

    return (
        <button css={cssStyles} onClick={onClick}>
            {label || children}
        </button>
    );
};

export default Button;
