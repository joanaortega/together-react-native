import { Heading } from "@/components/ui/heading";
import { useTheme } from "@/components/ui/ThemeProvider";
import { Link } from 'expo-router';
import { StyleSheet, View } from 'react-native';

export default function Index() {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme === 'dark' ? '#25292e' : '#ffffff' }]}>
      <Heading size="3xl" className={theme === 'dark' ? 'text-white' : 'text-black'}>
        Home screen
      </Heading>
      
      <Link href="/about" style={[styles.button, { color: theme === 'dark' ? '#fff' : '#25292e' }]}>
        Go to About screen
      </Link>

      {/* Theme toggle button temporarily removed - will be re-enabled when dark mode is implemented
      <Pressable 
        onPress={toggleTheme}
        style={[styles.themeButton, { backgroundColor: theme === 'dark' ? '#ffffff' : '#25292e' }]}
      >
        <Text style={[styles.themeButtonText, { color: theme === 'dark' ? '#25292e' : '#ffffff' }]}>
          Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
        </Text>
      </Pressable>
      */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
  },
  themeButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 20,
  },
  themeButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
});
