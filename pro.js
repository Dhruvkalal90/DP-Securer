function checkpass()
{
    var password=localStorage.getItem("password")
    var pass=document.getElementById("pass").value;
    if (password)
    {
        if(pass===password)
        {
            window.location.href="main.html";
        }
        else if(pass != password)
        {
            document.getElementById("target").innerHTML="Password doesn't matched!";
            return false;
        }
    }
    else
    {
        document.getElementById("target").innerHTML="You have not set any password!";
        return false;
    }
}

function setpass()
{
    var password=localStorage.getItem("password")
    if (password)
    {
        alert("Password already set!")
    }
    if(!password){

        var pass1=document.getElementById("pass1").value;
        var pass2=document.getElementById("pass2").value;
        if (pass1===pass2)
        {
            localStorage.setItem("password",pass2);
            alert("password Set!");
            window.location.href="index.html";
        }
        else if(pass1!=pass2)
        {
            document.getElementById("target").innerHTML="Password doesn't matched!";
            return false;
        }
    }
}

function resetpass()
{
    var password=localStorage.getItem("password");
    var old=document.getElementById("old").value;
    if(old===password)
    {
        localStorage.removeItem("password");
        alert("Password deleted\nYou can set new password");
    }
    else if(old!=password)
    {
        alert("Wrong password");
    }
    
}

function funmen(x) {
    x.classList.toggle("change");
    funmen2();
}

function funmen2(){
    y=document.getElementById("menu");
            if(y.style.display==="block")
            {y.style.display="none"}
            else
            {y.style.display="block";}
}
function funmen(x) {
            x.classList.toggle("change");
            funmen2();
        }
        function funmen2(){
            y=document.getElementById("menu");
                    if(y.style.display==="block")
                    {y.style.display="none"}
                    else
                    {y.style.display="block";}
        }
