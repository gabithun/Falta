import { messaging } from './config';
import { getToken } from 'firebase/messaging';

const vapidKey = 'BH0O0Km51fx02_QNiUVgJoBek7ouAh3fGbYL_asRHiAJuJgNTYhdBaWQGGl8OPBlGg9auN_2XT3-cAPJQQAlPPc';

export async function requestNotificationPermission() {
  try {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      const token = await getToken(messaging, { vapidKey });
      return token;
    }
  } catch (error) {
    console.error('Error requesting notification permission:', error);
  }
}