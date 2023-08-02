window.onload=window.onresize=()=>{
    document.getElementById('header-text3-bg').style.width=document.getElementById('header-text3').offsetWidth+'px'
    document.getElementById('header-text3-bg').style.top=document.getElementById('header-text3').offsetTop+parseFloat(window.getComputedStyle(document.getElementById('header-text3')).fontSize)/1.5+'px'
    document.getElementById('header-text3-bg').style.left=document.getElementById('header-text3').offsetLeft+'px'
    document.getElementById('header-text3-bg').style.height=parseFloat(window.getComputedStyle(document.getElementById('header-text3')).fontSize)/2+'px'
    
    document.getElementById('header-text-bg2').style.width=document.getElementById('header-text2').offsetWidth+'px'
    document.getElementById('header-text-bg2').style.top=document.getElementById('header-text2').offsetTop+parseFloat(window.getComputedStyle(document.getElementById('header-text2')).height)/2.5+'px'
    document.getElementById('header-text-bg2').style.left=document.getElementById('header-text2').offsetLeft+'px'
    document.getElementById('header-text-bg2').style.height=parseFloat(window.getComputedStyle(document.getElementById('header-text2')).fontSize)/2+'px'

    document.getElementById('header-text-bg').style.width=document.getElementById('header-text').offsetWidth+'px'
    document.getElementById('header-text-bg').style.top=document.getElementById('header-text').offsetTop+parseFloat(window.getComputedStyle(document.getElementById('header-text')).fontSize)/1.5+'px'
    document.getElementById('header-text-bg').style.left=document.getElementById('header-text').offsetLeft+'px'
    document.getElementById('header-text-bg').style.height=parseFloat(window.getComputedStyle(document.getElementById('header-text')).fontSize)/2+'px'

    document.getElementById('nameChange-bg').style.width=document.getElementById('nameChange').offsetWidth+'px'
    document.getElementById('nameChange-bg').style.top=document.getElementById('nameChange').offsetTop+parseFloat(window.getComputedStyle(document.getElementById('nameChange')).fontSize)/1.5+'px'
    document.getElementById('nameChange-bg').style.left=document.getElementById('nameChange').offsetLeft+'px'
    document.getElementById('nameChange-bg').style.height=parseFloat(window.getComputedStyle(document.getElementById('nameChange')).fontSize)/2+'px'
}
document.onscroll=()=>{
    if(document.documentElement.scrollTop==0){
        document.getElementById('nav').style.backgroundColor='transparent';
    } else {
        document.getElementById('nav').style.backgroundColor='black';
    }
}
function toggle_menu(){
    document.getElementById('hide-menu-box').style.display='block';
}
function close_menu(){
    document.getElementById('hide-menu-box').style.display='none';
}

var pleasantMusic = document.getElementById("pleasantMusic");
var musicPlaying = false;

function toggleMusic() {
  if (musicPlaying) {
    pleasantMusic.pause();
    musicPlaying = false;
  } else {
    pleasantMusic.play();
    musicPlaying = true;
  }
}


var textid = 0;
var textChangeInterval;
var subscriptionPopupShown = false;

function timer() {
    var timeleft = 30;
    var element = document.getElementById("TimeLeft");
    var btnName = document.getElementById("btnjoin2");
    var musicText = document.getElementById("musicText");

    // Clear the text change interval if it's still running
    clearInterval(textChangeInterval);
    toggleMusic();
    btnName.innerHTML = "Stop";
    btnName.style.color = "rgba(92, 52, 6, 0.977)";
    btnName.onmousemove=()=>{
        btnName.style.color = "white";
    }
    btnName.onmouseleave=()=>{
        btnName.style.color = "rgba(92, 52, 6, 0.977)";
    }
    btnName.onclick = function () {
        clearTimeout(timerID);
        clearInterval(textChangeInterval);
        btnName.innerHTML = "Start Now";
        btnName.style.color = "rgba(92, 52, 6, 0.977)";
        toggleMusic();
    };

    var timerID = setInterval(countdown, 1000);

    // Set interval to change text every 5 seconds
    textChangeInterval = setInterval(changetext, 5000);
    setInterval(showSubscriptionPopup, 31000);

    function countdown() {
    if(timeleft==0){
        clearInterval(textChangeInterval);
        toggleMusic();
    }
        if (timeleft < 0) {
            clearTimeout(timerID);
            btnName.innerHTML = "Start Now";
            btnName.style.color = "rgba(92, 52, 6, 0.977)";
        } else {
            element.innerHTML = timeleft;
            timeleft--;
        }
    }
}

function changetext() {
    textid++;
    var text = document.getElementById("nameChange");
    if (textid % 2 == 0) {
        text.innerHTML = "Inhale";
        document.getElementById('nameChange-bg').style.backgroundColor="#41dc1ec9"
        document.getElementsByClassName('circle')[0].style.backgroundColor="#41dc1ec9"
    } else {
        text.innerHTML = "Exhale";
        document.getElementsByClassName('circle')[0].style.backgroundColor="#f43333c5"
        document.getElementById('nameChange-bg').style.backgroundColor="#f43333c5"
    }


}

function showSubscriptionPopup() {
    alert("Thank you for using our meditation service. Subscribe now for premium benefits!");
    subscriptionPopupShown = true;
    window.location="../Plans/plans.html"
}