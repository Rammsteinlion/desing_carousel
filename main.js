const listHero = [
    { name: 'Spiderman', background: 'linear-gradient(#4377ef, #7befd0)' },
    { name: 'Ironman', background: 'linear-gradient(70deg, #ef5c22, rgb(146, 146, 237))' },
    { name: 'Hulk', background: 'linear-gradient(#4377ef, #7befd0)'  }
];

let heroContainer = document.querySelector(".slider__wrapper");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");
let gradient = document.querySelector('.gradient');
let btnSeeMore = document.querySelector('.seeMore')
let arrows = document.querySelector('.arrows p')
let item = document.querySelector('.item')
let introduce = document.querySelector('.introduce')

let i = 0;
let h = listHero.length;

document.addEventListener('DOMContentLoaded', () => {
    displayHero();
});

arrows.addEventListener("click", function (event) {
    item.classList.remove('is__selected')
    introduce.classList.remove('opacity__introduce')
    document.querySelector('.arrows p').style.opacity = '0'
    document.querySelectorAll('.arrows .btn_arrow').forEach(btn => {
        btn.style.opacity = '1';
    });
    heroContainer.classList.remove('showDetail')
})

btnSeeMore.addEventListener("click", function (event){
    event.stopPropagation();
    document.querySelector('.arrows p').style.opacity = '1'
    document.querySelectorAll('.arrows .btn_arrow').forEach(btn => {
        btn.style.opacity = '0'; 
    });
    item.classList.add('is__selected')
    introduce.classList.add('opacity__introduce')
    heroContainer.classList.add('showDetail')
})

// nextBtn.addEventListener("click", () => {
//     i = (i + 1) % h;
//     displayHero();
// });

// prevBtn.addEventListener("click", () => {
//     i = (i - 1 + h) % h; 
//     displayHero();
// });

function displayHero() {
    //gradient.style.background = listHero[i].background;
}
