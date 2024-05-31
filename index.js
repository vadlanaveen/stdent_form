// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC4sZ6EwBkSGaZgo-Wr6e0CxM3bl-Ea4tg",
  authDomain: "student-demo-ae0eb.firebaseapp.com",
  databaseURL: "https://student-demo-ae0eb-default-rtdb.firebaseio.com",
  projectId: "student-demo-ae0eb",
  storageBucket: "student-demo-ae0eb.appspot.com",
  messagingSenderId: "123128324148",
  appId: "1:123128324148:web:116abf00695f862cdfaa61",
  measurementId: "G-PH4Z4JWR3J"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Set database variable
var database = firebase.database();

function save() {
  var email = document.getElementById('F_name').value;
  var password = document.getElementById('L_name').value;
  var username = document.getElementById('number').value;
  var say_something = document.getElementById('address').value;
  var favourite_food = document.getElementById('email').value;
  console.log(email);

  database.ref('users/' + username).set({
    first_name: email,
    last_name: password,
    phone_number: username,
    addres: say_something,
    email: favourite_food,
  });

  alert('Saved');
}

function get() {
  var username = document.getElementById('username').value;

  var user_ref = database.ref('users/' + username);
  user_ref.on('value', function(snapshot) {
    var data = snapshot.val();

    if (data) {
      if (data.email) {
        alert(data.email);
      } else {
        alert('Email not found');
      }

      if (data.say_something && data.password) {
        console.log(Number(data.email) * Number(data.say_something) * Number(data.password));
      } else {
        console.log('Either say_something or password is missing');
      }

      if (data.favourite_food) {
        console.log(data.favourite_food);
      } else {
        console.log('Favourite food not found');
      }
    } else {
      alert('User not found');
    }
  });
}

function update() {
  var username = document.getElementById('username').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  var updates = {
    email: email,
    password: password
  };

  database.ref('users/' + username).update(updates);

  alert('updated');
}

function remove() {
  var username = document.getElementById('username').value;

  database.ref('users/' + username).remove();

  alert('deleted');
}