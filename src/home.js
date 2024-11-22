import logoImage from ".//images/fakelogo.jpg";
   
const logo = document.createElement("img");
logo.src = logoImage;
logo.classList.add("logo");

export function home(){
    const mainCont = document.createElement("div");
    mainCont.classList.add("main-container");

    const heading = document.createElement("div");
    heading.classList.add("heading");
    heading.textContent = "Welcome to the RESTAURANT!";

    const quoteCont = document.createElement('div');
    quoteCont.classList.add("quote-container");

    const description = document.createElement('div');
    description.classList.add("quote");
    description.textContent = "The best restaurant I've ever been to. I love the GENERIC FOOD ITEM they serve and NAME OF WAITER is always so nice to me!";

    const author = document.createElement('div');
    author.classList.add("author");
    author.textContent = "~ A real customer";



    quoteCont.appendChild(description);
    quoteCont.appendChild(author);

    mainCont.appendChild(logo);
    mainCont.appendChild(heading);
    mainCont.appendChild(quoteCont);



    return mainCont;

}

