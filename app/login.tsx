import { Button, ButtonText } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { useTheme } from '@/components/ui/ThemeProvider';
import { useAuth } from '@/context/auth/AuthProvider';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

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
      { backgroundColor: 'var(--color-background-0)' }
    ]}>
      <Heading 
        size="2xl"
        className="text-typography-900"
      >
        Login to your account
      </Heading>
      <Button 
        size="xl"
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
  }
}); 