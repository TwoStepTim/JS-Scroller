const scroller = document.querySelector('.scroller');
const episodes = document.querySelector('.episodes');
const episodeItems = document.querySelectorAll('.episode');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');
const episodeWidth = episodeItems[0].offsetWidth;

let currentIndex = 0;

leftArrow.addEventListener('click', () => scrollEpisodes(-1));
rightArrow.addEventListener('click', () => scrollEpisodes(1));

function scrollEpisodes(direction) {
  currentIndex += direction;
  if (currentIndex < 0) {
    currentIndex = episodeItems.length - 1;
  } else if (currentIndex >= episodeItems.length) {
    currentIndex = 0;
  }
  const offset = -currentIndex * episodeWidth;
  episodes.style.transform = `translateX(${offset}px)`;
}
