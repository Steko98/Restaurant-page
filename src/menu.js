import img from "./assets/hero-img.jpg"

const content = document.getElementById("content")

let starters = [
    { name: "Hummus", price: 6, ingredients: ["hummus", "naan bread"] },
    { name: "Hoisin duck spring rolls", price: 8, ingredients: ["duck thighs", "chinese cabbage", "sweet chilli sauce"] },
    { name: "Gyoza", price: 8, ingredients: ["pork gyoza", "cabbage", "shitake", "gyoza sauce"] },
    { name: "Beef rendang tapas style", price: 8, ingredients: ["crispy chicken skin", "beef curry", "coconut tuile", "quail egg"] },
    { name: "Tahini aubergine", price: 7, ingredients: ["marinated aubergine in tempura", "green tahini sauce"] },
]

let main = [
    { name: "Buddha bowl", price: 15, ingredients: ["tofu", "spinach", "pickled ginger", "kimchi", "avocado", "sushi rice"] },
    { name: "Sea bowl", price: 17, ingredients: ["tempura crab", "shrimp", "spicy surimi", "sushi rice", "avocado", "green onion"] },
    { name: "Tuna poke", price: 17, ingredients: ["marinated tuna akami", "avocado", "cucumber", "cherry tomato", "mango", "pickled daikon and ginger"] },
    { name: "Belly bowl", price: 13, ingredients: ["pork belly", "sushi rice", "teriyaki sauce", "cherry tomato", "coleslaw salad"] },
    { name: "Katsu chicken", price: 13, ingredients: ["fried chicken breast", "coleslaw salad", "cucumber", "tonkatsu sauce", "hazelnuts", "sushu rice"] },
    { name: "Tonkatsku tenderloin", price: 16, ingredients: ["pork tenderloin with cheddar", "granny smith and miso", "sushi rice"] },
    { name: "Chicken tikki masala", price: 17, ingredients: ["chicken thighs", "naan bread", "rice"] },
    { name: "Tonkotsu ramen", price: 15, ingredients: ["pork belly", "noodles", "egg", "daikon", "spinach"] },
];

let desserts = [
    { name: "Sticky rice", price: 5, ingredients: ["basmati rice", "coconut", "chocolate", "berries"] },
    { name: "Chocolate cake", price: 7, ingredients: ["chocolate", "coconut", "vanilla ice cream"] },
    { name: "Dorayaki", price: 5, ingredients: ["honey pancakes", "anko"] },
    { name: "Mochi", price: 5, ingredients: ["rice paste", "chocolate"] },
    { name: "Mitarashi dango", price: 7, ingredients: ["rice dumplings", "sweet soy sauce"] },
]


let loadMenu = function () {
    const imageCell = document.createElement("div")
    imageCell.setAttribute("id", "menu-img")

    const menuImg = document.createElement("img")
    menuImg.src = img;
    menuImg.setAttribute("alt", "some other food");
    imageCell.appendChild(menuImg)

    const menu = document.createElement("div");
    menu.setAttribute("id", "menu")


    const startersUl = document.createElement("ul")
    const startersHeader = document.createElement("h4")
    startersHeader.textContent = "Starters"
    startersUl.appendChild(startersHeader)

    starters.forEach(item => {
        let liItem = document.createElement("li")
        liItem.textContent = item.name;
        let ingredientsList = document.createElement("p")
        ingredientsList.textContent = item.ingredients.join(", ");
        liItem.appendChild(ingredientsList)
        let itemPrice = document.createElement("p")
        itemPrice.textContent = `${item.price}$`
        liItem.appendChild(itemPrice)
        startersUl.appendChild(liItem)
    })

    menu.appendChild(startersUl)

    const mainUl = document.createElement("ul")
    const mainHeader = document.createElement("h4")
    mainHeader.textContent = "Main courses"
    mainUl.appendChild(mainHeader)

    main.forEach(item => {
        let liItem = document.createElement("li")
        liItem.textContent = item.name;
        let ingredientsList = document.createElement("p")
        ingredientsList.textContent = item.ingredients.join(", ");
        liItem.appendChild(ingredientsList)
        let itemPrice = document.createElement("p")
        itemPrice.textContent = `${item.price}$`
        liItem.appendChild(itemPrice)
        mainUl.appendChild(liItem)
    })

    menu.appendChild(mainUl)

    const dessertsUl = document.createElement("ul")
    const dessertsHeader = document.createElement("h4")
    dessertsHeader.textContent = "Desserts"
    dessertsUl.appendChild(dessertsHeader)

    desserts.forEach(item => {
        let liItem = document.createElement("li")
        liItem.textContent = item.name;
        let ingredientsList = document.createElement("p")
        ingredientsList.textContent = item.ingredients.join(", ");
        liItem.appendChild(ingredientsList)
        let itemPrice = document.createElement("p")
        itemPrice.textContent = `${item.price}$`
        liItem.appendChild(itemPrice)
        dessertsUl.appendChild(liItem)
    })

    menu.appendChild(dessertsUl)


    content.appendChild(imageCell)
    content.appendChild(menu)

    return
}

export { loadMenu };