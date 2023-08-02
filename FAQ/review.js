document.getElementById("review-form").addEventListener("submit", function(event) {
    event.preventDefault();

    
    const userName = document.getElementById("user-name").value;
    const userComment = document.getElementById("user-comment").value;
    const userRating = document.getElementById("user-rating").value;
    
    const reviewsContainer = document.querySelector(".reviews-container");
    const newReview = document.createElement("div");
    newReview.classList.add("review");
    
    const nameElement = document.createElement("p");
    nameElement.classList.add("name");
    nameElement.textContent = userName;
    
    const ratingElement = document.createElement("p");
    ratingElement.classList.add("rating");
    ratingElement.textContent = "★".repeat(userRating);
    
    const commentElement = document.createElement("p");
    commentElement.classList.add("comment");
    commentElement.textContent = userComment;
    
    newReview.appendChild(nameElement);
    newReview.appendChild(ratingElement);
    newReview.appendChild(commentElement);
    
    reviewsContainer.appendChild(newReview);
    
    // Clear form inputs after submitting
    document.getElementById("user-name").value = "";
    document.getElementById("user-comment").value = "";
    document.getElementById("user-rating").value = "1";
    
    document.getElementById('header-text-bg1').style.width=document.getElementById('header-text1').offsetWidth+'px'
    document.getElementById('header-text-bg1').style.top=document.getElementById('header-text1').offsetTop+parseFloat(window.getComputedStyle(document.getElementById('header-text1')).fontSize)/1.5+'px'
    document.getElementById('header-text-bg1').style.left=document.getElementById('header-text1').offsetLeft+'px'
    document.getElementById('header-text-bg1').style.height=parseFloat(window.getComputedStyle(document.getElementById('header-text1')).fontSize)/2+'px'
});
window.onload=window.onresize=()=>{
    //setting how-to-text and its bg
    console.log("hi");
        // document.getElementById('how-to-bg').style.width=document.getElementById('how-to').offsetWidth+'px'
        // document.getElementById('how-to-bg').style.top=document.getElementById('how-to').offsetTop+parseFloat(window.getComputedStyle(document.getElementById('how-to')).fontSize)/1.5+'px'
        // document.getElementById('how-to-bg').style.left=document.getElementById('how-to').offsetLeft+'px'
        // document.getElementById('how-to-bg').style.height=parseFloat(window.getComputedStyle(document.getElementById('how-to')).fontSize)/1.5+'px'
        
        //setting header-text and its bg
        document.getElementById('header-text2-bg').style.width=document.getElementById('header-text2').offsetWidth+'px'
        document.getElementById('header-text2-bg').style.top=document.getElementById('header-text2').offsetTop+parseFloat(window.getComputedStyle(document.getElementById('header-text2')).fontSize)/1.5+'px'
        document.getElementById('header-text2-bg').style.left=document.getElementById('header-text2').offsetLeft+'px'
        document.getElementById('header-text2-bg').style.height=parseFloat(window.getComputedStyle(document.getElementById('header-text2')).fontSize)/2+'px'

        document.getElementById('header-text1-bg').style.width=document.getElementById('header-text1').offsetWidth+'px'
        document.getElementById('header-text1-bg').style.top=document.getElementById('header-text1').offsetTop+parseFloat(window.getComputedStyle(document.getElementById('header-text1')).fontSize)/1.5+'px'
        document.getElementById('header-text1-bg').style.left=document.getElementById('header-text1').offsetLeft+'px'
        document.getElementById('header-text1-bg').style.height=parseFloat(window.getComputedStyle(document.getElementById('header-text1')).fontSize)/2+'px'
}    