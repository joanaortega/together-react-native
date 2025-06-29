import { Button, ButtonText } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { useAuth } from '@/context/auth/AuthProvider';
import { Link, useRouter } from 'expo-router';
import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

export default function SignupScreen() {
  const { isAuthenticated, signup } = useAuth();
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
          Create an account
        </Heading>
        <HStack space="xs" alignItems="center">
          <Text size="lg" className="text-typography-600">
            Already have an account?
          </Text>
          <Link href="/login" asChild>
            <Text size="lg" className="text-tertiary-400">
              Log in
            </Text>
          </Link>
        </HStack>
      </VStack>
      <Button 
        size="xl"
        variant="solid"
        action="primary"
        onPress={signup}
        style={styles.fullWidth}
      >
        <ButtonText>Create Account</ButtonText>
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