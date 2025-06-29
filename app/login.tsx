import { Button, ButtonText } from '@/components/ui/button';
import { useTheme } from '@/components/ui/ThemeProvider';
import { useAuth } from '@/context/auth/AuthProvider';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function LoginScreen() {
  const { isAuthenticated, login } = useAuth();
  const { theme } = useTheme();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.replace('/(tabs)');
    }
  }, [isAuthenticated]);

  return (
    <View style={[
      styles.container,
      { backgroundColor: theme === 'dark' ? 'var(--color-secondary-0)' : 'var(--color-background-0)' }
    ]}>
      <Text style={[
        styles.title,
        { color: theme === 'dark' ? 'var(--color-primary-500)' : 'var(--color-primary-500)' }
      ]}>
        Welcome
      </Text>
      <Button 
        size="lg"
        variant="solid"
        action="primary"
        onPress={login}
      >
        <ButtonText>Log In</ButtonText>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  }
}); 