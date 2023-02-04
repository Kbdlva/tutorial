import React from 'react';
import { useTheme, THEME_DARK, THEME_LIGHT, THEME_NEUTRAL } from '@context/ThemeProvider';

import styles from './ChooseSide.module.css';

const ChooseSide = () => {
    const isTheme = useTheme();
    return (
        <>
        {isTheme.theme}
        <button onClick={()=> isTheme.change(THEME_LIGHT)}>Light</button>
        <button onClick={()=> isTheme.change(THEME_DARK)}>Dark</button>
        <button onClick={()=> isTheme.change(THEME_NEUTRAL)}>Neutral</button>
        </>
    )
}

export default ChooseSide
