import { Heading } from "@/components/ui/heading";
import { useTheme } from "@/components/ui/ThemeProvider";
import { StyleSheet, View } from "react-native";

export default function AboutScreen() {
  const { theme } = useTheme();

  return (
    <View style={[
      styles.container, 
      { backgroundColor: 'var(--color-background-0)' }
    ]}>
      <Heading 
        size="2xl"
        className="text-typography-900"
      >
        About screen
      </Heading>
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
  }
});
