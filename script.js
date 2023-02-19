const articlesLink = document.querySelector('.menu li:nth-of-type(2) a');
const dropdown = document.querySelector('.dropdown');

articlesLink.addEventListener('mouseenter', function() {
  dropdown.style.display = 'block';
});

articlesLink.addEventListener('mouseleave', function() {
  dropdown.style.display = 'none';
});