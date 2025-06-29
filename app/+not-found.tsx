import { Button, ButtonText } from '@/components/ui/button';
import { useTheme } from '@/components/ui/ThemeProvider';
import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function NotFoundScreen() {
  const { theme } = useTheme();
  const router = useRouter();

  return (
    <>
      <Stack.Screen options={{ title: 'Oops! Not Found' }} />
      <View style={[
        styles.container,
        { backgroundColor: theme === 'dark' ? 'var(--color-secondary-100)' : 'var(--color-background-0)' }
      ]}>
        <Button 
          variant="link"
          onPress={() => router.replace('/')}
        >
          <ButtonText>Go back to Home screen!</ButtonText>
        </Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
