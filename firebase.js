// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCOKDD3REnuad200y5Z3C5xeynC6UUKaVU",
    authDomain: "varkcrona1.firebaseapp.com",
    databaseURL: "https://varkcrona1.firebaseio.com",
    projectId: "varkcrona1",
    storageBucket: "varkcrona1.appspot.com",
    messagingSenderId: "305551317334",
    appId: "1:305551317334:web:8c261b5fe73a14e3921ef7",
    measurementId: "G-SEHPNFKXQK"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();

function signUp() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value, password.value)
    promise.catch(e => alert(e.message));

    alert("Signed Up");
}


function signIn() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.signInWithEmailAndPassword(email.value, password.value)
    promise.catch(e => alert(e.message));

    alert("Signed In" + email);

    //Take user to a different or home page
}


function signOut() {
    auth.signOut();
    alert("Signed Out")
}


auth.onAuthStateChanged(function(user) {
    if (user) {
        var email = user.email;
        alert("Active user" + email);
        //is signed in
    } else {
        //alert("No Active User Sign In Or Wrong Username/Password");
        //no user is signed in
    }
});