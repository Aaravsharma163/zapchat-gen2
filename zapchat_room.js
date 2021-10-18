
//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyD51QKgSpNQ-SXi6FtjexL9zhN3GSpTOzw",
      authDomain: "zapchat-d05b3.firebaseapp.com",
      databaseURL: "https://zapchat-d05b3-default-rtdb.firebaseio.com",
      projectId: "zapchat-d05b3",
      storageBucket: "zapchat-d05b3.appspot.com",
      messagingSenderId: "989439539314",
      appId: "1:989439539314:web:0b07a3773f934b189eaaeb"
    };
    

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcom"+user_name+"!";
function addRoom()
{
      var room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="zapchat_page.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name-"+Room_names);
       row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML+=row;
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name)
window.location="zapchat_page.html"
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}