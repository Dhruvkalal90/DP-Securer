function savepass()
{
    var platform=document.getElementById("Platform").value;
    var Username=document.getElementById("Username").value;
    var password=document.getElementById("p_pass").value;
    if (platform==="" || null)
    {
        alert("Please enter Platform name");
        return false;
    }
    if (Username==="" || null)
    {
        alert("Please enter Username name");
        return false;
    }
    if (password==="" || null)
    {
        alert("Please enter Password");
        return false;
    }
}
function savepass() {
    var platform = document.getElementById("Platform").value;
    var username = document.getElementById("Username").value;
    var password = document.getElementById("p_pass").value;

    if (platform === "" || username === "" || password === "") {
        alert("Please fill out all fields.");
        return false;
    }

    // Create an object to store user data
    var userData = {
        platform: platform,
        username: username,
        password: password
    };

    // Retrieve existing user data from localStorage or create an empty array
    var users = JSON.parse(localStorage.getItem("users")) || [];

    // Add new user data to the array
    users.push(userData);

    // Save the updated user data to localStorage
    localStorage.setItem("users", JSON.stringify(users));

    // Clear the input fields
    document.getElementById("Platform").value = "";
    document.getElementById("Username").value = "";
    document.getElementById("p_pass").value = "";

    alert("User data saved successfully.");
}
// Function to edit user data
function editUser(index) {
    var user = users[index];
    document.getElementById("Platform").value = user.platform;
    document.getElementById("Username").value = user.username;
    document.getElementById("p_pass").value = user.password;

    // Remove the user from the array
    users.splice(index, 1);

    // Update localStorage
    localStorage.setItem("users", JSON.stringify(users));
}