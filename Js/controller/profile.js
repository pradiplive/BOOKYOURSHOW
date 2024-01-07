const userId = sessionStorage.getItem("id");
const fullName = sessionStorage.getItem("fullName");
const username = sessionStorage.getItem("username");
const email = sessionStorage.getItem("email");
const mobile = sessionStorage.getItem("mobile");

document.getElementById("fullNameInput").value = fullName || "";
document.getElementById("usernameInput").value = username || "";
document.getElementById("emailInput").value = email || "";
document.getElementById("mobile").value = mobile;

function submitForm() {
  const newFullName = document.getElementById("fullNameInput").value;
  const newUsername = document.getElementById("usernameInput").value;
  const newEmail = document.getElementById("emailInput").value;
  const newPhoneNumber = document.getElementById("mobile").value;

  const updatedProfile = {
    fname: newFullName,
    username: newUsername,
    email: newEmail,
    mobile: newPhoneNumber,
  };

  //   const userId = "userId"; // Replace with the actual identifier of the logged-in user
  axios
    .patch(`http://localhost:3001/users/${userId}`, updatedProfile)
    .then((response) => {
      sessionStorage.setItem("fullName", updatedProfile.fname);
      sessionStorage.setItem("username", updatedProfile.username);
      sessionStorage.setItem("email", updatedProfile.email);
      sessionStorage.setItem("mobile", updatedProfile.mobile);
      alert("Updated Profile!");
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
