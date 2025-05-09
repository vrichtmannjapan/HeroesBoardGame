// import { useEffect } from 'react';
import { AuthProvider, useAuth } from '@/context/authcontext';
import { ActivityIndicator, View} from 'react-native'
import LoginScreen from './login';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';


export default function Index(){
  const  {loggedIn} = useAuth()
  const router = useRouter();

  useEffect(() =>{
    if(loggedIn) {
      router.replace('/home')
    }
  },[loggedIn])

  if(loggedIn){
    return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  return (
    <LoginScreen/>
  );
}
