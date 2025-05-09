// app/index.tsx
import { useRouter } from 'expo-router';
import { useEffect } from 'react';

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    // Aqui você poderia verificar algo no AsyncStorage futuramente
    // const isLoggedIn = false;
    // router.replace(isLoggedIn ? '/home' : '/login');
    router.replace('/login')
  }, []);

  return null;
}
