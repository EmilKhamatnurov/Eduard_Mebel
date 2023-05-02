const slider = document.querySelector('.slider');
const slides = slider.querySelectorAll('.slide');
const paginationBtns = document.querySelectorAll('.pagination-btn');

let currentIndex = 0;

function goToSlide(index) {
  slider.style.transform = `translateY(-${index * 100}%)`;
  currentIndex = index;

  // Update active pagination button
  paginationBtns.forEach(btn => btn.classList.remove('active'));
  paginationBtns[index].classList.add('active');
}

paginationBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const index = parseInt(btn.dataset.index);
    goToSlide(index);
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(autoSlide, 5000);
  });
});

function autoSlide() {
  const nextIndex = (currentIndex + 1) % slides.length;
  goToSlide(nextIndex);
}

let autoSlideInterval = setInterval(autoSlide, 5000);
