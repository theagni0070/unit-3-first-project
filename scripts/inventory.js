// this will redirect the user to index page
document.querySelector("#add_more_product").addEventListener("click", redirect)
function redirect() {
    window.location.href = "index.html"
}

// this is the data added by index page 
let data = JSON.parse(localStorage.getItem("products"))
 

// this function append the products to the inventory page
function displayData (data) {

    document.querySelector("#all_products").innerHTML = null

    data.forEach(function (elem){
        let div = document.createElement("div")

        let img = document.createElement("img")
        img.src = elem.image
        
        let type = document.createElement("h3")
        type.innerText = elem.type

        let desc = document.createElement("p")
        desc.innerText = elem.desc

        let price = document.createElement("h4")
        price.innerText = elem.price

        let btn = document.createElement("button")
        btn.innerText = "REMOVE"
        btn.addEventListener("click", function (){
            remove(elem)
        })

        div.append(img,type,desc,price,btn)
        document.querySelector("#all_products").append(div)
    })
}

displayData(data)

function remove(elem) {
    data = data.filter(function(element){
        return elem!==element
    })
    localStorage.setItem("products", JSON.stringify(data))
    displayData(data)
}

