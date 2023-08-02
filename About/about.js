
function toggle_menu(){
    document.getElementById('hide-menu-box').style.display='block';
}
function close_menu(){
    document.getElementById('hide-menu-box').style.display='none';
}

window.onload=window.onresize=()=>{
    document.getElementById('about-bg').style.width=document.getElementById('about').offsetWidth+'px'
    document.getElementById('about-bg').style.top=document.getElementById('about').offsetTop+parseFloat(window.getComputedStyle(document.getElementById('about')).fontSize)/1.5+'px'
    document.getElementById('about-bg').style.left=document.getElementById('about').offsetLeft+'px'
    document.getElementById('about-bg').style.height=parseFloat(window.getComputedStyle(document.getElementById('about')).fontSize)/1.5+'px'
    
    document.getElementById('creator-bg').style.width=document.getElementById('creator').offsetWidth+'px'
    document.getElementById('creator-bg').style.top=document.getElementById('creator').offsetTop+parseFloat(window.getComputedStyle(document.getElementById('creator')).fontSize)/1.5+'px'
    document.getElementById('creator-bg').style.left=document.getElementById('creator').offsetLeft+'px'
    document.getElementById('creator-bg').style.height=parseFloat(window.getComputedStyle(document.getElementById('creator')).fontSize)/1.5+'px'
    
    document.getElementById('mentor-bg').style.width=document.getElementById('mentor').offsetWidth+'px'
    document.getElementById('mentor-bg').style.top=document.getElementById('mentor').offsetTop+parseFloat(window.getComputedStyle(document.getElementById('mentor')).fontSize)/1.5+'px'
    document.getElementById('mentor-bg').style.left=document.getElementById('mentor').offsetLeft+'px'
    document.getElementById('mentor-bg').style.height=parseFloat(window.getComputedStyle(document.getElementById('mentor')).fontSize)/1.5+'px'
    
}

const creatorDetails = document.querySelectorAll('.creator-details');

    creatorDetails.forEach((creator) => {
      creator.addEventListener('mouseenter', () => {
        creator.classList.add('hover');
      });

      creator.addEventListener('mouseleave', () => {
        creator.classList.remove('hover');
      });
    });