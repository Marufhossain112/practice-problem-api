const loadPhoto = async () => {
  const url = "https://jsonplaceholder.typicode.com/photos?_limit=6";
  const res = await fetch(url);
  const data = await res.json();
  showPhoto(data);
};
// loadPhoto();

const showPhoto = (photos) => {
  //   console.log(photos);
  photos.forEach((photo) => {
    // console.log(photo.id);
    const imgContainer = document.getElementById("img-container");
    const newDiv = document.createElement("div");
    newDiv.classList.add("col");
    newDiv.innerHTML = `
    <div class="card" style="width: 18rem;">
    <img src=${photo.thumbnailUrl} class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">${photo.title}</h5>
      <p class="card-text">
        This is a longer card with supporting text below as a natural
        lead-in to additional content. This content is a little bit longer.
      </p>
      <button id ="show-details" class ='btn btn-primary' onclick = "showDetails('${photo.id}')">Show Details</button>
    </div>
  </div>
    `;
    imgContainer.appendChild(newDiv);
  });
};

const showDetails = async (id) => {
  const url = `https://jsonplaceholder.typicode.com/photos?id=${id}`
  const res = await fetch(url);
  const data = await res.json();
  loadDetails(data);
};
const loadDetails = (details) => {
console.log(details);
};
