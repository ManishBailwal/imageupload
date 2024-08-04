let profilePic = document.getElementById("profile-pic")

let inputFile = document.getElementById("input-file")

let btn = document.getElementById("btn");

inputFile.onchange = function(){
    profilePic.src = URL.createObjectURL(inputFile.files[0]);
}

btn.onclick = function(){

    profilePic.src = "";
}