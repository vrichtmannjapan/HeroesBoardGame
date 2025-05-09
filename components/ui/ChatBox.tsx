import {StyleSheet, View, Text, TouchableOpacity} from "react-native";
import {Button, IconButton, TextInput} from 'react-native-paper';
import Message from '@/components/ui/Message'

export default function ChatBox(){
  return(
    <View style={styles.chatbox}>
      <View style={styles.chat}>
          <Message/>
      </View>
      <View style={styles.chatMessage}>
        <View style={styles.containerButton}>
          <TextInput
           style={[styles.input]}
           placeholder="Type your message"
           placeholderTextColor="#aaa"
           selectionColor="#007BFF"
           underlineColor="transparent"
           cursorColor="#bbb"
           textColor="#bbb"
           activeUnderlineColor="transparent"
          />
          <TouchableOpacity activeOpacity={0.7} style={styles.sendContainer} onPress={() => {}}>
            <IconButton
              icon="send"
              mode="contained"
              containerColor="rgba(0, 123, 255, 0.57)"
              iconColor="rgb(255,255,255)"
              style={styles.sendButton}
            />
          </TouchableOpacity>

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  chatbox: {
    width: '100%',
    height: '100%',
    padding: 14,
    backgroundColor: '#2a2b2e',
    flex: 1
  },
  chat: {
    flex: 1,
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    padding: 10,
    borderWidth: 4,
    borderColor: '#2c2f33',
    borderRadius: 10
  },
  chatMessage: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: 'black',
    backgroundColor: 'rgb(73, 73, 73)',
    padding: 10,
    borderWidth: 3,
    borderColor: 'rgb(85, 85, 85)',
    borderRadius: 20,
    marginTop: 10,
  },
  containerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    color: 'rgb(255,255,255)',
    borderColor: 'rgb(0,0,0)',
    paddingLeft: 0,
    paddingRight: 16,
    marginRight: 10,
    backgroundColor: '#333',
  },
  sendContainer: {
  justifyContent: 'center',
  alignItems: 'center',
    display: 'flex',
  },
  sendButton:{
    width: 48,
    height: 48,
    borderRadius: 10,
  }
});
