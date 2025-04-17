const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const sumAll = document.querySelector('.sum-all')
const buttonVegan = document.querySelector('.filter-vegan')
const buttonShowDrinks = document.querySelector('.show-drinks')

function formatCurrency(value) {
    const newValue = value.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
    });
    return newValue
}
function showDrinks() {
    let myLi = ''
    
    productsArray.forEach((product) => {
        myLi +=`
        
        <li>
        <img src =${product.src}>
        <p>${product.name}</p> 
        <p class="item-price"> ${formatCurrency(product.price)}</p>
        </li>`   
      
    })

    list.innerHTML = myLi
}
function showAll(productsArray) {

    let myLi = ''

    productsArray.forEach((product) => {
        myLi += `
          <li>
                <img src =${product.src}>
                <p>${product.name}</p>
                <p class="item-price"> ${formatCurrency(product.price)}</p>
            </li>
            
        `
    })
    list.innerHTML = myLi

}

function mapAllItems() {
    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9,

    }))

    showAll(newPrices)
    console.log(newPrices)

}

function filterVegan() {
    const totalFilterVegan = menuOptions.filter((product) => product.vegan)

    showAll(totalFilterVegan)

}

function sumAllItens() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    list.innerHTML =

        `
          <li>
               <p> O valor total dos itens é ${formatCurrency(totalValue)}</p>
            </li>
            
        `
}


buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItems)
buttonVegan.addEventListener('click', filterVegan)
sumAll.addEventListener('click', sumAllItens)

