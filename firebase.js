  
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyD1rkAzYA9w1bvlvWaxbFZyUWJV-7IMGvQ",
    authDomain: "new-demo-3bd77.firebaseapp.com",
    databaseURL: "https://new-demo-3bd77-default-rtdb.firebaseio.com",
    projectId: "new-demo-3bd77",
    storageBucket: "new-demo-3bd77.appspot.com",
    messagingSenderId: "375178097785",
    appId: "1:375178097785:web:782479157153f051bf90a8",
    measurementId: "G-15K5LWN7WE"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);