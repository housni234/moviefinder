const API_KEY = "e68e11cfa133a86b87b866c957793b8e";

let searchbox = document.getElementById("searchbox");

searchbox.addEventListener("keyup", onsearch);

function onsearch(event) {
  if (event.keyCode == 13) {
    console.log(searchbox.value);
  }
}
