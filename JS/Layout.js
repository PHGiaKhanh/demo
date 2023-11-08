const signbtn = document.querySelector('#sign-form')
const close = document.querySelector('#dong-sign')
signbtn.addEventListener("click", function () {
    document.querySelector('.sign-form').style.display = "flex"
})
close.addEventListener("click", function () {
    document.querySelector('.sign-form').style.display = "none"
})