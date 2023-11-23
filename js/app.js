// fetch=> GET

let usersList = document.querySelector("#users");

let params = new URLSearchParams(window.location.search);
let id = params.get("id");
if (id) {
  fetch(`https://jsonplaceholder.typicode.com/photos`)
    .then((res) => res.json())
    .then((photos) => {
      photos.forEach((photo) => {
        console.log(id);
        if (photo.albumId == id) {
          let p = document.createElement("p");
          p.classList.add("text-uppercase");
          let h2 = document.createElement("h2");
          let img = document.createElement("img");
          img.setAttribute("src", photo.url);
          img.classList.add("w-75");
          let a = document.createElement("a");
          h2.innerText = photo.id;
          p.innerText = photo.title;
          
          let div = document.createElement("div");
          a.innerText = "Go back";
          a.setAttribute("href", `/`);
          div.classList.add(
            "d-flex",
            "flex-column",
            "align-items-center",
            "col-3"
          );

          div.append(h2, p, img, a);
          document.body.append(div);
          document.body.classList.add("d-flex", "row");
        }
      });
    });
} else {
  fetch(`https://jsonplaceholder.typicode.com/albums`)
    .then((res) => res.json())
    .then((users) => {
      users.forEach((user) => {
        let li = document.createElement("li");
        li.classList.add("col-5", "text-bg-secondary", "rounded", "py-3");
        let h2 = document.createElement("h2");
        let h4 = document.createElement("h4");
        h4.classList.add("text-capitalize");
        let a = document.createElement("a");
        h2.innerText = user.id;
        h4.innerText = user.title;
        a.innerText = "Read more";
        a.setAttribute("href", `/?id=${user.id}`);
        li.append(h2, h4, a);
        usersList.append(li);
      });
    });
}
