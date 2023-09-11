// create.html

let submit = document.querySelector('#submitCreate');

submit.addEventListener('click', function(){
    let productImage = document.querySelector('#productImage');
    let productName = document.querySelector('#productName');
    let productPrice = document.querySelector('#productPrice');
    let productDetail = document.querySelector('#productDetail');

    window.location.href = `adding/${productImage}/${productName.value}/${productPrice.value}/${productDetail.value}`;

});

//     let productImage = document.querySelector('#productImage');
//     let productName = document.querySelector('#productName');
//     let productPrice = document.querySelector('#productPrice');
//     let productDetail = document.querySelector('#productDetail');
//     let submit = document.querySelector('#submitCreate');

// submit.addEventListener('click', function(){
//     window.location.href = `adding/${productImage.value}/${productName.value}/${productPrice.value}/${productDetail.value}`;
// });


// const formElement = document.getElementById("create-element-form");

// formElement.addEventListener("submit", (event) => {
//     event.preventDefault();
//     let productImage = document.getElementById("productImage");
//     let productName = document.getElementById("productName").value;
//     let productPrice = document.getElementById("productPrice").value;
//     let productDetail = document.getElementById("productDetail").value;
//     let transaction = { productImage : productImage, productName : productName, productPrice : productPrice, productDetail :productDetail };
//     let transactionJson = JSON.stringify(transaction); //we are going to save this in the backend
//     fetch('http://localhost:3000/api/create', {
//         method : 'Post',
//         body: transactionJson
//     }); //to this url 'http://localhost:3000/api/create' send a post with this body ransactionJson
// });
