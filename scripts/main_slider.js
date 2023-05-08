const slidesContainer = document.querySelector('.slides-container');
const slides = document.querySelectorAll('.slide');
const pagination = document.querySelector('.pagination');

let currentSlide = 0;
const slideCount = slides.length;

// Создаем кнопки для пагинации
for (let i = 0; i < slideCount; i++) {
  const button = document.createElement('button');
  button.addEventListener('click', () => {
    goToSlide(i);
  });
  pagination.appendChild(button);
}

// Переход к нужному слайду
function goToSlide(slideIndex) {
  currentSlide = slideIndex;
  const translateValue = `translateY(-${currentSlide * 100}%)`;
  slidesContainer.style.transform = translateValue;
  updatePagination();
}

// Обновление активной кнопки пагинации
function updatePagination() {
  const buttons = pagination.querySelectorAll('button');
  buttons.forEach((button, index) => {
    if (index === currentSlide) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
}

// Автоматический переход к следующему слайду
setInterval(() => {
  currentSlide++;
  if (currentSlide === slideCount) {
    currentSlide = 0;
  }
  goToSlide(currentSlide);
}, 5000);
