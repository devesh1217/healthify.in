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