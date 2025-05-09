import {Slot} from 'expo-router'
import {StatusBar} from 'react-native'
import { AuthProvider } from '@/context/authcontext'
export default function TabLayout() {
  return (
    <AuthProvider>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <Slot/>
    </AuthProvider>
  )
}
