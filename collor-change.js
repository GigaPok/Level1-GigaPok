let collorChange = document.querySelectorAll("#collor-change li");

collorChange.forEach(el => {
    el.addEventListener("click", function () {
        collorChange.forEach(ele => ele.classList.remove("active-collor"))

        this.classList.add("active-collor")
    })
})