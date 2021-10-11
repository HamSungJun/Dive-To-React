export interface ThemeContext {
    currentTheme: string;
    changeTheme: ((nextTheme: string) => void) | null;
}
