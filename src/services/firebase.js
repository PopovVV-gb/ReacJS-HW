import firebase from "firebase";

const config = {
    apiKey: "AIzaSyAZna-lDlJ8D0mVMqathTHfcYkR7DbV8ac",
    authDomain: "react-course-f061b.firebaseapp.com",
    databaseURL: "https://react-course-f061b-default-rtdb.firebaseio.com",
    projectId: "react-course-f061b",
    storageBucket: "react-course-f061b.appspot.com",
    messagingSenderId: "975139870310",
    appId: "1:975139870310:web:3af414052b64c97546bfa7"
}

firebase.initializeApp(config)

export const db = firebase.database();