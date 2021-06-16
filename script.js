//console.log(document)
//console.log(document.getElementById("total").innerHTML)
var btnsAddTag = document.getElementsByClassName("plus");
for (var i = 0; i < btnsAddTag.length; i++) {
    btnsAddTag[i].addEventListener("click", increment);
}
function increment(event) {
    var btnPlus = event.target;
    var divel = btnPlus.parentElement;
    var quantityTag = divel.querySelector("p");
    var quantity = Number(quantityTag.innerHTML);
    quantity++;
    quantityTag.innerHTML = quantity;
    var priceTag = divel.parentElement.parentElement.querySelector(".price");
    var UnitpriceTag = divel.parentElement.parentElement.querySelector(".unitPrice");
    var Unitprice = Number(UnitpriceTag.innerHTML);
    var price = Unitprice * quantity
    priceTag.innerHTML = price;
}
var checkTag = document.getElementsByClassName("check")
for (var i = 0; i < checkTag.length; i++) {
    checkTag[i].addEventListener("click", totalPrice);
}
function totalPrice(event) {
    var checktag = event.target; console.log(checkTag)
    var priceTag = checktag.parentElement.parentElement.querySelector(".price");
    var btnplus = checktag.parentElement.parentElement.querySelector(".plus");
    var btnminus = checktag.parentElement.parentElement.querySelector(".minus");
    var price = Number(priceTag.innerHTML);
    var totalTag = document.getElementById("total")
    var total = Number(totalTag.innerHTML)
    if (checktag.checked === true) {
        total += price;
        btnplus.setAttribute("disabled", true);
        btnminus.setAttribute("disabled", true);
    }
    else {
        total -= price;
        btnplus.removeAttribute("disabled");
        btnminus.removeAttribute("disabled");
    }

    totalTag.innerHTML = total
}
var btnsMinusTag = document.getElementsByClassName("minus");
for (var i = 0; i < btnsMinusTag.length; i++) {
    btnsMinusTag[i].addEventListener("click", decrease);
}

function decrease(event) {
    var btnMinus = event.target;
    var divel = btnMinus.parentElement;
    var quantityTag = divel.querySelector("p");
    var quantity = Number(quantityTag.innerHTML);
    if (quantity > 0) { quantity--; }
    quantityTag.innerHTML = quantity;
    var priceTag = divel.parentElement.parentElement.querySelector(".price");
    var UnitpriceTag = divel.parentElement.parentElement.querySelector(".unitPrice");
    var Unitprice = Number(UnitpriceTag.innerHTML);
    var price = Unitprice * quantity
    priceTag.innerHTML = price;
}

var btnsDeleteTag = document.getElementsByClassName("delete");
for (var i = 0; i < btnsDeleteTag.length; i++) {
    btnsDeleteTag[i].addEventListener("click", deleteItem);
}

function deleteItem(event) {
    var btnDelete = event.target;
    var trTag = btnDelete.parentElement.parentElement.parentElement.parentElement;
    var parentTr = document.querySelector("tbody");
    console.log(trTag)
    console.log(parentTr)
    parentTr.removeChild(trTag);
}

var btnsLikeTag = document.getElementsByClassName("like");
for (var i = 0; i < btnsLikeTag.length; i++) {
    btnsLikeTag[i].addEventListener("click", likeItem);
}

function likeItem(event) {
    console.log(event)
    btnLike = event.target;
    console.log(btnLike)
    if (btnLike.style.color === 'red')
        btnLike.style.color = 'black';
    else btnLike.style.color = 'red';
}