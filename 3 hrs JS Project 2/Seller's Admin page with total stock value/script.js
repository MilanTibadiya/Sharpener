//get ele by id

const submit = document.getElementById("submit");

//add eventListerner
submit.addEventListener("click", (e) => {
    e.preventDefault();
    const sellerPrice = document.getElementById("sellerPrice").value;
    const productName = document.getElementById("productName").value;
    // console.log(sellerPrice+'--->'+productName)

    const obj = {
        sellerPrice,
        productName
    }
    //store in crudAPI
    axios.post("https://crudcrud.com/api/57d60068617d4bdfae0a7951fa750837/Product", obj)
    .then((response) => {
        showProductOnScreen(response.data)
    })
    .catch((err)=> {
        console.log(err)
    })
})

//lets DOM
window.addEventListener('DOMContentLoaded', () => {
    axios.get("https://crudcrud.com/api/57d60068617d4bdfae0a7951fa750837/Product")
    .then((response) => {
        for(var i=0; i<response.data.length; i++){
            showProductOnScreen(response.data[i])
        }
    })
    .catch((err) => {
        console.log(err)
    })
})

//show Pdocuct details on screen
function showProductOnScreen(Product){
    const ParentNode = document.getElementById("items");
    const childNode = `<li class="list-group-item" id="${Product._id}">${Product.sellerPrice}    -    ${Product.productName}
                     <button type="button" class="btn btn-danger mx-5" onclick=deleteProduct('${Product._id}')>Delete Product</button>   
                     </li>`

    ParentNode.innerHTML += childNode; 
    sum();
}

//(Total Value Worth of Products :Rs ${value})
function sum(){
    var sallerPrice =0 ;

    axios.get("https://crudcrud.com/api/57d60068617d4bdfae0a7951fa750837/Product")
    .then((response) => {
        for(var i=0; i<response.data.length; i++){
            sallerPrice+=+response.data[i].sellerPrice
        }
        document.getElementById("span").innerHTML = `Rs ${sallerPrice}`;
    })
    .catch((err) => {
        console.log(err)
    })
}
sum();
//delete function
function deleteProduct(ProductId){ 
    // console.log(ProductId)
    axios.delete(`https://crudcrud.com/api/57d60068617d4bdfae0a7951fa750837/Product/${ProductId}`)
    .then((response) => {
        removeProductFromScreen(ProductId)
        sum();
    })
    .catch((err) => {
        console.log(err)
    })

}

//remmove from screen
function removeProductFromScreen(ProductId){
    const ParentNode = document.getElementById("items");
    const childNode = document.getElementById(ProductId);

    if(childNode){
        ParentNode.removeChild(childNode);
    }
}