const menu = [

{

        id: 1,
        img: './images/m8.jpg',
        name: "Amala",
        desc: "Amala is one of the food consume in Nigeria and is a well cherished food specifically to the Yoruba's from the Southwestern part of Nigeria",
        category: "food",
        
        
        },



        {

            id: 2,
            img: './images/m11.jpg',
            name: "Garri",
            desc: "Garri is another food commonly consume by almost all ethnic groups in Nigeria. It goes with many soup and it has been in consumption for many years now.",
            category: "food",
            
            
            },



            {

                id: 3,
                img: './images/m1.jpg',
                name: "Okra Soup",
                desc: "It is a popular soup consumed by almost all ethnic groups in Nigeria and West Africa regions, it is very nutritious and easy to prepare.",
                category: "Soup",
                
                
                },


                {

                    id: 4,
                    img: './images/m15.jpg',
                    name: "Chicken Barbecue",
                    desc: "Chicken barbecue is a also available in Nigeria and has proven to be outstanding over the years, it importance in our diet can not be underrated",
                    category: "Barbecue",            
                    
                    },


                    {

                        id: 5,
                        img: './images/m3.jpg',
                        name: "Pepper Soup",
                        desc: "Pepper soup is a meat cooked with neccessary ingredients and served hot for consumption in Nigeria most in beer parlours and hotels.",
                        category: "Soup",
                        
                        
                        },


                        {

                            id: 6,
                            img: './images/m4.jpg',
                            name: "Rice and Stew",
                            desc: "Rice and stew is a common delicacy in Nigeria, this delicacy is well cherished and prepared in almost every homes in for Christmas celebration",
                            category: "food",
                            
                            
                            },

                            {

                                id: 7,
                                img: './images/m9.jpg',
                                name: "Moi Moi",
                                desc: "It is a popular delicacy gotten from beans and it can be consumed with garri, pap or as the case maybe, it is very delicious and lovely.",
                                category: "food",
                                
                                
                                },

                                {

                                    id: 8,
                                    img: './images/m2.jpg',
                                    name: "Beans Porridge",
                                    desc: "It is a common food in Nigeria and it is very delicious, and consume by almost all ethnic groups in Nigeia",
                                    category: "food",
                                    
                                    
                                    },

                                    {

                                        id: 9,
                                        img: './images/m10.jpg',
                                        name: "Fried Plantain",
                                        desc: "Is a light food mainly consume in the morning as breakfast; it is very delicious and it consume in almost every part of the world",
                                        category: "Snacks",
                                        
                                        
                                        },

                                        {

                                            id: 10,
                                            img: './images/m7.jpg',
                                            name: "Smartest Bread",
                                            desc: "Is a light food mainly consume in the morning as breakfast; it is very delicious and it consume in almost every part of the world",
                                            category: "Snacks",
                                            
                                            
                                            },

];


const listDiv = document.getElementById('menu-items');
const uniqueBtnCont = document.getElementById('unique-btn');


window.addEventListener('DOMContentLoaded', function () {
  displayListItems(menu);
  const categories = menu.reduce(
    (total, item) => {
      if (!total.includes(item.category)) {
        total.push(item.category);
      }
      return total;
    },
    ['all']
  );
  const uniqueBtn = categories
    .map((category) => {
      return `<button
    type="button"
    class="btn btn-outline-secondary filter-Btn"
    data-id=${category}
  >
    ${category}
  </button>`;
    })
    .join(' ');
  uniqueBtnCont.innerHTML = uniqueBtn;
  const filterBtn = document.querySelectorAll('.filter-Btn');
  filterBtn.forEach(function (btn) {
    btn.addEventListener('click', (e) => {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === 'all') {
        displayListItems(menu);
      } else {
        displayListItems(menuCategory);
      }
    });
  });

  function displayListItems(listItem) {
    let displayMenu = listItem.map((list) => {
      return `<div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 g-2" style="object-fit: cover; overflow: hidden;">
        <div class="card d-flex">
          <div class="card-img" >
            <img class="w-100" src=${list.img} alt="title">
          </div>
          <div class="card-body bg-body-secondary">
            <h3 class="card-title">${list.name}</h3>
            <p class="card-text desc">${list.desc}</p>
          </div>
        </div>
      </div>`;
    });
    displayMenu = displayMenu.join(' ');
    listDiv.innerHTML = displayMenu;
  }
});



// const listDiv = document.getElementById('menu-items');
// const uniqueBtnCont = document.getElementById('unique-btn')

// window.addEventListener('DOMContentLoaded', function () {
//     displayListItems(menu);
// const categories = menu.reduce(
// (total, item) => {
// if (!total.includes(item.category)) {

//     total.push(item.category);
// }
// return total;
// },
// ['all'] 
// );
// const uniqueBtnCont = categories
// .map((category) => {
//     return `<button
//     type="button"
//     class="btn btn-outline-secondary filter-Btn"
//     data-id=${category}
// >
// ${category}
// </button>`;
// })
// .join(' ');
// uniqueBtnCont.innerHTML = uniqueBtn;
// const filterBtn = document.querySelectorAll('.filter-btn');
// filterBtn.forEach(function (btn) {
// btn.addEventListener('click', (e) => {
//     const category = e.currentTarget.database.id;
//     const menuCategory = menu.filter(function (menuItem) {
//         if (menuItem.category === category) {
//             return menuItem;
//         }
     
// });

// if (category === 'all') {

//     displayListItems(menu);
// } else {
//     displayListItems(menuCategory);
// }

// });
// });

// function displayListItems(listItems) {

//     let displayMenu = listItems.map((list) => {
// return `<div class="col sm-12 col-md-6 col-lg-4 col-xl-3 g-2" style="object-fit: cover; overflow: hidden;">
// <div class="card d-flex">
// <div class="card img">
// <img class="w-100" src=${list.img} alt="title">
// </div>
// <div class="card-body bg-body-secondary">
// <h3 class="card-title">${list.name}</h3>
// <p class="card-text desc">${list.desc}</p>
// </div>
// </div>
// </div>`;
//     });
//     displayMenu = displayMenu.join(' ')
//     listDiv.innerHTML = displayMenu
// }

// });