import { useTheme } from '@/components/ui/ThemeProvider';
import { useAuth } from '@/context/auth/AuthProvider';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

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
      { backgroundColor: theme === 'dark' ? 'rgb(20 20 20)' : 'rgb(255 255 255)' } // secondary-0 for dark, background-0 for light
    ]}>
      <Text style={[
        styles.title,
        { color: theme === 'dark' ? 'rgb(230 230 230)' : 'rgb(51 51 51)' } // primary-500 for both modes
      ]}>
        Welcome
      </Text>
      <Pressable 
        onPress={login}
        style={[
          styles.loginButton,
          { backgroundColor: theme === 'dark' ? 'rgb(230 230 230)' : 'rgb(51 51 51)' } // primary-500 for both modes
        ]}
      >
        <Text style={[
          styles.loginButtonText,
          { color: theme === 'dark' ? 'rgb(20 20 20)' : 'rgb(255 255 255)' } // secondary-0 for dark, background-0 for light
        ]}>
          Log In
        </Text>
      </Pressable>
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
  },
  loginButton: {
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  loginButtonText: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
}); 