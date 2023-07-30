//
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
console.log("hi");
    // document.getElementById('how-to-bg').style.width=document.getElementById('how-to').offsetWidth+'px'
    // document.getElementById('how-to-bg').style.top=document.getElementById('how-to').offsetTop+parseFloat(window.getComputedStyle(document.getElementById('how-to')).fontSize)/1.5+'px'
    // document.getElementById('how-to-bg').style.left=document.getElementById('how-to').offsetLeft+'px'
    // document.getElementById('how-to-bg').style.height=parseFloat(window.getComputedStyle(document.getElementById('how-to')).fontSize)/1.5+'px'

    //setting header-text and its bg
    document.getElementById('header-text-bg').style.width=document.getElementById('header-text').offsetWidth+'px'
    document.getElementById('header-text-bg').style.top=document.getElementById('header-text').offsetTop+parseFloat(window.getComputedStyle(document.getElementById('header-text')).fontSize)/1.5+'px'
    document.getElementById('header-text-bg').style.left=document.getElementById('header-text').offsetLeft+'px'
    document.getElementById('header-text-bg').style.height=parseFloat(window.getComputedStyle(document.getElementById('header-text')).fontSize)/2+'px'

    //setting header-text2 and its bg
    document.getElementById('header-text-bg2').style.width=document.getElementById('header-text2').offsetWidth+'px'
    document.getElementById('header-text-bg2').style.top=document.getElementById('header-text2').offsetTop+parseFloat(window.getComputedStyle(document.getElementById('header-text2')).height)/2.5+'px'
    document.getElementById('header-text-bg2').style.left=document.getElementById('header-text2').offsetLeft+'px'
    document.getElementById('header-text-bg2').style.height=parseFloat(window.getComputedStyle(document.getElementById('header-text2')).fontSize)/2+'px'

    //setting header-text3 and its bg
    document.getElementById('header-text-bg3').style.width=document.getElementById('header-text3').offsetWidth+'px'
    document.getElementById('header-text-bg3').style.top=document.getElementById('header-text3').offsetTop+parseFloat(window.getComputedStyle(document.getElementById('header-text3')).height)/2.5+'px'
    document.getElementById('header-text-bg3').style.left=document.getElementById('header-text3').offsetLeft+'px'
    document.getElementById('header-text-bg3').style.height=parseFloat(window.getComputedStyle(document.getElementById('header-text3')).fontSize)/2+'px'
    
    //setting title1 and its bg
    document.getElementById('title-1-bg').style.width=document.getElementById('title-1').offsetWidth+'px'
    document.getElementById('title-1-bg').style.top=document.getElementById('title-1').offsetTop+50+'px'
    document.getElementById('title-1-bg').style.left=document.getElementById('title-1').offsetLeft+'px'
    document.getElementById('title-1-bg').style.height=parseFloat(window.getComputedStyle(document.getElementById('title-1')).fontSize)/2+'px'

    //setting header-img and its bg(black bg)
    document.getElementById('header-bg').style.width=document.getElementById('header-img').offsetWidth+'px'
    document.getElementById('header-bg').style.height=document.getElementById('header-img').offsetHeight+'px'

}



// Sample nutrition data (you should replace this with actual data)
// const nutritionData = {
//     // "apple": { calories: 0, protein: 0, fat: 0, carbohydrates: 0 },
//     "apple": { calories: 52, protein: 0.3, fat: 0.2, carbohydrates: 14 },
//     "banana": { calories: 96, protein: 1.2, fat: 0.2, carbohydrates: 22 },
//     "carrot": { calories: 41, protein: 0.9, fat: 0.2, carbohydrates: 10 },
//     "chicken breast": { calories: 165, protein: 31, fat: 3.6, carbohydrates: 0 },
//     "salmon": { calories: 206, protein: 22, fat: 13, carbohydrates: 0 },
//     "rice": { calories: 130, protein: 2.7, fat: 0.3, carbohydrates: 28 },
//     "pasta": { calories: 131, protein: 5, fat: 1, carbohydrates: 25 },
//     "potato": { calories: 77, protein: 2, fat: 0.1, carbohydrates: 17 },
//     "avocado": { calories: 160, protein: 2, fat: 15, carbohydrates: 9 },
//     "egg": { calories: 78, protein: 6, fat: 5, carbohydrates: 1 },
//     "orange": { calories: 62, protein: 1, fat: 0.2, carbohydrates: 15 },
//     "grapes": { calories: 52, protein: 0.6, fat: 0.2, carbohydrates: 13.7 },
//     "broccoli": { calories: 34, protein: 2.8, fat: 0.4, carbohydrates: 6.6 },
//     "spinach": { calories: 23, protein: 2.9, fat: 0.4, carbohydrates: 3.6 },
//     "almonds": { calories: 579, protein: 21, fat: 49, carbohydrates: 22 },
//     "yogurt": { calories: 59, protein: 3.5, fat: 3.3, carbohydrates: 4.7 },
//     "salad greens": { calories: 15, protein: 1.4, fat: 0.2, carbohydrates: 2.9 },
//     "salami": { calories: 378, protein: 17, fat: 32, carbohydrates: 2.4 },
//     "milk": { calories: 42, protein: 3.4, fat: 1, carbohydrates: 5 },
//     "quinoa": { calories: 120, protein: 4.4, fat: 1.9, carbohydrates: 21 },
//     "potato chips": { calories: 152, protein: 2.1, fat: 9.8, carbohydrates: 15.4 },
//     "hamburger": { calories: 354, protein: 13.5, fat: 17.6, carbohydrates: 34.6 },
//     "french fries": { calories: 312, protein: 3.4, fat: 15.6, carbohydrates: 41.4 },
//     "ice cream": { calories: 207, protein: 3.7, fat: 11, carbohydrates: 23.3 },
//     "pizza": { calories: 266, protein: 11.6, fat: 9.4, carbohydrates: 32.6 },
//     "chocolate": { calories: 546, protein: 7.8, fat: 31.5, carbohydrates: 61.5 },
//     "steak": { calories: 271, protein: 25.8, fat: 17.2, carbohydrates: 0 },
//     "shrimp": { calories: 85, protein: 18, fat: 1.1, carbohydrates: 0 },
//     "strawberries": { calories: 32, protein: 0.7, fat: 0.3, carbohydrates: 7.7 },
//     "watermelon": { calories: 30, protein: 0.6, fat: 0.2, carbohydrates: 7.6 },
//     "grilled chicken breast": { calories: 165, protein: 31, fat: 3.6, carbohydrates: 0 },
//     "salmon fillet": { calories: 233, protein: 25, fat: 14, carbohydrates: 0 },
//     "brown rice": { calories: 215, protein: 4.5, fat: 1.8, carbohydrates: 45 },
//     "whole wheat pasta": { calories: 174, protein: 7.5, fat: 1.3, carbohydrates: 37 },
//     "sweet potato": { calories: 86, protein: 1.6, fat: 0.1, carbohydrates: 20 },
//     "avocado toast": { calories: 196, protein: 4.5, fat: 10.2, carbohydrates: 21.4 },
//     "boiled egg": { calories: 78, protein: 6.3, fat: 5.3, carbohydrates: 0.6 },
//     "Greek yogurt": { calories: 100, protein: 10, fat: 0, carbohydrates: 4 },
//     "black beans": { calories: 227, protein: 15, fat: 0.9, carbohydrates: 40 },
//     "cheddar cheese": { calories: 402, protein: 24.9, fat: 33.1, carbohydrates: 1.3 }
//     // Add more food items with their nutrition values as needed
//   };

const nutritionData = {
  "apple": { calories: 52, protein: 0.3, fat: 0.2, carbohydrates: 14 },
  "banana": { calories: 96, protein: 1.2, fat: 0.2, carbohydrates: 22 },
  "carrot": { calories: 41, protein: 0.9, fat: 0.2, carbohydrates: 10 },
  "potato": { calories: 77, protein: 2, fat: 0.1, carbohydrates: 17 },
  "mango": { calories: 60, protein: 0.8, fat: 0.4, carbohydrates: 15 },
  "spinach": { calories: 23, protein: 2.9, fat: 0.4, carbohydrates: 3.6 },
  "yogurt": { calories: 59, protein: 3.5, fat: 3.3, carbohydrates: 4.7 },
  "rice": { calories: 130, protein: 2.7, fat: 0.3, carbohydrates: 28 },
  "dal": { calories: 105, protein: 7.5, fat: 0.5, carbohydrates: 20 },
  "chickpeas": { calories: 268, protein: 14.6, fat: 4.2, carbohydrates: 45 },
  "paneer": { calories: 265, protein: 18.3, fat: 20.8, carbohydrates: 1.2 },
  "coconut": { calories: 354, protein: 3.3, fat: 33.5, carbohydrates: 15 },
  "pomegranate": { calories: 83, protein: 1.7, fat: 1.2, carbohydrates: 18.7 },
  "papaya": { calories: 43, protein: 0.5, fat: 0.4, carbohydrates: 10.9 },
  "milk": { calories: 42, protein: 3.4, fat: 1, carbohydrates: 5 },
  "almonds": { calories: 579, protein: 21, fat: 49, carbohydrates: 22 },
  "cashews": { calories: 553, protein: 18.2, fat: 43.9, carbohydrates: 30.2 },
  "chana masala": { calories: 163, protein: 7, fat: 5, carbohydrates: 24 },
  "idli": { calories: 39, protein: 1.2, fat: 0.2, carbohydrates: 8 },
  "dosa": { calories: 133, protein: 2.8, fat: 2.6, carbohydrates: 25 },
  "naan": { calories: 330, protein: 9, fat: 8, carbohydrates: 54 },
  "upma": { calories: 212, protein: 4, fat: 6, carbohydrates: 36 },
  "puri": { calories: 101, protein: 1.5, fat: 5, carbohydrates: 12 },
  "jalebi": { calories: 459, protein: 8.6, fat: 20.6, carbohydrates: 61.4 },
  "kheer": { calories: 107, protein: 3.6, fat: 4.2, carbohydrates: 14.5 },
  "lassi": { calories: 167, protein: 3.7, fat: 6.7, carbohydrates: 22.3 },
  "pav bhaji": { calories: 215, protein: 4, fat: 10, carbohydrates: 28 },
  "masala chai": { calories: 52, protein: 4.1, fat: 1.7, carbohydrates: 5.5 },
};

  
  function searchNutrition() {
    const foodSelect = document.getElementById('foodSelect');
    const selectedFoodItem = foodSelect.value;
  // console.log(selectedFoodItem);

    if (selectedFoodItem) {
      displayNutrition(selectedFoodItem);
    } else {
      const nutritionInfo = document.getElementById('nutritionInfo');
      nutritionInfo.innerHTML = `<h2>Please select Ingredient.</h2>`;
      const cal = document.getElementById('calories');
      const pro = document.getElementById('protein');
      const ft = document.getElementById('fat');
      const carbo = document.getElementById('carbohydrates');
      
      cal.innerHTML=`<p>Calories</p><b>0</b><font size="5">kcal`;
      pro.innerHTML=`<p>Protein</p><b>0</b><font size="5">g`;
      ft.innerHTML=`<p>Fat</p><b>0</b><font size="5">g`;
      carbo.innerHTML=`<p>Carbohydrates</p><b>0</b><font size="5">g`;
    }
  }
  
  function displayNutrition(foodItem) {
    const nutritionInfo = document.getElementById('nutritionInfo');
    const { calories, protein, fat, carbohydrates } = nutritionData[foodItem];
  
    nutritionInfo.innerHTML = 
      `<h2>${capitalizeFirstLetter(foodItem)}</h2>`;
  
  //   const items = document.getElementById('items');
  //   items.innerHTML=`<p>Calories: ${calories}kcal</p>
  //     <p>Protein: ${protein}g</p>
  //     <p>Fat: ${fat}g</p>
  //     <p>Carbohydrates: ${carbohydrates}g</p>`;
      
      const cal = document.getElementById('calories');
      const pro = document.getElementById('protein');
      const ft = document.getElementById('fat');
      const carbo = document.getElementById('carbohydrates');
      
      // cal.style.fontSize = "50%" ;
      cal.innerHTML=`<p>Calories</p><b>${calories}</b><font size="5">kcal`;
      pro.innerHTML=`<p>Protein</p><b>${protein}</b><font size="5">g`;
      ft.innerHTML=`<p>Fat</p><b>${fat}</b><font size="5">g`;
      carbo.innerHTML=`<p>Carbohydrates</p><b>${carbohydrates}</b><font size="5">g`;
  
      document.getElementById('displayjs').style.backgroundColor="#BF40BF"
  }
  
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


  // Food data divided into categories
// const foodData = {
//   // ... Food data as provided in the previous responses ...
//   breakfast: [
//         { name: "Oatmeal", fat: 6, protein: 10, carbs: 30, calories: 220 },
//         { name: "Yogurt", fat: 2, protein: 8, carbs: 12, calories: 100 },
//         { name: "Banana", fat: 0, protein: 1, carbs: 27, calories: 105 },
//         // Add more breakfast items here
//         { name: "Scrambled Eggs", fat: 15, protein: 13, carbs: 1, calories: 180 },
//         { name: "Whole Wheat Toast", fat: 2, protein: 4, carbs: 13, calories: 80 },
//         { name: "Milk", fat: 2, protein: 8, carbs: 12, calories: 120 },
//         { name: "Orange Juice", fat: 0, protein: 1, carbs: 26, calories: 110 },
//         { name: "Greek Yogurt Parfait", fat: 5, protein: 15, carbs: 30, calories: 250 },
//         { name: "Smoothie with Berries and Spinach", fat: 4, protein: 6, carbs: 25, calories: 150 },
//         { name: "Peanut Butter Banana Sandwich", fat: 16, protein: 10, carbs: 35, calories: 300 },
//         { name: "Blueberry Pancakes", fat: 8, protein: 5, carbs: 40, calories: 250 },
//         { name: "Avocado Toast", fat: 14, protein: 7, carbs: 21, calories: 210 },
//         { name: "Cereal with Milk", fat: 5, protein: 3, carbs: 26, calories: 150 },
//         { name: "Egg and Cheese Bagel", fat: 10, protein: 12, carbs: 30, calories: 320 },
//         { name: "Fruit Salad", fat: 0, protein: 2, carbs: 30, calories: 120 },
//         { name: "Waffle with Maple Syrup", fat: 8, protein: 5, carbs: 50, calories: 300 },
//         { name: "Pancake with Nutella", fat: 10, protein: 6, carbs: 35, calories: 280 },
//         { name: "Cinnamon Roll", fat: 15, protein: 4, carbs: 30, calories: 280 },
//         { name: "Bagel with Cream Cheese", fat: 12, protein: 6, carbs: 30, calories: 280 },
//         { name: "Breakfast Burrito", fat: 18, protein: 20, carbs: 30, calories: 380 },
//       ],
//       lunch: [
//         { name: "Grilled Chicken", fat: 5, protein: 40, carbs: 0, calories: 220 },
//         { name: "Brown Rice", fat: 2, protein: 5, carbs: 25, calories: 130 },
//         { name: "Broccoli", fat: 0, protein: 3, carbs: 6, calories: 31 },
//         // Add more lunch items here
//         { name: "Salad with Mixed Greens", fat: 4, protein: 6, carbs: 10, calories: 80 },
//         { name: "Quinoa Salad with Veggies", fat: 5, protein: 8, carbs: 35, calories: 220 },
//         { name: "Grilled Salmon", fat: 10, protein: 30, carbs: 0, calories: 250 },
//         { name: "Tuna Sandwich", fat: 12, protein: 20, carbs: 30, calories: 320 },
//         { name: "Chicken Caesar Wrap", fat: 15, protein: 25, carbs: 40, calories: 380 },
//         { name: "Vegetable Stir Fry", fat: 8, protein: 10, carbs: 25, calories: 180 },
//         { name: "Sushi Roll", fat: 5, protein: 10, carbs: 30, calories: 220 },
//         { name: "Greek Salad", fat: 12, protein: 8, carbs: 15, calories: 220 },
//         { name: "Caprese Panini", fat: 14, protein: 10, carbs: 30, calories: 320 },
//         { name: "Chicken Noodle Soup", fat: 5, protein: 12, carbs: 20, calories: 180 },
//         { name: "Vegetable Wrap", fat: 10, protein: 8, carbs: 25, calories: 250 },
//         { name: "Egg Salad Sandwich", fat: 12, protein: 15, carbs: 30, calories: 320 },
//         { name: "Grilled Vegetable Quesadilla", fat: 8, protein: 6, carbs: 35, calories: 220 },
//         { name: "Pasta with Tomato Sauce", fat: 6, protein: 8, carbs: 40, calories: 280 },
//         { name: "Chicken Avocado Salad", fat: 14, protein: 20, carbs: 10, calories: 320 },
//         { name: "Miso Soup", fat: 3, protein: 5, carbs: 10, calories: 60 },
//         { name: "Eggplant Parmesan", fat: 12, protein: 8, carbs: 40, calories: 320 },
//       ],
//       dinner: [
//         { name: "Salmon", fat: 13, protein: 39, carbs: 0, calories: 330 },
//         { name: "Quinoa", fat: 3, protein: 6, carbs: 21, calories: 120 },
//         { name: "Green Beans", fat: 0, protein: 2, carbs: 4, calories: 20 },
//         // Add more dinner items here
//         { name: "Grilled Chicken with Vegetables", fat: 10, protein: 30, carbs: 10, calories: 280 },
//         { name: "Steak with Baked Potato", fat: 20, protein: 40, carbs: 30, calories: 450 },
//         { name: "Spaghetti with Meatballs", fat: 12, protein: 25, carbs: 40, calories: 380 },
//         { name: "Grilled Shrimp Skewers", fat: 8, protein: 20, carbs: 5, calories: 150 },
//         { name: "Stuffed Bell Peppers", fat: 6, protein: 12, carbs: 25, calories: 200 },
//         { name: "Veggie Burger", fat: 7, protein: 15, carbs: 30, calories: 250 },
//         { name: "Mushroom Risotto", fat: 10, protein: 8, carbs: 40, calories: 320 },
//         { name: "Lemon Herb Roasted Chicken", fat: 14, protein: 30, carbs: 0, calories: 350 },
//         { name: "Baked Ziti", fat: 10, protein: 15, carbs: 40, calories: 300 },
//         { name: "Fish Tacos", fat: 12, protein: 18, carbs: 30, calories: 320 },
//         { name: "Vegetable Curry", fat: 10, protein: 8, carbs: 40, calories: 300 },
//         { name: "Lentil Soup", fat: 3, protein: 5, carbs: 10, calories: 80 },
//         { name: "Baked Salmon with Asparagus", fat: 14, protein: 30, carbs: 10, calories: 320 },
//         { name: "Honey Garlic Shrimp", fat: 6, protein: 15, carbs: 20, calories: 180 },
//         { name: "Chicken Alfredo Pasta", fat: 20, protein: 25, carbs: 30, calories: 400 },
//         { name: "Roasted Vegetable Lasagna", fat: 12, protein: 15, carbs: 40, calories: 340 },
//         { name: "Stuffed Portobello Mushrooms", fat: 8, protein: 10, carbs: 25, calories: 200 },
//       ],
// };
const foodData = {
  breakfast: [
    { name: "Poha", fat: 6, protein: 2, carbs: 35, calories: 180 },
    { name: "Idli with Coconut Chutney", fat: 5, protein: 3, carbs: 30, calories: 200 },
    { name: "Upma", fat: 8, protein: 4, carbs: 35, calories: 240 },
    { name: "Paratha with Curd", fat: 12, protein: 6, carbs: 40, calories: 320 },
    { name: "Masala Dosa with Sambar", fat: 7, protein: 3, carbs: 30, calories: 210 },
    { name: "Sabudana Khichdi", fat: 7, protein: 2, carbs: 40, calories: 230 },
    { name: "Chana Chaat", fat: 3, protein: 6, carbs: 30, calories: 190 },
    { name: "Vegetable Upma", fat: 5, protein: 4, carbs: 35, calories: 220 },
    { name: "Mango Lassi", fat: 3, protein: 2, carbs: 30, calories: 150 },
    { name: "Rava Uttapam", fat: 6, protein: 4, carbs: 30, calories: 220 },
    { name: "Aloo Paratha with Pickle", fat: 10, protein: 5, carbs: 40, calories: 300 },
    { name: "Mixed Fruit Salad", fat: 1, protein: 2, carbs: 35, calories: 120 },
  ],
  lunch: [
    { name: "Dal Makhani with Rice", fat: 10, protein: 8, carbs: 35, calories: 320 },
    { name: "Vegetable Biryani", fat: 12, protein: 6, carbs: 50, calories: 360 },
    { name: "Aloo Gobi", fat: 8, protein: 4, carbs: 30, calories: 180 },
    { name: "Paneer Butter Masala with Naan", fat: 15, protein: 10, carbs: 40, calories: 380 },
    { name: "Palak Paneer", fat: 12, protein: 8, carbs: 25, calories: 280 },
    { name: "Matar Paneer with Jeera Rice", fat: 10, protein: 8, carbs: 40, calories: 340 },
    { name: "Bhindi Masala with Roti", fat: 8, protein: 4, carbs: 30, calories: 220 },
    { name: "Rajma Chawal", fat: 8, protein: 6, carbs: 45, calories: 340 },
    { name: "Vegetable Pulao", fat: 7, protein: 5, carbs: 40, calories: 290 },
    { name: "Spinach and Potato Curry", fat: 6, protein: 4, carbs: 30, calories: 220 },
    { name: "Aloo Matar with Roti", fat: 7, protein: 5, carbs: 30, calories: 240 },
    { name: "Vegetable Kadhi with Jeera Rice", fat: 8, protein: 6, carbs: 35, calories: 290 },
  ],
  dinner: [
    { name: "Vegetable Fried Rice", fat: 8, protein: 4, carbs: 40, calories: 280 },
    { name: "Paneer Tikka Masala with Naan", fat: 14, protein: 8, carbs: 30, calories: 320 },
    { name: "Dum Aloo with Jeera Rice", fat: 10, protein: 6, carbs: 40, calories: 300 },
    { name: "Vegetable Korma with Roti", fat: 12, protein: 6, carbs: 35, calories: 310 },
    { name: "Dal Tadka with Rice", fat: 7, protein: 6, carbs: 30, calories: 240 },
    { name: "Aloo Paratha with Raita", fat: 10, protein: 6, carbs: 40, calories: 320 },
    { name: "Mushroom Matar with Roti", fat: 8, protein: 5, carbs: 35, calories: 270 },
    { name: "Vegetable Biryani", fat: 12, protein: 6, carbs: 50, calories: 360 },
    { name: "Mixed Dal with Jeera Rice", fat: 6, protein: 8, carbs: 30, calories: 270 },
    { name: "Vegetable Pulao", fat: 7, protein: 5, carbs: 40, calories: 290 },
    { name: "Cauliflower Curry with Roti", fat: 6, protein: 4, carbs: 30, calories: 230 },
    { name: "Aloo Baingan with Roti", fat: 5, protein: 4, carbs: 25, calories: 200 },
  ],
};

// Object to store selected items for each category
const selectedItems = {
  breakfast: new Set(),
  lunch: new Set(),
  dinner: new Set(),
};

// Function to show food items of a particular category
function showCategory(category) {
  const foodButtonsDiv = document.getElementById("foodButtons");
  foodButtonsDiv.innerHTML = "";

  const categoryData = foodData[category];
  categoryData.forEach((food) => {
    const button = document.createElement("button");
    button.textContent = food.name + " ";
    button.setAttribute("data-name", food.name);
    button.setAttribute("data-calories", food.calories);
    button.setAttribute("data-fat", food.fat);
    button.setAttribute("data-protein", food.protein);
    button.setAttribute("data-carbs", food.carbs);
    button.onclick = () => selectFoodItem(button, category);
    foodButtonsDiv.appendChild(button);

    // Check if the food item is selected and apply the "selected" class accordingly
    if (selectedItems[category].has(food.name)) {
      button.classList.add("selected");
    }
  });

  updateTotals(category);
  updateIndicatorsAndSelectedItems(category);
}

// Function to select a food item
function selectFoodItem(button, category) {
  const foodName = button.getAttribute("data-name");
  button.classList.toggle("selected");

  // Add or remove the selected item from the respective category's set
  if (button.classList.contains("selected")) {
    selectedItems[category].add(foodName);
  } else {
    selectedItems[category].delete(foodName);
  }

  updateTotals(category);
  updateIndicatorsAndSelectedItems(category);
}

 function updateTotals(category) {
    const selectedButtons = document.querySelectorAll(".food-buttons button.selected");
  
    let totalCalories = 0;
    let totalFat = 0;
    let totalProtein = 0;
    let totalCarbs = 0;
  
    selectedButtons.forEach((button) => {
      totalCalories += parseInt(button.getAttribute("data-calories"));
      totalFat += parseInt(button.getAttribute("data-fat"));
      totalProtein += parseInt(button.getAttribute("data-protein"));
      totalCarbs += parseInt(button.getAttribute("data-carbs"));
    });
  
    const totalCaloriesSpan = document.getElementById("totalCalories");
    const totalFatSpan = document.getElementById("totalFat");
    const totalProteinSpan = document.getElementById("totalProtein");
    const totalCarbsSpan = document.getElementById("totalCarbs");
  
    totalCaloriesSpan.textContent = totalCalories + "kcal";
    totalFatSpan.textContent = totalFat + "g";
    totalProteinSpan.textContent = totalProtein + "g";
    totalCarbsSpan.textContent = totalCarbs + "g";
  }
  
  // Function to calculate the total for a specific category and nutrient
  function calculateTotal(category, nutrient) {
    const selectedButtons = document.querySelectorAll(".food-buttons button.selected");
    let total = 0;
  
    selectedButtons.forEach((button) => {
      total += parseInt(button.getAttribute("data-" + nutrient));
    });
  
    return total;
  }
  
  // Function to update the indicators based on selected food items
  function updateIndicators(category) {
    const totalFat = calculateTotal(category, "fat");
    const totalProtein = calculateTotal(category, "protein");
    const totalCarbs = calculateTotal(category, "carbs");
    const totalCalories = calculateTotal(category, "calories");
  
    const fatBox = document.querySelector(".fat-box");
    const proteinBox = document.querySelector(".protein-box");
    const carbsBox = document.querySelector(".carbs-box");
    const caloriesBox = document.querySelector(".calories-box");
  
    const goodFat = 50;
    const goodProtein = 50;
    const goodCarbs = 100;
    const goodCalories = 2500;
  
    updateIndicator(fatBox, totalFat, goodFat);
    updateIndicator(proteinBox, totalProtein, goodProtein);
    updateIndicator(carbsBox, totalCarbs, goodCarbs);
    updateIndicator(caloriesBox, totalCalories, goodCalories);
  }
  
  function updateIndicator(box, total, goodValue) {
    const indicator = box.querySelector(".indicator");
    const difference = total - goodValue;
  
    // indicator.textContent = total + "g";
  
    if (difference < 0) {
      indicator.classList.remove("moderate", "high");
      indicator.classList.add("good");
    } else if (difference <= goodValue * 0.25) {
      indicator.classList.remove("good", "high");
      indicator.classList.add("moderate");
    } else {
      indicator.classList.remove("good", "moderate");
      indicator.classList.add("high");
    }
  }

// Function to update the indicators and display selected items
function updateIndicatorsAndSelectedItems(category) {
  updateIndicators(category);

  const selectedButtons = document.querySelectorAll(".food-buttons button.selected");
  const selectedItemsDiv = document.getElementById("selectedItems");
  selectedItemsDiv.innerHTML = "";

  if (selectedButtons.length > 0) {
    const heading = document.createElement("h3");
    heading.textContent = "Selected Items:";
    selectedItemsDiv.appendChild(heading);
  }

  selectedButtons.forEach((button) => {
    const itemName = button.getAttribute("data-name");
    const itemDiv = document.createElement("div");
    itemDiv.textContent = itemName;
    selectedItemsDiv.appendChild(itemDiv);
  });
}

// Show the default category (breakfast) when the page loads
showCategory("breakfast");