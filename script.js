// const signInBtnLink = document.querySelector('.signInBtn-link');
const signUpBtnLink = document.querySelector('.signUpBtn-link');
const wrapper = document.querySelector('.wrapper');

signUpBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});

// signInBtnLink.addEventListener('click', () => {
//     wrapper.classList.toggle('active');
// });


document.getElementById("myButton2").onclick = function () {
    // location.href = "https://www.youtube.com/";
    location.href = "Home.html";
    alert("You Are Signed In As A Guest User");
};
