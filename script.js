document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section')
  const letters = 'abcdefghijklmnopqrstuvwxyz'.split('')

  sections.forEach((el, i) => {
    el.id = letters[i]
    if (!el.nextElementSibling) return
    el.querySelector('a[href="#"]').href = `#${letters[i + 1]}`
  })

  document.querySelector('main').hidden = false;
})
