import {home} from "./home.js"
import {menu} from "./menu.js"
import {about} from "./about.js"

import ".//styles.css/home.css"
import ".//styles.css/main.css"

const container = document.querySelector('#content');

const buttons = document.querySelectorAll('.option');

function handleError() {
    const errorElement = document.createElement("h1");
    errorElement.textContent = "Something went wrong!";
    return errorElement;
}

container.appendChild(home());

function renderContent(pageId) {
    container.innerHTML = ''; // Clear previous content
  
    switch (pageId) {
      case "home-page":
        container.appendChild(home());
        break;
      case "menu-page":
        container.appendChild(menu());
        break;
      case "about-page":
        container.appendChild(about());
        break;
      default:
        container.appendChild(handleError());
    }
  }
  
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const pageId = button.id; // Use button.id directly for clarity
      renderContent(pageId);
    });
  });


