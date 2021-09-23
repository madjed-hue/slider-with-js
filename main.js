let arr = Array.from(document.querySelectorAll("img"));
let myRightBtn = document.getElementById("rightBtn");
let myleftBtn = document.getElementById("leftBtn");
let myPageBullet = Array.from(document.querySelectorAll("ul li"));

let currentSlide = 2;

function nextSlide(){
    if(myRightBtn.classList.contains('disabled')){
        return false;
    } else {
        currentSlide++;
        checker();
    };
};

function prevSlide(){
    if(myleftBtn.classList.contains('disabled')){
        return false;
    }else {
        currentSlide--;
        checker();
    };
};

myleftBtn.addEventListener("click", function () {
    prevSlide();
});
myRightBtn.addEventListener("click", function () {
    nextSlide();
});

function checker() {
    removeAllActive();
    arr[currentSlide - 1].classList.add("active");
    myPageBullet[currentSlide - 1].classList.add("active");
    currentSlide == 1 ? myleftBtn.classList.add('disabled') : myleftBtn.classList.remove('disabled');
    currentSlide == arr.length ? myRightBtn.classList.add('disabled') : myRightBtn.classList.remove('disabled');
}

checker();

function removeAllActive() {
    arr.forEach(function (currentImg) {
        currentImg.classList.remove('active')
    })
    myPageBullet.forEach(function (bullet) {
        bullet.classList.remove('active');
        bullet.onclick = function(){
            currentSlide = parseInt(this.getAttribute("data-index"));
            checker();
        }
    })
}



