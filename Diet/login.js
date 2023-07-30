let inp=document.getElementsByClassName('input');
document.getElementById('user-id').onfocus=()=>{
    document.getElementById('user-id').placeholder=''
    document.getElementById('user-id').parentElement.firstElementChild.innerHTML='User-ID'
}
document.getElementById('pswd').onfocus=()=>{
    document.getElementById('pswd').placeholder=''
    document.getElementById('pswd').parentElement.firstElementChild.innerHTML='Password'
}

setTimeout(()=>{
    document.getElementById('login-box').style.display='flex';
    document.getElementById('login-title-bg').style.width=document.getElementById('login-title').offsetWidth+20+'px'
    document.getElementById('login-title-bg').style.top=document.getElementById('login-title').offsetTop+parseFloat(window.getComputedStyle(document.getElementById('login-title')).fontSize)/1.5+'px'
    document.getElementById('login-title-bg').style.left=document.getElementById('login-title').offsetLeft-10+'px'
    document.getElementById('login-title-bg').style.height=parseFloat(window.getComputedStyle(document.getElementById('login-title')).fontSize)/2+'px'
},3000)

document.getElementById('login-close').onclick=()=>{
    document.getElementById('login-box').style.display='none';

}