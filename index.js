// arrowIcon //
const leftArrow = document.querySelector(".arrow_nav_1");
const rightArrow = document.querySelector(".arrow_nav_2");
// dotNav //
const dotNav = document.querySelector(".dot_nav");
const dot_1 = document.querySelector(".dot_1");
const dot_2 = document.querySelector(".dot_2");
const dot_3 = document.querySelector(".dot_3");
const dot_4 = document.querySelector(".dot_4");
const dot_5 = document.querySelector(".dot_5");
// img 
const img = document.querySelector(".img");

// img μΆκ° 
const imgCollection = ["image-1.png", "image-2.png", "image-3.png",
    "image-4.png", "image-5.png"
];

const images = document.createElement("img");
let index = images.src = `images/${imgCollection[0]}`
img.appendChild(images);

// #95a5a6; - νμ
// "#1e272e" - 


// arrowIcon 
function handleRightChanger() {
    if (index === `images/${imgCollection[0]}`) {
        index = images.src = `images/${imgCollection[1]}`;
        console.log(index);
    } else if (index === `images/${imgCollection[1]}`) {
        index = images.src = `images/${imgCollection[2]}`;
    } else if (index === `images/${imgCollection[2]}`) {
        index = images.src = `images/${imgCollection[3]}`;
    } else if (index === `images/${imgCollection[3]}`) {
        index = images.src = `images/${imgCollection[4]}`;
    } else if (index === `images/${imgCollection[4]}`) {
        index = images.src = `images/${imgCollection[0]}`;
    };
};

function handleLeftChanger() {
    if (index === `images/${imgCollection[4]}`) {
        index = images.src = `images/${imgCollection[3]}`;
    } else if (index === `images/${imgCollection[3]}`) {
        index = images.src = `images/${imgCollection[2]}`;
    } else if (index === `images/${imgCollection[2]}`) {
        index = images.src = `images/${imgCollection[1]}`;
    } else if (index === `images/${imgCollection[1]}`) {
        index = images.src = `images/${imgCollection[0]}`;
    } else if (index === `images/${imgCollection[0]}`) {
        index = images.src = `images/${imgCollection[4]}`;
    };
};

// dotNav //
function Dot1Changer() {
    index = images.src = `images/${imgCollection[0]}`
};

function Dot2Changer() {
    index = images.src = `images/${imgCollection[1]}`
    
};

function Dot3Changer() {
    index = images.src = `images/${imgCollection[2]}`
};

function Dot4Changer() {
    index = images.src = `images/${imgCollection[3]}`
};

function Dot5Changer() {
    index = images.src = `images/${imgCollection[4]}`
};

rightArrow.addEventListener("click", handleRightChanger);
leftArrow.addEventListener("click", handleLeftChanger);
dot_1.addEventListener("click",Dot1Changer);
dot_2.addEventListener("click",Dot2Changer);
dot_3.addEventListener("click",Dot3Changer);
dot_4.addEventListener("click",Dot4Changer);
dot_5.addEventListener("click",Dot5Changer);

// if else μ‘°κ±΄λ¬Έλ§ μμ΄λ μΆ©λΆν λ§λ€ μ μλ€. λΌκ³  μκ°νλ€.
// if else μ‘°κ±΄λ¬Έμ νλλ° μ€νμ΄ μλλ€. μ λλ μ΄μ λ 
// μ‘°κ±΄μμ λΉκ΅λ₯Ό ν΄μΌ νλλ° λ¬΄μ‘°κ±΄ true μΈ κ²λ§ μ‘°κ±΄μμ λ£μ΄μ μ²«λ²μ§Έ if λ¬Έλ§ μ€νμ΄ λλ€.
// κ·Έλμ img.srcλ₯Ό index λΌλ λ³μμ λ΄κ³  μ‘°κ±΄λ¬Έμ΄ μ€νλ  λλ§λ€ index λ³μλ₯Ό λ€μ μ΄κΈ°ν νλ μμΌλ‘ μ½λλ₯Ό μ§°λ€.
// μ€νμ΄ λλ€.
// λ°°μ΄ μ : μ λ³΄λ₯Ό λ³μμ μ μ₯νλ λ²μ΄ μ‘°κΈ μ΅μν΄ μ§ κ±° κ°κ³ , μ‘°κ±΄λ¬Έμ μ‘°κ±΄μμ΄ λμκ°λ μμ€νμ λν΄μ μ‘°κΈ λ μκ² λμλ€.

// μλκ³  μλ μ  : arrowChangerμ dotChangerκ° λ°λ‘λ°λ‘ λκ³  μλ€. dotμ ν΄λ¦­νμ λ ν΄λΉ μλ²μΌλ‘ μ΄λ―Έμ§κ° λ³νλ©΄μ μκΉμ΄ λ€μ΄κ°λ κ²μ΄ μλλ€.
// dot μ ν΄λ¦­νμ λ ν΄λΉ μ΄λ―Έμ§κ° λμ€κ³  κ²μμμΌλ‘ λ³ν΄μΌ νλ€. κ·Έλ°λ° νμ΄νλ₯Ό λλ₯΄λ©΄ λ νμ΄ν μ€νλ¬Έμ μ νλλ‘ μ€νμ΄ λκ³  