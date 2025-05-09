import { View, Text, StyleSheet } from "react-native";

export default function Message(){
  return(
    <View style={styles.textContainer}>
      <Text style={styles.username}>UserName : </Text>
      <Text style={styles.message}>Message</Text>
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
