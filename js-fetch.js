let searchText = document.querySelector('#searchText');
let searchBtn = document.querySelector('#searchBtn').addEventListener("click", search);


searchText.value = '';

function search() {

    let countryName = document.querySelector('#countryName');
    let countryNameTitle = document.querySelector('#country-name-title');

    let artistName = document.querySelector('#artistName');
    let artistNameTitle = document.querySelector('#artist-name-title');

    let previewUrl = document.querySelector('#previewUrl');
    let previewUrlNameTitle = document.querySelector('#previewUrl-name-title');

    let trackPrice = document.querySelector('#trackPrice');
    let trackPriceNameTitle = document.querySelector('#trackPrice-name-title');

    let erorText = document.querySelector('#artistList span');
    let artistList = document.querySelector('#artistList');

    let forWidth = document.querySelectorAll('.for-width');

    let singerText = document.querySelector('#singer-text');
    
    fetch(`https://itunes.apple.com/search?term=${searchText.value}`)
        .then(response => response.json())
        .then(data => {
            if (searchText.value == '') {
                erorText.innerHTML = "შეიყვანეთ მომღერლის სახელი";

                erorText.style.display = 'flex';

                let tmp = " ";

                artistList.className = "justf-center"
                singerText.className = "singer-text"
                
                Array.from(forWidth).forEach(item => {
                    item.classList.remove("width");
                })
                
                countryName.innerHTML = tmp;
                artistName.innerHTML = tmp;
                previewUrl.innerHTML = tmp;
                trackPrice.innerHTML = tmp;
                
                countryNameTitle.innerHTML = "";
                artistNameTitle.innerHTML = "";
                previewUrlNameTitle.innerHTML = "";
                trackPriceNameTitle.innerHTML = "";
            } else {
                erorText.innerHTML = "";
                erorText.style.display = 'none';

                tmp = " ";

                Array.from(forWidth).forEach(item => {
                    item.classList.add("width");
                })
                
                artistList.classList.remove("justf-center");
                singerText.classList.remove("singer-text");


                countryNameTitle.innerHTML = "Country";
                artistNameTitle.innerHTML = "Artist Name";
                previewUrlNameTitle.innerHTML = "Preview Url";
                trackPriceNameTitle.innerHTML = "Track Price";

                countryName.innerHTML = tmp;
                artistName.innerHTML = tmp;
                previewUrl.innerHTML = tmp;
                trackPrice.innerHTML = tmp;
                

                for (let i = 0; i < 4; i++) {


                    // Add trackCountry

                    tmp = `<p>${data.results[i].country}
                    </p>`

                    countryName.innerHTML += tmp;

                    // Add artistName


                    tmp = `<p>${data.results[i].artistName}
                    </p>`


                    artistName.innerHTML += tmp;

                    // // Add artistViewUrl

                    tmp = `<a href="${data.results[i].artistViewUrl}" target="_blank">${data.results[i].trackName}
                    </a>
                    `
                    previewUrl.innerHTML += tmp;

                    // Add trackPrice

                    tmp = `<p>${data.results[i].trackPrice}
                    </p>`


                    trackPrice.innerHTML += tmp;

                }

            }

        }

        )

}







