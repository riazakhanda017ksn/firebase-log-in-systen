import firebase from "firebase/app"
import "firebase/auth"

const app =firebase.initializeApp({
    apiKey:'AIzaSyCtU5cSYnROGvV6tlMdk7hiFsBFeuiIlHQ',
    authDomain: 'my-website-cee3c.firebaseapp.com',
    projectId: 'my-website-cee3c',
    storageBucket: 'my-website-cee3c.appspot.com',
    messagingSenderId: '682060288249',
    appId: '682060288249:web:0b411f469cddf703a59228'
})

export const auth=app.auth()
export default app