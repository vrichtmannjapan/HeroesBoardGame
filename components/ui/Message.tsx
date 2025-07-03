import { View, Text, StyleSheet } from "react-native";

type MessageProps = {
  username?: string;
  message?: string;
}

export default function Message({username, message}: MessageProps) {
  return(
    <View style={styles.textContainer}>
      <Text style={styles.username}>{username} : </Text>
      <Text style={styles.message}>{message}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textContainer:{
    display: 'flex',
    flexDirection: 'row'
  },
  username:{
    color: 'rgb(0, 123, 255)'
  },
  message:{
    color: 'white'
  }
})
