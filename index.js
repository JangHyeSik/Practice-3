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

// img 추가 
const imgCollection = ["image-1.png", "image-2.png", "image-3.png",
    "image-4.png", "image-5.png"
];

const images = document.createElement("img");
let index = images.src = `images/${imgCollection[0]}`
img.appendChild(images);

// #95a5a6; - 회색
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

// if else 조건문만 있어도 충분히 만들 수 있다. 라고 생각했다.
// if else 조건문을 했는데 실행이 안됐다. 안 되는 이유는 
// 조건식에 비교를 해야 하는데 무조건 true 인 것만 조건식에 넣어서 첫번째 if 문만 실행이 됐다.
// 그래서 img.src를 index 라는 변수에 담고 조건문이 실행될 때마다 index 변수를 다시 초기화 하는 식으로 코드를 짰다.
// 실행이 된다.
// 배운 점: 정보를 변수에 저장하는 법이 조금 익숙해 진 거 같고, 조건문의 조건식이 돌아가는 시스템에 대해서 조금 더 알게 되었다.

// 안되고 있는 점 : arrowChanger와 dotChanger가 따로따로 놀고 있다. dot을 클릭했을 때 해당 순번으로 이미지가 변하면서 색깔이 들어가는 것이 안된다.
// dot 을 클릭했을 때 해당 이미지가 나오고 검은색으로 변해야 한다. 그런데 화살표를 누르면 또 화살표 실행문에 적힌대로 실행이 되고 