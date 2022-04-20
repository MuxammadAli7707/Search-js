const elId = document.getElementById("input-id");
const elName = document.getElementById("input-name");
const elEmail = document.getElementById("input-email");


fetch("https://jsonplaceholder.typicode.com/comments")
  .then((res) => res.json())
  .then((data) => {
    showNow(data);
  })

  function showNow(data){
    let elList = document.getElementById("list");
    elList.innerHTML = "";

    for(let i = 0; i < 9; i++){
      let elItem = document.createElement("li");
      elItem.className = "list__item col-4";

      elItem.innerHTML = `
        <span class="d-block">Posi ID: ${data[i].postId}</span>
        <span class="d-block">ID: ${data[i].id}</span>
        <h3>Name: ${data[i].name}</h3>
        <p>Body: ${data[i].body}</p>
        <p>Email: ${data[i].email}</p>
      `;

      elList.appendChild(elItem);
    }
  }

elId.addEventListener("keyup", () => {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then((data) => {
      showHTML(data);
    })
})

function showHTML(data){
  let elSearch = elId.value;
  let elList = document.getElementById("list");
  elList.innerHTML = "";
  data.forEach((item) => {
    if(item.id == elSearch){
      let elItem = document.createElement("li");
      elItem.className = "list__item col-4";

      elItem.innerHTML = `
        <span class="d-block">Posi ID: ${item.postId}</span>
        <span class="d-block">ID: ${item.id}</span>
        <h3>Name: ${item.name}</h3>
        <p>Body: ${item.body}</p>
        <p>Email: ${item.email}</p>
      `;

      elList.appendChild(elItem);
    }
  });
}

elName.addEventListener("keyup", () => {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then((data) => {
      showName(data);
    })
})

function showName(data){
  let elSearch = elName.value;
  let elList = document.querySelector("#list");
  elList.innerHTML = "";
  data.forEach((item) => {
    if(item.name.includes(elSearch)){
      let elItem = document.createElement("li");
      elItem.className = "list__item col-4";

      elItem.innerHTML = `
        <span class="d-block">Posi ID: ${item.postId}</span>
        <span class="d-block">ID: ${item.id}</span>
        <h3>Name: ${item.name}</h3>
        <p>Body: ${item.body}</p>
        <p>Email: ${item.email}</p>
      `;

      elList.appendChild(elItem);
    }
  });
}
elEmail.addEventListener("keyup", () => {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then((data) => {
      showEmail(data);
    })
})

function showEmail(data){
  let elSearch = elEmail.value;
  let elList = document.querySelector("#list");
  elList.innerHTML = "";
  data.forEach((item) => {
    if(item.email .includes(elSearch)){
      let elItem = document.createElement("li");
      elItem.className = "list__item col-4";

      elItem.innerHTML = `
        <span class="d-block">Posi ID: ${item.postId}</span>
        <span class="d-block">ID: ${item.id}</span>
        <h3>Name: ${item.name}</h3>
        <p>Body: ${item.body}</p>
        <p>Email: ${item.email}</p>
      `;

      elList.appendChild(elItem);
    }
  });
}