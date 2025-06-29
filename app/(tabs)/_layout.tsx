import { useTheme } from '@/components/ui/ThemeProvider';
import { useAuth } from '@/context/auth/AuthProvider';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';
import { Pressable, Text } from 'react-native';

export default function TabLayout() {
  const { logout } = useAuth();
  const { theme } = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'rgb(251 157 75)', // tertiary-500 for light mode
        headerStyle: {
          backgroundColor: theme === 'dark' ? 'rgb(31 31 31)' : 'rgb(255 255 255)', // secondary-100 for dark, background-0 for light
        },
        headerShadowVisible: false,
        headerTintColor: theme === 'dark' ? 'rgb(230 230 230)' : 'rgb(51 51 51)', // primary-500 for both modes
        tabBarStyle: {
          backgroundColor: theme === 'dark' ? 'rgb(31 31 31)' : 'rgb(255 255 255)', // secondary-100 for dark, background-0 for light
        },
        headerRight: () => (
          <Pressable
            onPress={logout}
            style={{ marginRight: 15 }}
          >
            <Text style={{ color: 'rgb(251 157 75)', fontSize: 16, fontWeight: '600' }}> {/* tertiary-500 */}
              Logout
            </Text>
          </Pressable>
        ),
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
        }}
      />
    </Tabs>
  );
}
