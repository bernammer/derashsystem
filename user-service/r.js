// // firebase.js
// import firebase from 'firebase/app';
// import 'firebase/messaging';

// const firebaseConfig = {
//  // Your Firebase configuration
// };

// firebase.initializeApp(firebaseConfig);

// const messaging = firebase.messaging();

// export const getToken = async () => {
//  const currentToken = await messaging.getToken();
//  if (currentToken) {
//     console.log('Token:', currentToken);
//     // Send this token to your server or save it in the session
//  } else {
//     console.log('No registration token available. Request permission to generate one.');
//     // Request permission to generate a token
//  }
// };

// export const requestPermission = async () => {
//  try {
//     await messaging.requestPermission();
//     getToken();
//  } catch (error) {
//     console.error('Permission denied', error);
//  }
// };

// // In your main app component or wherever you want to request permission
// requestPermission();
