export function menu(){
    const menu = document.createElement('div');
    menu.classList.add('menu');

    menu.appendChild(createItem("Cheese Sticks", "Frozen mozarella cheese in stick form", '$100'));

    menu.appendChild(createItem("Bread", "Bread from the local supermarket, but we sell it now", '$73'));

    menu.appendChild(createItem("Soup of the day", "It's a mystery.", "$3"));



    return menu;
}

function createItem (item, itemDescription, itemPrice) {

    const sectCont = document.createElement('div');
    sectCont.classList.add('item-cont');

    const descCont = document.createElement('div');
    descCont.classList.add('desc-cont');

    const sectHead = document.createElement('div');
    sectHead.classList.add("menuItem");
    sectHead.textContent = item;

    const sectText = document.createElement('div');
    sectText.classList.add("itemDescription");
    sectText.textContent = itemDescription;

    const price = document.createElement('div');
    price.classList.add("itemDescription");
    price.textContent = itemPrice;

    sectCont.appendChild(sectHead);

    descCont.appendChild(sectText);
    descCont.appendChild(price);

    sectCont.appendChild(descCont);

    return sectCont;
}