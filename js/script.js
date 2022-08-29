
let elList = document.querySelector(".list");
let elTemplate = document.querySelector("#template-element").content;
let elInput = document.querySelector(".input");


function myFunction(movie){
let elItem = elTemplate.cloneNode(true);

elItem.querySelector(".card-img-top").src = `http://i3.ytimg.com/vi/${movie.ytid}/hqdefault.jpg`;
elItem.querySelector(".card-title").textContent = movie.fulltitle;
elItem.querySelector(".card-text").textContent = movie.summary.slice(0,100) + '....';

return elItem;
}


let renderMovie = (movies) =>{
  let eLFragment = document.createDocumentFragment();  
  elList.innerHTML=null;


movies.forEach(movie =>{
  eLFragment.append(myFunction(movie))
})

elList.appendChild(eLFragment);
}

renderMovie(movies.slice(0,100));








// movies.slice(0,100).forEach(movie => {
//   let li =document.createElement("li")
//   li.setAttribute("class", "card px-0")
//   li.setAttribute("style", "width:300px;")
//   li.innerHTML = `
//     <img class="card-img-top" src=${`http://i3.ytimg.com/vi/${movie.ytid}/hqdefault.jpg`}  alt="...">
//     <div class="card-body">
//       <h5 class="card-title">${movie.fulltitle}</h5>
//       <p class="card-text">${movie.summary.slice(0, 50) + "..."}</p>

//     </div>
//   `

//   elList.appendChild(li)
// })



