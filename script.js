/***** This Function Opens/Closes Menu Bar *****/

const menu = document.querySelector('.mobile-menu img')
const nav = document.querySelector('#nav')

menu.addEventListener('click', () => {
    nav.classList.toggle('active');
})


/****** This Functions Opens/Closes Help Section Containers And Turning Around Icons ******/

const items = document.querySelectorAll('.accordion-container .accordion-item');

items.forEach(item => {
    const trigger = item.querySelector('.accordion-header');

    trigger.addEventListener('click', () => {
        trigger.nextElementSibling.classList.toggle('active');
        trigger.lastElementChild.classList.toggle('active');
    });
});


/*** This Function Hover/Unhover Food List Cards */

const cards = document.querySelectorAll('.card');

for (const card of cards) {
    card.addEventListener('mouseover', () => {
        card.classList.remove('unhovered');
        card.classList.toggle('hovered');
    })

    card.addEventListener('mouseout', () => {
        card.classList.remove('hovered');
        card.classList.toggle('unhovered');
        
    })
}


/*** This Function Rotates Button And After That Goes To Food Detail Page ****/

const btn = document.querySelectorAll('.card .btn');

for (const buttons of btn) {
    buttons.addEventListener('click', (e) => {
        const foodName = e.currentTarget.getAttribute('attribute')
        buttons.classList.toggle('clicked');
        setTimeout(() => {
            window.location.href = `${foodName}.html`
        }, 1000);
    })
}












