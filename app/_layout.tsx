import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { AuthProvider, useAuth } from "@/context/auth/AuthProvider";
import "@/global.css";
import { Slot, useRouter, useSegments } from 'expo-router';
import { useEffect } from "react";

function RootLayoutNav() {
  const { isAuthenticated } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    const inAuthGroup = segments[0] === '(tabs)';

    if (!isAuthenticated && inAuthGroup) {
      // Add a small delay to ensure layout is mounted
      setTimeout(() => {
        router.replace('/login');
      }, 0);
    } else if (isAuthenticated && !inAuthGroup && segments[0] !== 'login') {
      setTimeout(() => {
        router.replace('/(tabs)');
      }, 0);
    }
  }, [isAuthenticated, segments]);

  return <Slot />;
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <RootLayoutNav />
      </AuthProvider>
    </ThemeProvider>
  );
}
