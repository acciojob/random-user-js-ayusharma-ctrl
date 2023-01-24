var imageDiv = document.getElementById("image")
var fullname = document.getElementById("fullName")
var ageBtn = document.getElementById("ageBtn")
var phoneBtn = document.getElementById("phoneBtn")
var emailBtn = document.getElementById("emailBtn")
var newUser = document.getElementById("getUser")
var heading = document.getElementsByTagName("h")[0]
var update = document.getElementById("update")

var apiLink = "https://randomuser.me/api/"

var userDATA;

async function fetchingData() {
    try {
        var apiData = await fetch(apiLink)
        var apiResponse = await apiData.json()
        userDATA = apiResponse
        insert(userDATA)
    }
    catch (error) {
        console.log("Unable to fetch data" + error);
    }
}


// fetchingData()
document.addEventListener('DOMContentLoaded',fetchingData)

function insert(dataOfuser) {

    var image = document.createElement("img")
    const source = dataOfuser.results; // this is an array
    const source1 = source[0].picture.large // source[0] is the first element of an array, first element is itself an object
    image.src = source1
    imageDiv.append(image)
    const readFirstName = source[0].name.first
    const readLastName = source[0].name.last
    fullname.textContent = readFirstName + " " + readLastName
	
function showAge(){
    const source = userDATA.results;
    const readAge = source[0].dob.age
    heading.textContent = "Additional Information"
    update.textContent = readAge
}

ageBtn.addEventListener('click', showAge)


function showEmail(){
    const source = userDATA.results[0].email;
    heading.textContent = "Additional Information"
    update.textContent = source
}

emailBtn.addEventListener('click', showEmail)


function showPhone(){
    const source = userDATA.results[0];
    const readAge = source.phone
    heading.textContent = "Additional Information"
    update.textContent = readAge
}

phoneBtn.addEventListener('click', showPhone)
}






newUser.addEventListener('click', function(){
    location.reload()
})