import React from 'react';
import { View, StatusBar } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';
import LoginScreen from '@/app/loginScreen'

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <View style={{flex: 1, backgroundColor:''}}>
        <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />      
        <LoginScreen/>
    </View>
  );
}
