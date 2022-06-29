var items = document.querySelectorAll(".items li");
var div = document.querySelector(".yourChoice");
var btn = document.querySelector("#computePriceBtn");
var totalPrice = 0;
var priceText = document.querySelector(".realPrice");
var totalPriceShow = document.querySelector(".totalPriceShow");



items.forEach(element => {
    element.addEventListener("click",(item)=>{
        div.innerHTML += "<li>"+element.innerHTML+"</li>" + "   ";
        
        if(div.innerHTML != ""){
            totalPriceShow.style.display="block";
        } 
    
      totalPrice += +(element.getAttribute("price"))
      priceText.innerHTML = totalPrice
    })   
});

// priceText.innerHTML = totalPrice
btn.addEventListener("click" , ()=>{
        div.innerHTML = "";
        totalPrice = 0;
        priceText.innerHTML =totalPrice
        totalPriceShow.style.display="none";
})