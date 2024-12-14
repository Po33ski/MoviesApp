function addMovie() {
    alert("Hello")
    var movieTitle = document.getElementById("inputTitle").value;
    var movieYear = document.getElementById("inputYear").value;
    var movieActors = document.getElementById("inputActors").value;
    console.log("Title: " + movieTitle)
    console.log("Year: " + movieYear)
    console.log("Actors: " + movieActors)

    var li = document.createElement("li");
    li.innerHTML = "<input type='checkbox'> " + movieTitle + ", " + movieYear + ", " + movieActors;
    document.getElementById("moviesList").appendChild(li);


}

function deleteMovies() {
    var checkedBoxes = document.querySelectorAll("input[type='checkbox']:checked");
    console.log(checkedBoxes);
    for (i=0;i < checkedBoxes.length; i++){
        document.getElementById("moviesList").removeChild(checkedBoxes[i].parentNode)
    }
   console.log(checkedBoxes);
}