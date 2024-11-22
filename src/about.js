export function about(){
    const aboutCont = document.createElement('div');
    aboutCont.classList.add('about-container');

    const story = "Our Story:";
    const storyText = "For thousands of years, we have been searching for the best food for the best people. Finally, we've found it. It's food."

    aboutCont.appendChild(createSection(story, storyText));

    const owner = "Who we are:";
    const ownerText = "Our owner, Chef Chefsley, has been a renowned culinary genius."

    aboutCont.appendChild(createSection(owner, ownerText));

    return aboutCont;
}

function createSection (head, text) {
    const sectCont = document.createElement('div');
    sectCont.classList.add('section-container');

    const sectHead = document.createElement('div');
    sectHead.classList.add("sectHeader");
    sectHead.textContent = head;

    const sectText = document.createElement('div');
    sectText.classList.add("sectText");
    sectText.textContent = text;

    sectCont.appendChild(sectHead);
    sectCont.appendChild(sectText);

    return sectCont;
}