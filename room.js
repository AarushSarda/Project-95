  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAuTfTIW7OTf-IwWdw5OFy03fx47CSf6AQ",
    authDomain: "lets-chat-web-app-d6773.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-d6773-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-d6773",
    storageBucket: "lets-chat-web-app-d6773.appspot.com",
    messagingSenderId: "672309872235",
    appId: "1:672309872235:web:f4a1466f93f9b1b8a3532e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!!";

    function addRoom() {
          room_name = document.getElementById("add_room").value;
          firebase.database().ref("/").child(room_name).update({
          Purpose : "Adding Room Name" 
          }) ;
          localStorage.setItem("room_name" , room_name);
          window.location = "lets_chat_web_app_page.html";
          }

    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
    console.log("Room Name : " + Room_names);
    row = "<div class='room_name' id = " + Room_names + "onclick='redirectToRoomName(this.id)'> # " + Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });
});
}
getData();
 
function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "lets_chat_web_app_page.html";
}
