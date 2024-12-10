import React, { createContext,  ReactNode,  useContext, useState } from 'react'

interface ThemeContextProps {
    theme: 'light' | 'dark'
    toggleTheme: () => void;
}


const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

const ThemeProvider: React.FC<{children: ReactNode}> = ({ children }) => {

    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    const updateCSSVariables = (newTheme: 'light' | 'dark') => {
        const root = document.documentElement;
        if (newTheme === 'light') {
            root.style.setProperty('background-color', 'white');
        } else {
            root.style.setProperty('background-color', 'gray');
        }
    };

    const toggleTheme = () => {
        setTheme((prevTheme) => {
            const newTheme = prevTheme === 'light' ? 'dark' : 'light';
            updateCSSVariables(newTheme);
            return newTheme;
        });
    };

    React.useEffect(() => {
        updateCSSVariables(theme);
    }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }
    return context;
}

export default ThemeProvider
