import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCIxzN3ZNIAJd_VOIXsIkF4qJV5dv_23OA",
		authDomain: "react-video-auth-e1188.firebaseapp.com",
		
		 
  //databaseURL: "https://react-video-auth-e1188.firebaseio.com",
  //projectId: "react-video-auth-e1188",
  //storageBucket: "react-video-auth-e1188.appspot.com",
  //messagingSenderId: "806948902298",
  //appId: "1:806948902298:web:8dce6965e49ec5a4f21623",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;