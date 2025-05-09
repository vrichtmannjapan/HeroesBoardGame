import { Image } from 'expo-image';
import {StyleSheet, Text, View } from 'react-native';
import ChatBox from '@/components/ui/ChatBox'

export default function HomeScreen() {
  return (
    <View style={styles.screen}>
      <View style={styles.topHalf}>
        <Image source={require('@/assets/images/bg_castle.jpg')} style={styles.image} contentFit='fill'/>
      </View>
      <View style={styles.bottonHalf}>
        <ChatBox/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    screen: {
      flex:1
    },
    topHalf: {
      flex: 1
    },
    bottonHalf: {
      flex: 1
    },
    image: {
      width: '100%',
      height: '100%',
    }
});
