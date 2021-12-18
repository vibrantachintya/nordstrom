var object= JSON.parse(localStorage.getItem('this_product'));
console.log( object)
for(var i in object){
var image1 =document.createElement('img');
if(i =='imgUrl'){
image1.setAttribute('src',object[i]);
image1.setAttribute('id','image1');
}
var image2 = document.createElement('img');
if(i =='imgUrl2'){
image2.setAttribute('src',object[i]);
image2.setAttribute('id','image2');
}
var image3 =document.createElement('img');
if(i =='imgUrl3'){
image3.setAttribute('src',object[i]);
image3.setAttribute('id','image3');
}
var image4 =document.createElement('img');
if(i =='imgUrl4'){
image4.setAttribute('src',object[i]);
image4.setAttribute('id','image4');
}
document.querySelector('#img1').append(image1);
document.querySelector('#img2').append(image2);
document.querySelector('#img3').append(image3);
document.querySelector('#img4').append(image4);
if(i =='name'){
    document.querySelector('#product_name').textContent=object[i];
}
if(i =='brand'){
    document.querySelector('#brand_name').textContent=object[i];
}
if(i =='price'){
    document.querySelector('#product_price').textContent= object[i];
}
};
document.querySelector('#button').addEventListener('click',add_to_cart);
var cart = JSON.parse(localStorage.getItem('bag')) || [];
function add_to_cart(){
var item_image= document.querySelector('#image1').src;
 var item_name= document.querySelector('#product_name').textContent;
 var item_brand= document.querySelector('#brand_name').textContent;
 var item_price= +document.querySelector('#product_price').textContent;
 var item_size=document.querySelector('#size').value;
 var item_color=document.querySelector('#color').value;
 var obj={
     image:item_image,
     name:item_name,
     brand:item_brand,
     price:item_price,
     size:item_size,
     color:item_color
 }
 
 cart.push(obj);
 localStorage.setItem("bag",JSON.stringify(cart));
}

