document.querySelectorAll(".cardProduct").forEach(function (element) {
    element.addEventListener('click', function (e) {
        var dataID = element.getAttribute('data-id');
        if (e.target.classList.contains('cardAdd')) {   
            addToCart(dataID);    
        }
        if (e.target.classList.contains('cardRemove')) {   
            removeFromCart(dataID);    
        }
    });
});



function addToCart(id) {
   alert("add to cart" + id)

}


function removeFromCart(id) {
    alert("remove to cart" + id)
}