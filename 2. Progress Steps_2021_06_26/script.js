const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let 현재활성상태 = 1

next.addEventListener('click', () => {
  현재활성상태++

  if (현재활성상태 > circles.length) {
    현재활성상태 = circles.length
  }

  갱신()
})

prev.addEventListener('click', () => {
  현재활성상태--

  if (현재활성상태 < 1) {
    현재활성상태 = 1
  }

  갱신()
})

function 갱신() {
  circles.forEach((원, 인덱스) => {
    if (인덱스 < 현재활성상태) {
      원.classList.add('active')
    } else {
      원.classList.remove('active')
    }
  })

  const actives = document.querySelectorAll('.active')

  progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%'

  if (현재활성상태 === 1) {
    prev.disabled = true
  } else if (현재활성상태 === circles.length) {
    next.disabled = true
  } else {
    prev.disabled = false
    next.disabled = false
  }
}
