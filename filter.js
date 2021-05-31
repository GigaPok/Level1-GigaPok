
let limitProducts = document.querySelector('#limitProduct')
let cardBox = document.querySelector("#cardwrap");

limitProducts.addEventListener("change", changeLimit);

let valueSelected = limitProducts.options[limitProducts.selectedIndex].value;
let tmp = "";

function changeLimit(e) {

    console.log("clicked");

    const select = e ? e.target : limitProducts;


    tmp = "";
    cardBox.innerHTML = tmp;
    let image;
    let price;
    let title;
    fetch(`https://fakestoreapi.com/products?limit=${select.value}`)
        .then(res => res.json())
        .then(json => {
            for (let i = 0; i < json.length; i++) {

                valueSelected = limitProducts.options[limitProducts.selectedIndex].value;
                image = json[i].image;
                price = json[i].price;
                title = json[i].title;
                console.log(title);

                tmp += `<div class="card col-12 col-sm-6 col-md-3">
                <img src="${image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                  <p class="card-text">${title}</p>
                  <p class="card-text">${price}</p>
                </div>
                <div class="card-body d-flex">
                  <a href="#" class="rounded-circle bg-light0"></a>
                  <a href="#" class="rounded-circle bg-light1 mx-2"></a>
                  <a href="#" class="rounded-circle bg-light2"></a>
                </div>
              </div>`

            }
            cardBox.innerHTML = tmp;

        })

}

changeLimit();
