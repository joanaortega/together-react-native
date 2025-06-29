import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import React, { createContext, useContext } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  // Temporarily hardcoded to light mode to reduce scope - will implement dark mode later
  const theme: Theme = "light";
  const toggleTheme = () => {};

  /* Theme switching functionality commented out to reduce initial scope
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    (async () => {
      try {
        const savedTheme = (await AsyncStorage.getItem("theme")) as Theme | null;
        if (savedTheme) {
          setTheme(savedTheme);
        }
      } catch (error) {
        console.error("Error loading theme:", error);
      }
    })();
  }, []);

  const toggleTheme = async () => {
    try {
      const newTheme = theme === "light" ? "dark" : "light";
      setTheme(newTheme);
      await AsyncStorage.setItem("theme", newTheme);
    } catch (error) {
      console.error("Error saving theme:", error);
    }
  };
  */

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <GluestackUIProvider mode={theme}>{children}</GluestackUIProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}; 