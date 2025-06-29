import { useTheme } from '@/components/ui/ThemeProvider';
import { Link, Stack } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function NotFoundScreen() {
  const { theme } = useTheme();

  return (
    <>
      <Stack.Screen options={{ title: 'Oops! Not Found' }} />
      <View style={[
        styles.container,
        { backgroundColor: theme === 'dark' ? 'rgb(31 31 31)' : 'rgb(255 255 255)' } // secondary-100 for dark, background-0 for light
      ]}>
        <Link 
          href="/" 
          style={[
            styles.button,
            { color: theme === 'dark' ? 'rgb(230 230 230)' : 'rgb(51 51 51)' } // primary-500 for both modes
          ]}
        >
          Go back to Home screen!
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
  },
});
