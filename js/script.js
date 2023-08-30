const createForm = document.getElementById("create-element-form");

formElement.addEvenListerner("submit", (event) => {
    event.preventDefault();
    let productImage = document.getElementById("ProductImage").value;
    let productName = document.getElementById("productName").value;
    let productPrice = document.getElementById("ProductPrice").value;
    let productDetail = document.getElementById("ProductDetail").value;
    let transaction = { productImage : productImage, productName : productName, productPrice : productPrice, productDetail :productDetail };
    let transactionJson = JSON.stringify(transaction); //we are going to save this in the backend

});