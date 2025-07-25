document.addEventListener('DOMContentLoaded', () => {
initializeGoToTop();
});
function initializeGoToTop() {
const goToTopLink = document.getElementById('go-to-top'); // this is the CSS ID to use
if (goToTopLink) {
goToTopLink.addEventListener('click', (event) => {
event.preventDefault();
window.scrollTo({ top: 0, behavior: 'smooth' });
history.pushState("", document.title, window.location.pathname + window.location.search);
});
}}
