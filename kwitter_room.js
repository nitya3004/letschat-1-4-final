const firebaseConfig = {
      apiKey: "AIzaSyD3hpBIotV1faScCEwVCZB2RlCetMjgBjQ",
      authDomain: "kwitter-e354e.firebaseapp.com",
      databaseURL: "https://kwitter-e354e-default-rtdb.firebaseio.com",
      projectId: "kwitter-e354e",
      storageBucket: "kwitter-e354e.appspot.com",
      messagingSenderId: "598850404563",
      appId: "1:598850404563:web:acae4854df724fb92d1426"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome"+user_name+"!";
function add_room(){
      room_name=document.getElementById("room_name").value ;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("roomname", room_name);
      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name-"+Room_names);
      row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("roomname", name);
window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("roomname");
      window.location="index.html";
}

