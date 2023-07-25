let favList=JSON.parse(localStorage.getItem('favList'))

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
  //setting why-text and its bg
  document.getElementById('why-bg').style.width=document.getElementById('why-yoga').offsetWidth+'px'
  document.getElementById('why-bg').style.top=document.getElementById('why-yoga').offsetTop+parseFloat(window.getComputedStyle(document.getElementById('why-yoga')).fontSize)/1.5+'px'
  document.getElementById('why-bg').style.left=document.getElementById('why-yoga').offsetLeft+'px'
  document.getElementById('why-bg').style.height=parseFloat(window.getComputedStyle(document.getElementById('why-yoga')).fontSize)/1.5+'px'
  
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
  
  //setting filter btns
  document.getElementById('filter-btn').onclick=filterToggle
  
  //setting yoga box height
  document.getElementById('yoga-bg').style.height=document.getElementById('yoga-box').offsetHeight+20+'px'

}

//warmup data
let warmupData=[{
    name:"Run in Place",
    link:'Warmup/warmup1.gif',
    description:'2 minutes',
    pose: '',
    no: 'warmup-1',
},{
    name:"Jump Rope",
    link:'Warmup/warmup2.gif',
    description:'2 minutes',
    pose: '',
    no: 'warmup-2',
},{
    name:"Standing Climber",
    link:'Warmup/warmup3.gif',
    description:'90 seconds',
    pose: '',
    no: 'warmup-3',
},{
    name:"Finger-Toe Jacks",
    link:'Warmup/warmup4.gif',
    description:'90 seconds',
    pose: '',
    no: 'warmup-4',
},{
    name:"Inchworms",
    link:'Warmup/warmup5.gif',
    description:'90 seconds',
    pose: '',
    no: 'warmup-5',
},{
    name:"Knee Circles",
    link:'Warmup/warmup6.gif',
    description:'90 seconds',
    pose: '',
    no: 'warmup-6',
}]

//beginer data
let beginerData = [
  {
    name: "Adho Mukha Svanasana",
    link: "Beginer/b1.jpg",
    description: "Downward Facing Dog",
    pose: 'Standing',
    no:'beginer-1'
  },
  {
    name: "Tadasana",
    link: "Beginer/b2.jpg",
    description: "Mountain pose",
    pose: 'Standing',
    no:'beginer-2'
  },
  {
    name: "Virabhadrasana",
    link: "Beginer/b3.jpg",
    description: "Warrior Pose",
    pose: 'Standing',
    no:'beginer-3'
  },
  {
    name: "Trikonasana",
    link: "Beginer/b4.jpg",
    description: "Triangle Pose",
    pose: 'Standing',
    no:'beginer-4'
  },
  {
    name: "PadaHastasana",
    link: "Beginer/b5.jpg",
    description: "Hand-to-foot pose",
    pose: 'Standing',
    no:'beginer-5'
  },
  {
    name: "Vrikshasana",
    link: "Beginer/b6.webp",
    description: "Tree pose",
    pose: 'Standing',
    no:'beginer-6'
  },
  {
    name: "Bhujangasan",
    link: "Beginer/b7.jpg",
    description: "Cobra Pose",
    pose: 'Prone',
    no:'beginer-7'
  },
  {
    name: "Sukhasana",
    link: "Beginer/b8.jpg",
    description: "Easy Pose",
    pose: 'Seated',
    no:'beginer-8'
  },
  {
    name: "Padmasana",
    link: "Beginer/b9.jpg",
    description: "Lotus pose",
    pose: 'Seated',
    no:'beginer-9'
  },
  {
    name: "Shavasana",
    link: "Beginer/b10.jpg",
    description: "Corpse Pose",
    pose: 'Supine',
    no:'beginer-10'
  },
];

//intermediate data
let intermediateData = [
    {
      name: "Baddha Konasana",
      link: "Intermediate/i1.jpeg",
      description: "Butterfly pose",
      pose: 'Seated',
      no:'intermediate-1'
    },
    {
      name: "Uttanapadasana",
      link: "Intermediate/i2.jpg",
      description: "Leg raise pose",
      pose: 'Prone',
      no:'intermediate-2'
    },
    {
      name: "Pavan Muktasana",
      link: "Intermediate/i3.jpg",
      description: "Nose-Knee pose",
      pose: 'Prone',
      no:'intermediate-3'
    },
    {
      name: "Naukasana",
      link: "Intermediate/i4.gif",
      description: "Boat pose",
      pose: 'Prone',
      no:'intermediate-4'
    },
    {
      name: "Ustrasana",
      link: "Intermediate/i5.jpg",
      description: "Camel pose",
      pose: 'Seated',
      no:'intermediate-5'
    },
    {
      name: "Vajrasana",
      link: "Intermediate/i6.jpg",
      description: "Thonderbolt pose",
      pose: 'Seated',
      no:'intermediate-6'
    },
    {
      name: "Shashankasana",
      link: "Intermediate/i7.jpg",
      description: "Hare pose",
      pose: 'Seated',
      no:'intermediate-7'
    },
    {
      name: "Paschimottasana",
      link: "Intermediate/i8.jpg",
      description: "Seated Forward Bend",
      pose: 'Seated',
      no:'intermediate-8'
    }
];
//advanced data
let advanceData = [
  {
    name: "Bakasana",
    link: "Advanced/a1.jpg",
    description: "Crow pose",
    pose: 'Supine',
    no:'advanced-1'
  },
  {
    name: "Sirshasana",
    link: "Advanced/a2.jpg",
    description: "Headstand pose",
    pose: 'Standing',
    no:'advanced-2'
  },
  {
    name: "Matsyasana",
    link: "Advanced/a3.jpg",
    description: "Fish pose",
    pose: 'Prone',
    no:'advanced-3'
  },
  {
    name: "Chakrasana",
    link: "Advanced/a4.jpg",
    description: "Wheel pose",
    pose: 'Prone',
    no:'advanced-4'
  },
  {
    name: "Dhanurasana",
    link: "Advanced/a5.jpg",
    description: "Bow pose",
    pose: 'Supine',
    no:'advanced-5'
  },
  {
    name: "Garudasana",
    link: "Advanced/a6.jpg",
    description: "Eagle pose",
    pose: 'Standing',
    no:'advanced-6'
  },
  {
    name: "Astavakrasana",
    link: "Advanced/a7.jpeg",
    description: "Eight angle pose",
    pose: 'Supine',
    no:'advanced-7'
  },
  {
    name: "Gaumukhasana",
    link: "Advanced/a8.jpg",
    description: "Cow face pose",
    pose: 'Seated',
    no:'advanced-8'
  },
];

//yoga selectors
let yogaDisplayBox=document.getElementById('yoga-display')

//filter button toggle
function filterToggle(){
    if(document.getElementById('warmup').checked){
        document.getElementById('yoga-filters').style.display='none'
      }else if(document.getElementById('yoga-filters').style.display=='none' || document.getElementById('yoga-filters').style.display==''){
        document.getElementById('yoga-filters').style.display='flex'
      }else if(document.getElementById('yoga-filters').style.display=='flex'){
        document.getElementById('yoga-filters').style.display='none'
    }
}

document.getElementById('filter-btn').onclick=filterToggle

//filters
let filterBtns=document.querySelectorAll('input[type="checkbox"]')
let checkedBtns=['All']
filterBtns.forEach((curr)=>{
    curr.oninput=()=>{
      displayBox(selected)
      addToFav()
    }
})

//warmup beginer intermediate and advanced
let btns=document.getElementsByName('level')
let selected=btns[0]
display(warmupData)
btns.forEach((curr)=>{
    curr.oninput=()=>{
        if (curr.checked){
            selected=curr
            displayBox(selected)
            addToFav()
        }
    }
})


//displaying
function displayBox(selected){
    if(selected.id=='warmup'){
        display(warmupData)
      }else if(selected.id=='beginer'){
        display(beginerData)
      }else if(selected.id=='intermediate'){
        display(intermediateData)
      }else if(selected.id=='advanced'){
        display(advanceData)
    }
}

//fav list

if(favList==null){
  favList={}
  for(i of warmupData){
    favList[i.no]=false
  }
  for(i of beginerData){
    favList[i.no]=false
  }
  for(i of intermediateData){
    favList[i.no]=false
  }
  for(i of advanceData){
    favList[i.no]=false
  }
}

//display yoga
function display(arr){
    let count=1
    let w
    if(arr==warmupData){
      w=''
    } else {
      w='width="320px"'
    }
    yogaDisplayBox.innerHTML=''
    for(ele of arr){
      let icon=''
      if(favList==null){
        icon='🖤'
      }else if(favList[ele.no]){
        icon='❤️'
      } else {
        icon='🖤'
      }
        let add=false
        if(filterBtns[filterBtns.length-1].checked){
            let newNode=document.createElement('span')
            newNode.innerHTML='<div class="items" id="item'+count+'"><h2>'+count+'. '+ele.name+'<button class="fav-btn" id="'+ele.no+'">'+icon+'</button></h2><img '+w+' src="'+ele.link+'" alt=""><h3>'+ele.description+'</h3></div>'
            yogaDisplayBox.appendChild(newNode)
            count++
            continue
        }
        for(ch of filterBtns){
          if(ch.checked==true && ele.pose==ch.id){
                add=true
                break;
              }
            }
            if(add){
              let newNode=document.createElement('span')
              newNode.innerHTML='<div class="items" id="item'+count+'"><h2>'+count+'. '+ele.name+'<button class="fav-btn" id="'+ele.no+'">'+icon+'</button></h2><img '+w+' src="'+ele.link+'" alt=""><h3>'+ele.description+'</h3></div>'
              yogaDisplayBox.appendChild(newNode)
            count++
        }
    }
    setTimeout(()=>{
      document.getElementById('yoga-bg').style.height=document.getElementById('yoga-box').offsetHeight+50+'px'
    },500)
}
  
//fav-yoga

addFavYoga=(curr,data)=>{
    let favYoga=JSON.parse(localStorage.getItem('favYoga'))
    if(favYoga==null){
        favYoga=[]
    }
    if(curr.innerHTML=='🖤'){
        curr.innerHTML='❤️'
        favYoga.push({name:data.name,description:data.description,no:data.no})
        localStorage.setItem('favYoga',JSON.stringify(favYoga))
        favList[data.no]=true
        localStorage.setItem('favList',JSON.stringify(favList))
        
      }else{
        curr.innerHTML='🖤'
        for(i in favYoga){
          if(favYoga[i].name==data.name){
            favYoga=favYoga.slice(0,i).concat(favYoga.slice(i+1))
            break
          }
        }
        localStorage.setItem('favYoga',JSON.stringify(favYoga))
        favList[data.no]=false
        localStorage.setItem('favList',JSON.stringify(favList))
    }
    console.log(favYoga);
}


function addToFav(){
  document.querySelectorAll('.fav-btn').forEach((curr)=>{
    ID=curr.id
    let data=''
    if(ID.slice(0,-2)=='warmup'){
        for(i of warmupData){
          if(i.no==ID){
            data=i
          }
        }
    } else if(ID.slice(0,-2)=='intermediate'){
        for(i of intermediateData){
          if(i.no==ID){
            data=i
          }
        }
    }else if(ID.slice(0,-2)=='advanced'){
        for(i of advanceData){
          if(i.no==ID){
            data=i
          }
        }
    }else if(ID.slice(0,-2)=='beginer'){
        for(i of beginerData){
          if(i.no==ID){
            data=i
          }
        }
    }
    curr.onclick=()=>{
        addFavYoga(curr,data)
      }
  })
}
addToFav()
