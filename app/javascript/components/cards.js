function rotateCards() {
  const cards = document.querySelectorAll('.friends-card');


  cards.forEach((card) => {


    // const frontArrow = card.querySelector('.friends-card-front-arrow');
    const frontArrow = card.querySelector('.friends-card-front-main-info');

    const backArrow = card.querySelector('.friends-card-back-arrow');


    const front = card.querySelector('.friends-card-front');
    const back = card.querySelector('.friends-card-back');


    if (frontArrow) {
      frontArrow.addEventListener('click', (event) => {
      console.log('worked')
        card.classList.toggle('flipped');
        card.classList.remove('front-shadow');
        card.classList.add('back-shadow');
        front.classList.add('hide');
        back.classList.remove('hide');
      });
    }
    if (backArrow) {
      backArrow.addEventListener('click', (event) => {
      console.log('worked')
        card.classList.toggle('flipped');
        card.classList.remove('back-shadow');
        card.classList.add('front-shadow');
        back.classList.add('hide');
        front.classList.remove('hide');
      });
    }
  })

}

function extendCornerButton() {
  const cards = document.querySelectorAll('.friends-card');
  cards.forEach((card) => {
    const cornerButton = card.querySelector('.friends-card-corner-button');
    const frontMainInfo = card.querySelector('.friends-card-front-main-info');
    const buttonContent = card.querySelector('.friends-card-hazard-warnings');


    if (cornerButton) {
    cornerButton.addEventListener('click', (event) => {
      event.currentTarget.classList.toggle('friends-card-big-corner-button');
      frontMainInfo.classList.toggle('hidden');
      buttonContent.classList.toggle('hidden');
    });
    }
  })

}

function clickOnButtonArrowToEditAndDelete() {
  const cards = document.querySelectorAll('.joke-card');

  cards.forEach((card) => {
    const menuArrow = card.querySelector('.arrow');
    const edit = card.querySelector('.edit');
    const destroy = card.querySelector('.delete');
    if (menuArrow) {
      menuArrow.addEventListener('click', (event) => {
        event.currentTarget.classList.toggle('arrow-flipped');
        edit.classList.toggle('edit-appears');
        destroy.classList.toggle('delete-appears');

  });
    }
  });
}

function mouseoverEditAndDelete() {
  const cards = document.querySelectorAll('.joke-card');  // gets all the cards (an array), I don't know what class are you using

  cards.forEach((card) => {
    const edit = card.querySelector('.edit');
    const destroy = card.querySelector('.delete');
    const editText = card.querySelector('.edit-text');
    const deleteText = card.querySelector('.delete-text');
    if (edit && destroy) {
      edit.addEventListener('mouseout', (event) => {
        editText.classList.toggle('edit-mouseover');
      });

      destroy.addEventListener('mouseout', (event) => {
        deleteText.classList.toggle('delete-mouseover');
      });
    }
  });

}

export { clickOnButtonArrowToEditAndDelete };

export { mouseoverEditAndDelete };

export { extendCornerButton };

export { rotateCards };

