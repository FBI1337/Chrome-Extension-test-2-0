import React, { createContext,  ReactNode,  useContext, useState, useEffect } from 'react'

interface ThemeContextProps {
    theme: 'light' | 'dark'
    toggleTheme: () => void;
}


const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

const ThemeProvider: React.FC<{children: ReactNode}> = ({ children }) => {

    const [theme, setTheme] = useState<'light' | 'dark'>(() => {
        const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
        return savedTheme || 'light';
    });

    const updateCSSVariables = (newTheme: 'light' | 'dark') => {
        const root = document.documentElement;
        if (newTheme === 'light') {
            root.style.setProperty('background-color', 'white');
            root.style.setProperty('color', 'black');
            root.style.setProperty('input-background-color', 'white');
        } else {
            root.style.setProperty('input-background-color', 'gray');
            root.style.setProperty('color', 'white');
            root.style.setProperty('background-color', 'gray');
        }

        document.querySelectorAll('input').forEach((input) => {
            input.style.backgroundColor = getComputedStyle(root).getPropertyValue('input-background-color');
        });
    };

    const toggleTheme = () => {
        setTheme((prevTheme) => {
            const newTheme = prevTheme === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', newTheme);
            updateCSSVariables(newTheme);
            return newTheme;
        });
    };

    useEffect(() => {
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
