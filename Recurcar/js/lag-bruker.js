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

// Logger inn bruker med epost og passord 

function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    auth.signInWithEmailAndPassword(email, password)
        // Sjekker om bruker er pålogga
        .then((userCredentials) => {
            // Oppretter ein sessionStorage variabel i nettlesaren. Denne brukes for å sjå om bruker er pålogga.
            sessionStorage.setItem("uid", userCredentials.user.uid)
            // Redirect to home.html 
            window.location.href = "./users.html"
        })
        .catch((error) => {
            console.error("Failed: " + error.message);
        })
}

// Oppretter bruker med epost og passord 


    // Oppretter bruker som kan logge seg på firebase og få tilgang til nettstaden
    function signUp() {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const fname = document.getElementById("fname").value;
        const lname = document.getElementById("lname").value;
        const address = document.getElementById("address").value;
        const zip = document.getElementById("zip").value;
        const city = document.getElementById("city").value;
    
        // Oppretter bruker som kan logge seg på firebase og få tilgang til nettstaden
        auth.createUserWithEmailAndPassword(email, password)
            // Lagrer også brukeren i collection "users"
            .then((userCredentials) => {
                sessionStorage.setItem("uid", userCredentials.user.uid)
                db.collection("users").doc().set({
                    firstname: fname,
                    lastname: lname,
                    address: address,
                    zip: zip,
                    city: city,
                    email: email,
                    userId: userCredentials.user.uid
                })
                    .then(function () {
                        window.location.href = "./index.html";
                    })
            })
    
            .catch((err) => {
                alert(err.message)
                console.log(err.code);
                console.log(err.message);
            });
    }

    function signUp1() {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const fname = document.getElementById("fname").value;
        const lname = document.getElementById("lname").value;

        const zip = document.getElementById("zip").value;
        const city = document.getElementById("city").value;
    
        // Oppretter bruker som kan logge seg på firebase og få tilgang til nettstaden
        auth.createUserWithEmailAndPassword(email, password)
            // Lagrer også brukeren i collection "users"
            .then((userCredentials) => {
                sessionStorage.setItem("uid", userCredentials.user.uid)
                db.collection("Admin").doc().set({
                    namn: fname,
                    brukernamn: lname,

                    tlf: zip,
                    alderPc: city,
                    systemModel: email,
                    userId: userCredentials.user.uid
                })
                    .then(function () {
                        window.location.href = "./Admin.html";
                    })
            })
    
            .catch((err) => {
                alert(err.message)
                console.log(err.code);
                console.log(err.message);
            });
    }

    function signUp2() {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const fname = document.getElementById("fname").value;
        const lname = document.getElementById("lname").value;

        const zip = document.getElementById("zip").value;
        const city = document.getElementById("city").value;
    
        // Oppretter bruker som kan logge seg på firebase og få tilgang til nettstaden
        auth.createUserWithEmailAndPassword(email, password)
            // Lagrer også brukeren i collection "users"
            .then((userCredentials) => {
                sessionStorage.setItem("uid", userCredentials.user.uid)
                db.collection("Lerara").doc().set({
                    namn: fname,
                    brukernamn: lname,

                    tlf: zip,
                    alderPc: city,
                    systemModel: email,
                    userId: userCredentials.user.uid
                })
                    .then(function () {
                        window.location.href = "./Lerar.html";
                    })
            })
    
            .catch((err) => {
                alert(err.message)
                console.log(err.code);
                console.log(err.message);
            });
    }

    function signUp3() {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const fname = document.getElementById("fname").value;
        const lname = document.getElementById("lname").value;

        const zip = document.getElementById("zip").value;
        const city = document.getElementById("city").value;
    
        // Oppretter bruker som kan logge seg på firebase og få tilgang til nettstaden
        auth.createUserWithEmailAndPassword(email, password)
            // Lagrer også brukeren i collection "users"
            .then((userCredentials) => {
                sessionStorage.setItem("uid", userCredentials.user.uid)
                db.collection("Elev").doc().set({
                    namn: fname,
                    brukernamn: lname,

                    tlf: zip,
                    alderPc: city,
                    systemModel: email,
                    userId: userCredentials.user.uid
                })
                    .then(function () {
                        window.location.href = "./Elev.html";
                    })
            })
    
            .catch((err) => {
                alert(err.message)
                console.log(err.code);
                console.log(err.message);
            });
    }

    function signUp4() {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const fname = document.getElementById("fname").value;
        const lname = document.getElementById("lname").value;

        const zip = document.getElementById("zip").value;
        const city = document.getElementById("city").value;
    
        // Oppretter bruker som kan logge seg på firebase og få tilgang til nettstaden
        auth.createUserWithEmailAndPassword(email, password)
            // Lagrer også brukeren i collection "users"
            .then((userCredentials) => {
                sessionStorage.setItem("uid", userCredentials.user.uid)
                db.collection("Milijofagarbeidar").doc().set({
                    namn: fname,
                    brukernamn: lname,

                    tlf: zip,
                    alderPc: city,
                    systemModel: email,
                    userId: userCredentials.user.uid
                })
                    .then(function () {
                        window.location.href = "./Miljøfagarbeidar.html";
                    })
            })
    
            .catch((err) => {
                alert(err.message)
                console.log(err.code);
                console.log(err.message);
            });
    }

    function signUp5() {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const fname = document.getElementById("fname").value;
        const lname = document.getElementById("lname").value;

        const zip = document.getElementById("zip").value;
        const city = document.getElementById("city").value;
    
        // Oppretter bruker som kan logge seg på firebase og få tilgang til nettstaden
        auth.createUserWithEmailAndPassword(email, password)
            // Lagrer også brukeren i collection "users"
            .then((userCredentials) => {
                sessionStorage.setItem("uid", userCredentials.user.uid)
                db.collection("IT-medarbeidar").doc().set({
                    namn: fname,
                    brukernamn: lname,

                    tlf: zip,
                    alderPc: city,
                    systemModel: email,
                    userId: userCredentials.user.uid
                })
                    .then(function () {
                        window.location.href = "./IT-medarbeidar.html";
                    })
            })
    
            .catch((err) => {
                alert(err.message)
                console.log(err.code);
                console.log(err.message);
            });
    }

