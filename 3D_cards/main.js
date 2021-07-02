let cards = document.querySelectorAll('.card');


for (let i = 0; i < cards.length; i++) {
    let card = cards[i];
    card.addEventListener('mousemove', startRotate);
    card.addEventListener('mouseout', stopRotate);
}

function startRotate(event) {
    let cardItem = this.querySelector('.card-item');
    let halfHeight = cardItem.offsetHeight/2;
    let halfWidth = cardItem.offsetWidth/2
    // cardItem.innerText = event.offsetX + ' ' + event.offsetY;
    cardItem.style.transform = 'rotateX('+-(event.offsetY - halfHeight)/5+'deg) rotateY(' + (event.offsetX - halfWidth) / 5 + 'deg)'
}

function stopRotate(event) {
    let cardItem = this.querySelector('.card-item');
    cardItem.style.transform = 'rotate(0)';
}