const nav = document.querySelector("nav");
const dropdown = document.querySelector(".dropdown");
const navmenu = document.querySelector(".nav-menu");

window.addEventListener("scroll", function(){
    nav.classList.toggle("sticky", window.scrollY > 0);
});

dropdown.addEventListener("click", ()=> {
    dropdown.classList.toggle("active");
    navmenu.classList.toggle("active");
    if(!nav.classList.contains("sticky")){
        nav.classList.toggle("sticky");
    }
});

document.querySelectorAll(".nav-link").forEach(n => 
    n.addEventListener("click", ()=> {
        dropdown.classList.remove("active");
        navmenu.classList.remove("active");
}));

$('.signup').hide();

$('#signin, #signup').on(
    'click',
    function(){
        $('.signin, .signup').toggle()
    }
);

var objSigninInfo = [
    {
        email: "user@gmail.com",
        password: "user1234"
    }
];

function signinInfo() {
    var email = document.getElementById("signinemail").value;
    var password = document.getElementById("signinpassword").value;

    for(i = 0; i < objSigninInfo.length; i++) {
        if(email == objSigninInfo[i].email && password == objSigninInfo[i].password) {
            alert(email + " is logged in.");
            window.location.href = "index.html";
            return;
        }
    }
    setError(signinpassword, "Incorrect login Information!");
    document.getElementById("signinpassword").value = "";
};

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

function subscriberInfo() {
    var email = document.getElementById("subscriberemail").value;

    if(email === '') {
        setError(subscriberemail, 'Email is required');

    } else if (!isValidEmail(email)) {
        setError(subscriberemail, 'Invalid email address');

    } else {
        alert("You have successfully subscribed to our newsletter!");
    }
};
