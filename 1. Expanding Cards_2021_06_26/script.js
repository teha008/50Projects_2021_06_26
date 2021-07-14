const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    액티브클래스제거()
    panel.classList.add('active')
  })
})

function 액티브클래스제거() {
  panels.forEach((panel) => {
    panel.classList.remove('active')
  })
}
