//nav li/////////////////////////////
let myNav = Array.from(document.querySelectorAll(".nav-min ul li")),
    myicons = Array.from(document.querySelectorAll(".nav-min ul li i"))
    myli1 = document.getElementById('li1'),
    myli2 = document.getElementById('li2'),
    myli3 = document.getElementById('li3'),
    myli4 = document.getElementById('li4'),
    job = document.getElementById('minJob'),
    stadent = document.getElementById('student'),
    logJob = document.getElementById('log-job'),

myli1.onclick =function () {
    removeli();
    myNav[0].classList.add('act-li');
    myNav[0].children[0].classList.add('act-icon');
    actSearch();

}
myli2.onclick =function () {
    removeli();
    myNav[1].classList.add('act-li');
    myNav[1].children[0].classList.add('act-icon');
    stadent.classList.add('ex-student');
}
myli3.onclick =function () {
    removeli();
    myNav[2].classList.add('act-li');
    myNav[2].children[0].classList.add('act-icon');
    job.classList.add('actJobs');
}
myli4.onclick =function () {
    removeli();
    myNav[3].classList.add('act-li');
    myNav[3].children[0].classList.add('act-icon');
    logJob.classList.add('actjob');
}

function removeli(){
    myNav.forEach(function(li){
        li.classList.remove('act-li');
        },
    myicons.forEach(function(i){
        i.classList.remove('act-icon');
    })
        )}
//end nav///////////////////////////////////
function actSearch(){
    let minSearch = document.getElementById('minSearch')
        minSearch.classList.add('act-minsearch');
};
actInput();
function actInput(){
    let mySrsh = document.getElementById('searchIn');
          mySpansh = document.getElementById('contentSpan');
          myCont = document.getElementById('contSh');
     mySrsh.onclick = function(){
        myCont.classList.add('actinps');
     }
};

let mis = document.getElementById('mis'),
    content = document.getElementById('contentSpan'),
    cs = document.getElementById('cs'),
    cm = document.getElementById('sm');

mis.onclick = function(){
    content.textContent = "نظم ومعلومات";
    myCont.classList.remove('actinps');
};
cs.onclick = function(){
    content.textContent = "علوم حاسب";
    myCont.classList.remove('actinps');
};
cm.onclick = function(){
    content.textContent = "علوم ادراية";
    myCont.classList.remove('actinps');
};

let exSearch = document.getElementById('exSearch');
exSearch.onclick = function()
{
    myNav[0].classList.remove('act-li');
    myNav[0].children[0].classList.remove('act-icon');
    minSearch.classList.remove('act-minsearch');
    
}

///////////////////////////////
let c1 = document.getElementById('c1'),
    c2 = document.getElementById('c2'),
    c3 = document.getElementById('c3'),
    c4 = document.getElementById('c4'),
    c5 = document.getElementById('c5'),
    c6 = document.getElementById('c6');

c1.onclick = function(){
    c1.classList.add('actcs');
};
c2.onclick = function(){
    c2.classList.add('actcs');
};
c3.onclick = function(){
    c3.classList.add('actcs');
};
c4.onclick = function(){
    c4.classList.add('actcs');
};
c5.onclick = function(){
    c5.classList.add('actcs');
};
c6.onclick = function(){
    c6.classList.add('actcs');
};
/////////////////////////////////

let exInfo = document.getElementById('exInfo'),
    searchInfo = document.getElementById('infoMin'),
    butSearch = document.getElementById('butInfo');

butSearch.onclick = function(){
    searchInfo.classList.add('actinfo');
};
exInfo.onclick = function(){
    searchInfo.classList.remove('actinfo');
};
////////////////////////
let stadentEx = document.getElementById('exStudent'); 
stadentEx.onclick = function(){
    stadent.classList.remove('ex-student');
    myNav[1].classList.remove('act-li');
    myNav[1].children[0].classList.remove('act-icon');
};
/////////////////////////
let exJob = document.getElementById('exJob');
exJob.onclick = function(){
    myNav[2].classList.remove('act-li');
    myNav[2].children[0].classList.remove('act-icon');
    job.classList.remove('actJobs');
}
let exJobs = document.getElementById('exLog');
exJobs.onclick = function(){
    myNav[3].classList.remove('act-li');
    myNav[3].children[0].classList.remove('act-icon');
    logJob.classList.remove('actjob');
}