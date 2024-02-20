import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';
import { getDatabase, ref, get } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js';

const firebaseConfig = {
    apiKey: "AIzaSyCSvK36Nn9ZrN1g0tSjDr1fKFSR7O5_ctg",
  authDomain: "profileapp-4cec0.firebaseapp.com",
  databaseURL: "https://profileapp-4cec0-default-rtdb.firebaseio.com",
  projectId: "profileapp-4cec0",
  storageBucket: "profileapp-4cec0.appspot.com",
  messagingSenderId: "544253944085",
  appId: "1:544253944085:web:c1f5a57447d0f6f877891c",
  measurementId: "G-LK6H0NXKKF"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  
  function fetchUserProfile(userId, elementId) {
      const userRef = ref(database, userId); 
      get(userRef).then((snapshot) => {
          if (snapshot.exists()) {
              const userData = snapshot.val();
              document.getElementById(elementId).innerHTML = `
                  <h2>${userData.name}</h2>
                  ${userData.image ? `<img src="${userData.image}" alt="${userData.name}" style="max-width:100px;"><br>` : ''}
                  ${userData.bio ? `<p><strong>Bio:</strong> ${userData.bio}</p>` : ''}
                  ${userData.education ? `<p><strong>Education:</strong> ${userData.education}</p>` : ''}
              `;
          } else {
              console.log("No data available");
          }
      }).catch((error) => {
          console.error(error);
      });
  }
  

// Fetch and display the profiles
fetchUserProfile('C9Gvx4htgwOjjCIk4L2lCgFAYAL2', 'userProfile1');
fetchUserProfile('HlTXLv9bzyZnlWMVjmWoHvHQ65l1', 'userProfile2');
