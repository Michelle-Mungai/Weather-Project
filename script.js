const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const msg = document.querySelector(".top-banner .msg");
const list = document.querySelector(".ajax-section .cities");

const apiKey = "1c22fceace8e1677b272701579dc6da4";

form.addEventListener("submit", e => {
    e.preventDefault();
    let inputVal = input.value;
  
    //check if there's already a city
})