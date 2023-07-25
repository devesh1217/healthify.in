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
  document.getElementById('BMI-bg').style.width=document.getElementById('BMI').offsetWidth+'px'
  document.getElementById('BMI-bg').style.top=document.getElementById('BMI').offsetTop+parseFloat(window.getComputedStyle(document.getElementById('BMI')).fontSize)/1.5+'px'
  document.getElementById('BMI-bg').style.left=document.getElementById('BMI').offsetLeft+'px'
  document.getElementById('BMI-bg').style.height=parseFloat(window.getComputedStyle(document.getElementById('BMI')).fontSize)/1.5+'px'
  
  //setting how-to-text and its bg
  document.getElementById('yoga-title-bg').style.width=document.getElementById('yoga-title').offsetWidth+'px'
  document.getElementById('yoga-title-bg').style.top=document.getElementById('yoga-title').offsetTop+parseFloat(window.getComputedStyle(document.getElementById('yoga-title')).fontSize)/1.5+'px'
  document.getElementById('yoga-title-bg').style.left=document.getElementById('yoga-title').offsetLeft+'px'
  document.getElementById('yoga-title-bg').style.height=parseFloat(window.getComputedStyle(document.getElementById('yoga-title')).fontSize)/1.5+'px'
  
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

//bmi calc
let age=document.getElementById('age')
let weight=document.getElementById('weight')
let height=document.getElementById('height')
let gender=document.getElementById('gender')
let Bmi=document.getElementById('BMI-ans')
let result=document.getElementById('BMI-result')
let pointer=document.getElementById('pointer')
let bmi;

weight.oninput=height.oninput=()=>{
    let w=weight.value
    let h=height.value
    bmi=(Math.round(w*1000000/(h*h))/100 )
    let bmiPercent=(bmi-14)/28*100;
    if (h>120 && h<200 && w>30 && w<150){
        Bmi.firstElementChild.innerHTML=bmi
        result.firstElementChild.innerHTML=BMIstatus(bmi)
        if(bmiPercent>97){
            pointer.style.left='97%'
        }else{
            pointer.style.left=bmiPercent+'%'
        }
    } else {
        Bmi.firstElementChild.innerHTML='-'
        pointer.style.left='30%'
    }
}

function BMIstatus(bmi){
    if (bmi<16){
        return "Severe Thinness";
    } else if (bmi<17){
        return "Moderate Thinness";
    } else if (bmi<18.5){
        return "Mild Thinness";
    } else if (bmi<25){
        return "Normal";
    } else if (bmi<30){
        return "Overweight";
    } else if (bmi<35){
        return "Obese Class I";
    } else if (bmi<40){
        return "Obese Class II";
    } else if (bmi>=40){
        return "Obese Class III";
    }
}

//fav-yoga print
let list=JSON.parse(localStorage.getItem('favYoga'))
console.log(list);

if(list==null){
    document.getElementById('yoga-table').innerHTML='<tr><th>No Favourite Marked</th></tr>'
}else{
    let warmupList=[]
    let beginerList=[]
    let intermideateList=[]
    let advancedList=[]
    
    for(i of list){
        if(i.no.slice(0,-2)=='warmup'){
            warmupList.push(i)
        }else if(i.no.slice(0,-2)=='beginer'){
            beginerList.push(i)
        }else if(i.no.slice(0,-2)=='intermediate'){
            intermideateList.push(i)
        }else if(i.no.slice(0,-2)=='advanced'){
            advancedList.push(i)
        }
    }
    console.log(warmupList,beginerList,intermideateList,advancedList);

    //warmup printing
    let newLine=document.createElement('tr')
    newLine.innerHTML='<th colspan="3">Warm-Up</th>'
    document.getElementById('yoga-table').appendChild(newLine)
    let count=1
    if(warmupList.length==0){
        let newLine=document.createElement('tr')
        newLine.innerHTML='<td colspan="3" align="center">No Warm-Up added</td>'
        document.getElementById('yoga-table').appendChild(newLine)
    }
    for(i of warmupList){
        console.log(i);
        let newLine=document.createElement('tr')
        newLine.innerHTML='<td>'+count+'</td><td>'+i.name+'.</td><td>'+i.description+'</td>'
        console.log(newLine);
        document.getElementById('yoga-table').appendChild(newLine)
        count++
    }
    
    //beginer printing
    newLine=document.createElement('tr')
    newLine.innerHTML='<th colspan="3">Beginer</th>'
    document.getElementById('yoga-table').appendChild(newLine)
    count=1
    if(beginerList.length==0){
        let newLine=document.createElement('tr')
        newLine.innerHTML='<td colspan="3" align="center">No Beginer Yoga added</td>'
        document.getElementById('yoga-table').appendChild(newLine)
    }
    for(i of beginerList){
        console.log(i);
        let newLine=document.createElement('tr')
        newLine.innerHTML='<td>'+count+'</td><td>'+i.name+'.</td><td>'+i.description+'</td>'
        console.log(newLine);
        document.getElementById('yoga-table').appendChild(newLine)
        count++
    }
    
    //Intermediate printing
    newLine=document.createElement('tr')
    newLine.innerHTML='<th colspan="3">Intermediate</th>'
    document.getElementById('yoga-table').appendChild(newLine)
    count=1
    if(intermideateList.length==0){
        let newLine=document.createElement('tr')
        newLine.innerHTML='<td colspan="3" align="center">No Intermediate Yoga added</td>'
        document.getElementById('yoga-table').appendChild(newLine)
    }
    for(i of intermideateList){
        console.log(i);
        let newLine=document.createElement('tr')
        newLine.innerHTML='<td>'+count+'</td><td>'+i.name+'.</td><td>'+i.description+'</td>'
        console.log(newLine);
        document.getElementById('yoga-table').appendChild(newLine)
        count++
    }
    
    //Advanved printing
    newLine=document.createElement('tr')
    newLine.innerHTML='<th colspan="3">Advanved</th>'
    document.getElementById('yoga-table').appendChild(newLine)
    count=1
    if(advancedList.length==0){
        let newLine=document.createElement('tr')
        newLine.innerHTML='<td colspan="3" align="center">No Advanved added</td>'
        document.getElementById('yoga-table').appendChild(newLine)
    }
    for(i of advancedList){
        console.log(i);
        let newLine=document.createElement('tr')
        newLine.innerHTML='<td>'+count+'</td><td>'+i.name+'.</td><td>'+i.description+'</td>'
        console.log(newLine);
        document.getElementById('yoga-table').appendChild(newLine)
        count++
    }
    
}