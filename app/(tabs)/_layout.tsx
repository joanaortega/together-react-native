import { Button, ButtonText } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { useTheme } from '@/components/ui/ThemeProvider';
import { useAuth } from '@/context/auth/AuthProvider';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  const { logout } = useAuth();
  const { theme } = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'var(--color-tertiary-400)', // tertiary-400 for light mode
        headerStyle: {
          backgroundColor: theme === 'dark' ? 'var(--color-secondary-100)' : 'var(--color-background-0)',
        },
        headerShadowVisible: false,
        headerTintColor: theme === 'dark' ? 'var(--color-primary-500)' : 'var(--color-primary-500)',
        tabBarStyle: {
          backgroundColor: theme === 'dark' ? 'var(--color-secondary-100)' : 'var(--color-background-0)',
        },
        headerRight: () => (
          <Button
            variant="link"
            onPress={logout}
            className="mr-4"
            size="lg"
          >
            <ButtonText>Logout</ButtonText>
          </Button>
        ),
        tabBarLabel: ({ focused, color }) => {
          return (
            <Text
              size="md"
              className={`${focused ? 'font-bold' : 'font-normal'}`}
              style={{ color }}
            >
              {focused ? 'Home' : 'home'}
            </Text>
          );
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24}/>
          ),
          tabBarLabel: ({ focused, color }) => {
            return (
              <Text
                size="md"
                className={`${focused ? 'font-bold' : 'font-normal'}`}
                style={{ color }}
              >
                {focused ? 'About' : 'about'}
              </Text>
            );
          },
        }}
      />
    </Tabs>
  );
}
