import { Button, ButtonText } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { useTheme } from '@/components/ui/ThemeProvider';
import { VStack } from '@/components/ui/vstack';
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
      <VStack space="sm" style={styles.fullWidth}>
        <Heading size="2xl" className="text-typography-900">
          Login to your account
        </Heading>
        <Text size="2xl" className="text-typography-600">
          Don't have an account?
        </Text>
      </VStack>
      <Button 
        size="xl"
        variant="solid"
        action="primary"
        onPress={login}
        style={styles.fullWidth}
      >
        <ButtonText>Log In</ButtonText>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    maxWidth: 480,
    marginHorizontal: 'auto',
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  fullWidth: {
    width: '100%'
  }
}); 