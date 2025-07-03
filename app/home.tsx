import { Image } from 'expo-image';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View,
  ScrollView,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import ChatBox from '@/components/ui/ChatBox';

export default function HomeScreen() {
  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0} // Ajuste para não cobrir os campos
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.topHalf}>
            <Image
              source={require('@/assets/images/bg_castle.jpg')}
              style={styles.image}
              contentFit="fill"
            />
          </View>
          <View style={styles.bottonHalf}>
            <ChatBox />
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#2a2b2e',
  },
  content: {
    flexGrow: 1,
  },
  topHalf: {
    flex: 1,
  },
  bottonHalf: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
