const toggle = document.getElementsByClassName('fnav-toggle')[0]

const links = document.getElementsByClassName('fnav-links')[0]


toggle.addEventListener('click', () => {
  links.classList.toggle('active')
})
