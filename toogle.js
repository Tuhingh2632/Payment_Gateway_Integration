const toggleButton = document.getElementsByClassName('navbar-toggler')[0]
const navbarLinks = document.getElementsByClassName('collapse')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

