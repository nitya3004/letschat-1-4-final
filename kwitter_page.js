//YOUR FIREBASE LINKS
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
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("roomname");

    

function send()
{
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
  name:user_name,
  message:msg,
  like:0
 });

document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
       console.log(firebase_message_id);
           console.log(message_data);
           Name = message_data['name'];
           message = message_data['message'];
       like = message_data['like'];
       name_with_tag = "<h4> "+ Name +"<img class='user_tick' src='tick.png'></h4>";
       message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
       span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

      row = name_with_tag + message_with_tag +like_button + span_with_tag;       
      document.getElementById("output").innerHTML += row;
//End code
    } });  }); }
getData();

function updateLike(message_id)
{
console.log("clicked on like button - " + message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updated_likes = Number(likes) + 1;
    console.log(updated_likes);

    firebase.database().ref(room_name).child(message_id).update({
          like : updated_likes  
     });

}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("roomname");
window.location.replace("index.html");
}
