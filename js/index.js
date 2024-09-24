// fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
// .then( res => res.json())
// .then(data => console.log(data))

const allMobile = async (searchText) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  displayData(data.data);
};

allMobile('a')


const displayData = (mobilesInfo) => {
  const phoneCardContainer = document.getElementById("phone-card-container");

  phoneCardContainer.innerText = ''

  mobilesInfo.slice(0,9).forEach((mobileInfo) => {
    
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="card bg-base-100 w-96 shadow-xl">
            <figure class="px-10 pt-10">
              <img
                src="${mobileInfo.image}"
                alt="Shoes"
                class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="card-title">${mobileInfo.phone_name}</h2>
              <p>There are many variations of passages of available, but the majority have suffered</p>
               <h2 class="card-title">Price: $999</h2>
              <div class="card-actions">
                <button class="btn btn-primary">Show Details</button>
              </div>
            </div>
          </div>
`;
    phoneCardContainer.appendChild(div);
  });
};

const searchImplement = () =>{
    const searchInput = document.getElementById('search-input')
    const searchText = searchInput.value    
    allMobile(searchText)
}
