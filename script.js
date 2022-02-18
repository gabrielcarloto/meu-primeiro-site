// ao clicar no botão, o scroll é feito para o primeiro parágrafo

const landingButton = document.getElementById('landing__button')

landingButton.addEventListener('click', () => handleScroll(headingTopPositions[0]));


// a tabela de conteúdos deve aparecer apenas quando o scroll estiver no primeiro parágrafo

const outline = document.querySelector('.outline')
const outlineList = document.querySelectorAll('.outline__list')
const outlineContainer = document.querySelector('.outline__list-container')

let scrollPosition = 0

document.addEventListener('scroll', (e) => {
  const media = '(min-width: 1200px) and (max-width: 1800px) and (orientation: landscape)'
  const matchMedia = window.matchMedia(media).matches
  const main = document.querySelector('.main')
  
  scrollPosition = window.scrollY
  
  if (scrollPosition >= headingTopPositions[0] - 100) {
    outline.style.left = '20px'
    outlineContainer.style.transform = 'translateX(10px)'
    matchMedia ? main.style.marginLeft = '15%' : main.style.marginLeft = '0px'
  } else {
    outline.style.left = '-300px'
    outlineContainer.style.transform = 'translateX(-50px)'

    main.style.marginLeft = '0'
  }
})

// quando o mouse sai de cada <li> da tabela de conteúdos, a linha deve desaparecer
// e ao clicar em cada <li>, o scroll é feito para cada parágrafo correspondente

const headings = document.querySelectorAll('.main__title')
const headingTopPositions = []

headings.forEach(heading => {
  headingTopPositions.push(heading.getBoundingClientRect().top)
})

outlineList.forEach((item) => {
  item.addEventListener('mouseout', () => {
    item.style.setProperty('--visibility', 'visible')
    item.addEventListener('animationend', () => {
    item.style.setProperty('--visibility', 'hidden')
  })})

  item.addEventListener('click', () => {
    const index = item.dataset.index
    handleScroll(headingTopPositions[index])
  })
})

// função para fazer o scroll

function handleScroll(top) {
  window.scrollTo({
    top: top - 35,
    behavior: 'smooth'
  })
}