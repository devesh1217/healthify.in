window.onload=window.onresize=()=>{
    //setting why-text and its bg
    document.getElementById('plan-title-bg').style.width=document.getElementById('plan-title').offsetWidth+'px'
    document.getElementById('plan-title-bg').style.top=document.getElementById('plan-title').offsetTop+parseFloat(window.getComputedStyle(document.getElementById('plan-title')).fontSize)/1.5+'px'
    document.getElementById('plan-title-bg').style.left=document.getElementById('plan-title').offsetLeft+'px'
    // document.getElementById('plan-title-bg').style.height=parseFloat(window.getComputedStyle(document.getElementById('plan-title')).fontSize)/3+'px'
}