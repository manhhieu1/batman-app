import AsyncStorage from '@react-native-async-storage/async-storage'
import { LOCAL_STORAGE_KEYS } from 'shared/constants/local-storage'

export const getJwtToken = async () => {
  try {
    const result = await AsyncStorage.getItem(LOCAL_STORAGE_KEYS.JWT_TOKEN)
    if (result) {
      return result
    }
  } catch (error) {
    console.log(error);

  }
}


export const setJwtToken = async (token: string) => {
  try {
    await AsyncStorage.setItem(LOCAL_STORAGE_KEYS.JWT_TOKEN, JSON.stringify(token))
  } catch (error) {
    console.log(error);
  }
}

