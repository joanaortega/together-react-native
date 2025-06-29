import { Button, ButtonText } from '@/components/ui/button';
import { Heading } from "@/components/ui/heading";
import { useTheme } from "@/components/ui/ThemeProvider";
import { useRouter } from 'expo-router';
import { StyleSheet, View } from 'react-native';

export default function Index() {
  const { theme } = useTheme();
  const router = useRouter();

  return (
    <View style={[styles.container, { backgroundColor: 'var(--color-background-0)' }]}>
      <Heading 
        size="2xl"
        className="text-typography-900"
      >
        Home screen
      </Heading>
      
      <Button 
        variant="link"
        onPress={() => router.push('/about')}
      >
        <ButtonText>Go to About screen</ButtonText>
      </Button>

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
