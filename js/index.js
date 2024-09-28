// fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
// .then( res => res.json())
// .then(data => console.log(data))

const allMobile = async (searchText="a", isShow) => {

  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  displayData(data.data, isShow);
};

allMobile();

const displayData = (mobilesInfo, isShow) => {
  const phoneCardContainer = document.getElementById("phone-card-container");
  phoneCardContainer.innerText = "";

  const seeAllContainer = document.getElementById("see-all-container");
  if (mobilesInfo.length <= 9) {
    seeAllContainer.classList.add("hidden");
  } else {
    seeAllContainer.classList.remove("hidden");
  }
 
let phone;
  if (!isShow) {
    phone = mobilesInfo.slice(0, 9)
  }
  else{
    phone = mobilesInfo
    seeAllContainer.classList.add("hidden");
  }
 


  phone.forEach((mobileInfo) => {
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
                <label for="my_modal_6" class="btn btn-primary" onclick="detailsButton('${mobileInfo.slug}')">Show Details</label>
              </div>
            </div>
          </div>
`;
    phoneCardContainer.appendChild(div);
  });
  loading(false)
};


const searchImplement = (isShow) => {
  loading(true)
  const searchInput = document.getElementById("search-input");
  const searchText = searchInput.value;
  if (searchText.length === 0) {
    allMobile('a', isShow);
  }
  else{
    allMobile(searchText, isShow);
  }
};

const seeAllClick = () => {
  const isShow = true;
 searchImplement(isShow)
}


const detailsButton =async(id) => {
const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
const data = await res.json()
console.log(data.data.mainFeatures.sensors);
console.log(data.data.mainFeatures.sensors[3]);

const modalBody = document.getElementById('modal-body')
modalBody.innerText = ''
const div = document.createElement('div')
div.innerHTML = `
<img src="${data.data.image}"/>
`
modalBody.appendChild(div)
}


const loading = (data) =>{
  const loaderContainer = document.getElementById('loader') 
  if (data === true) {
    loaderContainer.classList.remove("hidden")
  }
  else{
    loaderContainer.classList.add("hidden")
  }
}


