const menuButton = document.querySelector('#dropdown-button');
const dropdown = document.querySelector('.dropdown');


function toggleClass(element) {
    element.classList.toggle('visible');
}

function showDropdown(eventEle, toggleEle) {

    eventEle.addEventListener('click', (e) => {
        toggleClass(toggleEle);
        e.stopPropagation();
    });

    // toggleEle.addEventListener('mouseover', () => {
    //     if (toggleEle.classList.includes('.visible')) {
    //         toggleEle.style.opacity = '1';
    //     }
    // });      
}

showDropdown(menuButton, dropdown);