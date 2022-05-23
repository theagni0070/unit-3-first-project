//store the products array in localstorage as "products"
let pArray = JSON.parse(localStorage.getItem("products")) || []

// Constructor Function to add objcts as many as user wants
function Objectcreate (t,d,p,i){
    this.type = t
    this.desc = d
    this.price = p
    this.image =  i
}

// function to add the data to local storage by using constructor function
function Productdata() {
    event.preventDefault()
    let form = document.querySelector("form")
    let type = form.type.value
    let desc = form.desc.value
    let price = form.price.value
    let image = form.image.value

    let p1 = new Objectcreate(type,desc,price,image)

    pArray.push(p1)
    localStorage.setItem("products", JSON.stringify(pArray))
    window.location.reload()
    console.log(pArray)
}


// this function will redirect the user to inventory page 
document.querySelector("#show_products").addEventListener("click",show_products)
function show_products() {
    window.location.href = "inventory.html"
}
