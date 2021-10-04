const addMovieModal = document.getElementById('add-modal');
const startAddMovieButton = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input');

////Functions
const toggleMovieModal = () => {
  //   addMovieModal.className = 'modal card';
  addMovieModal.classList.toggle('visible'); //adds/remove ".visible" to the class of element with ID: 'add-modal'
  toggleBackdrop();
};

const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
};

const backdropClickHandler = () => {
  toggleBackdrop();
};

const cancelAddMovieHandler = () => {
  toggleBackdrop();
};

const addMovieHandler = () => {
  //   const titleInput = document.getElementById('title');
  //   const urlInput = document.getElementById('image-url');
  //   const ratingInput = document.getElementById('rating');
  //   let ratingValue = ratingInput.value;

  //   if (ratingValue < ratingInput.min || ratingValue > ratingInput.max) {
  //     alert('You did not enter a proper rating!');
  //   } else {
  //     alert(`${ratingValue}`);
  //   }
  //
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === '' ||
    imageUrlValue.trim() === '' ||
    ratingValue.trim() === '' ||
    ratingValue < 1 ||
    ratingValue > 5
  ) {
    alert('Please enter valid values!');
  } else {
      alert('Noice!');
  }
};

startAddMovieButton.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler);
