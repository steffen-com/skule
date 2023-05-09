const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAo1CMpmVbO3jE-d8W_TGeumqRq7hC81gA",
    authDomain: "skule-database.firebaseapp.com",
    projectId: "skule-database",
    storageBucket: "skule-database.appspot.com",
    messagingSenderId: "319121729289",
    appId: "1:319121729289:web:70f24771c567d5ba0b55d8",
    measurementId: "G-R2WVWTXSMT"
});

/* Firebase config */
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

function signUp() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const name = document.getElementById("name").value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredentials) => {
            firebase.firestore().collection("users").doc().set({
                name: name,
                email: email,
                userId: userCredentials.user.uid
            })
                .then(function () {
                    window.location.href = "./home.html";
                })

        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
        });
}
function logIn() {
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            sessionStorage.setItem("uid", userCredentials.user.uid)
            // ...
            window.location.href = "./home.html"
        })
        .catch((error) => {
            console.error("Failed: " + error.message);
        });
}