/** @jsx jsx */
import { jsx, InterpolationWithTheme } from '@emotion/core';

import * as React from 'react';
import { useTheme } from 'emotion-theming';
import { StorybookTheme } from '../../utils/theme';

interface ButtonProps {
    onClick?: (event: any) => void;
    label?: string;
}
/**
 *
 * @param param0
 */

const Button: React.FunctionComponent<ButtonProps> = ({ children, label, onClick }) => {
    const theme = useTheme<StorybookTheme>();

    // console.table(theme.colors);

    const cssStyles: InterpolationWithTheme<StorybookTheme> = {
        color: theme.colors.text,
        backgroundColor: theme.colors.primary,
    };

    return (
        <button css={cssStyles} onClick={onClick}>
            {label || children}
        </button>
    );
};

export default Button;
