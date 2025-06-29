import { useTheme } from "@/components/ui/ThemeProvider";
import { StyleSheet, Text, View } from "react-native";

export default function AboutScreen() {
  const { theme } = useTheme();

  return (
    <View style={[
      styles.container, 
      { backgroundColor: theme === 'dark' ? 'rgb(31 31 31)' : 'rgb(255 255 255)' } // secondary-100 for dark, background-0 for light
    ]}>
      <Text style={[
        styles.text, 
        { color: theme === 'dark' ? 'rgb(230 230 230)' : 'rgb(51 51 51)' } // primary-500 for both modes
      ]}>
        About screen
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
});
