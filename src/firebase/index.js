import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
}

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)

// import app from ".."

// const ref = app.firestore().collection("courses")

// const getCourses = () => {
//   const courses = []

//   ref.onSnapshot((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       courses.push(doc.data())
//     })
//   })

//   return courses
// }

// export default getCourses

export const auth = app.auth()

export default app
