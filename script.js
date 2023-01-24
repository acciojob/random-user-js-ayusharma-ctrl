async function fetchdata() {
  const url = "https://randomuser.me/api/";
  const data = await fetch(url);
  const response = await data.json();
  // console.log(response);
  return response.results[0];
}
const showuser = () => {
  fetchdata().then((data) => {
    console.log(data.name.first, data.name.last);
    console.log(data.picture.large);
    document.getElementById(
      "img-box"
    ).innerHTML = `<img src="${data.picture.large}">`;
    document.getElementById(
      "username"
    ).innerHTML = `${data.name.first} ${data.name.last}`;
    const ageButton = document.getElementById("age");
    ageButton.addEventListener("click", () => {
      console.log(data.dob.age);
      document.getElementById("output").innerHTML = `<h1>${data.dob.age}<h1>`;
    });
    const EmailButton = document.getElementById("email");
    EmailButton.addEventListener("click", () => {
      console.log(data.email);
      document.getElementById("output").innerHTML = `<h1>${data.email}<h1>`;
    });
    const PhoneButton = document.getElementById("phone");
    PhoneButton.addEventListener("click", () => {
      console.log(data.phone);
      document.getElementById("output").innerHTML = `<h1>${data.phone}<h1>`;
    });
  });
};

showuser();
const newUser =document.getElementById("getUser");
newUser.addEventListener("click", () => {
  showuser();
});
