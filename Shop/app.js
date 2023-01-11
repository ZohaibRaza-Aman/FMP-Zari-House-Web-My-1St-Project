var product_total_amt = document.getElementById('product_total_amt');
var shipping_charge = document.getElementById('shipping_charge');
var total_cart_amt = document.getElementById('total_cart_amt');

const decreaseNumber = (incdec,itemprice)=>{
    var itemval = document.getElementById(incdec);
    var itemprice = document.getElementById(itemprice);
    
    
    if(itemval.value < 1){
        itemval.value = 0;
        alert('Negative quantity not allowed')
    }else{
        itemval.value = parseInt(itemval.value) - 1;
        itemval.style.background = '#fff';
        itemval.style.color = '#000';
        // product price decrease
        itemprice.innerHTML = parseInt(itemprice.innerHTML) - 80000;
        product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML) - 80000;

        total_cart_amt.innerHTML = parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML);
    }
}

const increaseNumber = (incdec,itemprice)=>{
    var itemval = document.getElementById(incdec);
    var itemprice = document.getElementById(itemprice);
    
    
    if(itemval.value > 4){
        itemval.value = 5;
        alert('max 5 allowed');
        itemval.style.background = 'red';
        itemval.style.color = '#fff';
    }else{
        itemval.value = parseInt(itemval.value) + 1;
        // product price increase
        itemprice.innerHTML = parseInt(itemprice.innerHTML) + 80000;
        product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML) + 80000;
        total_cart_amt.innerHTML = parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML);
    }
}