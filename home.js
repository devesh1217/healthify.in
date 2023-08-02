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

window.onload=window.onresize=()=>{
  //setting how-to-text and its bg
  document.getElementById('how-to-bg').style.width=document.getElementById('how-to').offsetWidth+'px'
  document.getElementById('how-to-bg').style.top=document.getElementById('how-to').offsetTop+parseFloat(window.getComputedStyle(document.getElementById('how-to')).fontSize)/1.5+'px'
  document.getElementById('how-to-bg').style.left=document.getElementById('how-to').offsetLeft+'px'
  document.getElementById('how-to-bg').style.height=parseFloat(window.getComputedStyle(document.getElementById('how-to')).fontSize)/1.5+'px'
  
  document.getElementById('motivate-bg').style.width=document.getElementById('motivate').offsetWidth+'px'
  document.getElementById('motivate-bg').style.top=document.getElementById('motivate').offsetTop+parseFloat(window.getComputedStyle(document.getElementById('motivate')).fontSize)/1.5+'px'
  document.getElementById('motivate-bg').style.left=document.getElementById('motivate').offsetLeft+'px'
  document.getElementById('motivate-bg').style.height=parseFloat(window.getComputedStyle(document.getElementById('motivate')).fontSize)/1.5+'px'
  
  //setting header-text and its bg
  document.getElementById('header-text-bg').style.width=document.getElementById('header-text').offsetWidth+'px'
  document.getElementById('header-text-bg').style.top=document.getElementById('header-text').offsetTop+parseFloat(window.getComputedStyle(document.getElementById('header-text')).fontSize)/1.5+'px'
  document.getElementById('header-text-bg').style.left=document.getElementById('header-text').offsetLeft+'px'
  document.getElementById('header-text-bg').style.height=parseFloat(window.getComputedStyle(document.getElementById('header-text')).fontSize)/2+'px'
  
  //setting header-text2 and its bg
  document.getElementById('header-text-bg2').style.width=document.getElementById('header-text2').offsetWidth+'px'
  document.getElementById('header-text-bg2').style.top=document.getElementById('header-text2').offsetTop+parseFloat(window.getComputedStyle(document.getElementById('header-text2')).height)/2+'px'
  document.getElementById('header-text-bg2').style.left=document.getElementById('header-text2').offsetLeft+'px'
  document.getElementById('header-text-bg2').style.height=parseFloat(window.getComputedStyle(document.getElementById('header-text2')).fontSize)/2+'px'
  
  //setting header-img and its bg(black bg)
  document.getElementById('header-bg').style.width=document.getElementById('header-img').offsetWidth+'px'
  document.getElementById('header-bg').style.height=document.getElementById('header-img').offsetHeight+'px'
  

}