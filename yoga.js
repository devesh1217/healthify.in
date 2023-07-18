document.onscroll=()=>{
    if(document.documentElement.scrollTop==0){
        document.getElementById('nav').style.backgroundColor='#00000068';
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

document.getElementById('why-bg').style.width=document.getElementById('why-yoga').offsetWidth+35+'px'
document.getElementById('why-bg').style.top=document.getElementById('why-yoga').offsetTop+30+'px'