var firebaseConfig = {
  apiKey: "AIzaSyDChCdV63M1Uubl4msmsOVeHqaEy4gq2cU",
  authDomain: "kwitter-b64e5.firebaseapp.com",
  databaseURL: "https://kwitter-b64e5-default-rtdb.firebaseio.com",
  projectId: "kwitter-b64e5",
  storageBucket: "kwitter-b64e5.appspot.com",
  messagingSenderId: "524667452104",
  appId: "1:524667452104:web:acc217f421ff56a04543fd"
};

firebase.initializeApp(firebaseConfig);

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html"
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
      console.log("Room Name -" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Rom_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      
      });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room name", name);
  window.location = "kwitter_page.html";
}