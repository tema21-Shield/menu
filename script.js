var mMenuButton=document.querySelector(".m-menu-button");
var mMenu=document.querySelector(".navigation");
var MenuLine=mMenuButton.querySelectorAll(".menu-line");
mMenuButton.addEventListener('click',function () {
    if( mMenu.classList.contains('active')){
        mMenu.classList.remove('active');
    }else{
        mMenu.classList.add('active');
    }
    if(mMenuButton.classList.contains('open')){
        mMenuButton.classList.remove('open');
        MenuLine.forEach(function (elem) {
            elem.style.display='block';
        });
    }else{
        mMenuButton.classList.add('open');
        MenuLine.forEach(function (elem) {
            elem.style.display='none';
        });
    }
    });

function seeAndRotate( Array, elem) {
    if(Array.classList.contains('active')){
        Array.classList.remove('active');
        elem.style.display='none';
    }else{
        Array.classList.add('active');
        elem.style.display='block';
    }
}

var Arr=document.querySelector('.elem2');
var el2=document.querySelector('.el2');
var ElementsLevel2=el2.querySelector('.ElementsLevel2');
Arr.addEventListener('click', function () {
    seeAndRotate(Arr,ElementsLevel2);
});
var Arr2=document.querySelector('.elem4');
var el4=document.querySelector('.el4');
var ElementsLevel2_1=el4.querySelector('.ElementsLevel2');
Arr2.addEventListener('click', function () {
    seeAndRotate(Arr2,ElementsLevel2_1);
});

var Arr3=document.querySelector('.elem2_2');
var el2_2=document.querySelector('#elem2_2');
var ElementsLevel3_1=el2_2.querySelector('.ElementsLevel3');
Arr3.addEventListener('click', function () {
    seeAndRotate(Arr3,ElementsLevel3_1);
});
var Arr4=document.querySelector('.elem2_4');
var el2_4=document.querySelector('#elem2_4');
var ElementsLevel3_2=el2_4.querySelector('.ElementsLevel3');
Arr4.addEventListener('click', function () {
    seeAndRotate(Arr4,ElementsLevel3_2);
});

var header=document.querySelector('.header');
var body=document.getElementsByTagName('body');
header.onmouseover=function (e) {
    body[0].style.backgroundColor='rgba(0,0,0,.4)';
};
header.onmouseout=function (e) {
    body[0].style.backgroundColor='#FFFFFF';
};



