"use client";

import { createContext, useMemo, useState } from "react";
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';

export const defaultColorMode = {
    get data() {
        if (!!localStorage) {
            const value = localStorage.getItem("defaultColorMode");
            return value ? value : "dark";
        }
        return "dark"
    },
    set data(value) {
        if (!!localStorage) {
            localStorage.setItem("defaultColorMode", value);
        }
    }
};

export const ThemeModeContext = createContext({ toggleThemeMode: () => { } });

const getDesignTokens = (mode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                background: {
                    default: "rgb(240 242 245)",
                }
            }
            : {}),
    },
});

export const AppThemeProvider = props => {
    const [mode, setMode] = useState(defaultColorMode.data);
    const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
    const colorMode = useMemo(() => ({
        toggleThemeMode: () => {
            setMode(prevMode => {
                const newColorMode = prevMode === 'light' ? 'dark' : 'light';
                defaultColorMode.data = newColorMode;
                return newColorMode;
            });
        }
    }), []);

    return (
        <ThemeModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline enableColorScheme />
                {props.children}
            </ThemeProvider>
        </ThemeModeContext.Provider>
    );
}