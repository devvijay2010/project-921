
function backfunction()
{
    window.location = "index.html";
}
function changescreen()
{
    var usernamevar2 = document.getElementById("loginoldaccusername").value;
    var passwordvar2 = document.getElementById("loginoldaccpassword").value;

    var localstorage = localStorage.getItem("username")
    var localstorage2 = localStorage.getItem("password")

    if(usernamevar2 == "")
    {
        document.getElementById("h42").innerHTML = "Please type in your username before logging in!";
    }
    else
    if(passwordvar2 == "")
    {
        document.getElementById("h42").innerHTML = "Please type in your password before logging in!";
    }
    else if(usernamevar2 == localstorage && passwordvar2 == localstorage2)
    {
        window.location = "kwitter_home.html";
    }
}