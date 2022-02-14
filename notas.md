# Notas

## Índice

- [Por que decidi refazer o projeto?](#por-que-decidi-refazer-o-projeto)
- [Sobre o js](#sobre-o-js)

<div style="height: 1px; width: 100%; background-color: #484b55; margin: 25px 0"></div>

## Por que decidi refazer o projeto?

**tl;dr:** eu achava o site feio e queria testar novos conhecimentos.

Já tinha um tempo que eu pensava nisso. O motivo é simples: eu estava achando o site feio. Como foi o meu primeiro site, é claro que não seria a melhor coisa do mundo. Eu não conhecia muito bem `html` e `css` na época. O pouco que sabia eu aprendi durante o curso e em uma Next Level Week, da RocketSeat.

Uma coisa que eu tinha muita dificuldade era fazer um site responsivo. Na época, eu usava um notebook com tela 720p e tudo foi feito pensando em ficar perfeito para aquela tela. Eu tentei arrumar algumas coisas para celulares, principalmente, mas não consegui fazer isso muito bem. No meu monitor atual (1080p), percebo muitos erros: a imagem de fundo não ocupa toda a tela, o texto é pequeno, os `<iframe>` são pequenos também, etc.

Então decidi fazer tudo novamente, arrumando as coisas que me incomodavam. A responsividade ainda é meu nêmesis, pelo visto, afinal não consegui colocar as imagens dos cards da maneira que queria em dispositivos mobile, então apenas as tirei. Vou me dar um desconto, afinal é a primeira vez que uso o `display: grid;` sozinho. Quem sabe mais pra frente eu arrumo isso. Mas, no geral, fiquei bem satisfeito com o resultado e acho que agora é muito mais agradável.

<div style="height: 1px; width: 100%; background-color: #484b55; margin: 25px 0"></div>

## Sobre o js

**tl;dr:** acho que é possível diminuir o código, mas não sei como. ainda.

No site antigo, havia um `<header>` com um logo e alguns botões que levavam às seções da página. Eu queria fazer algo assim, mas não dessa forma. Então decidi fazer uma tabela de conteúdos simples (que só aparece em telas grandes).

A primeira solução que cheguei tinha um código bem maior, mas consegui diminuir bastante. Porém ainda tive que deixar vários consts para selecionar cada título e pegar o `top` deles.

```js
  const headings = document.querySelectorAll('.main__title')
  const firstHeadingTop = headings[0].getBoundingClientRect().top
  const secondHeadingTop = headings[1].getBoundingClientRect().top
  const thirdHeadingTop = headings[2].getBoundingClientRect().top
  const fourthHeadingTop = headings[4].getBoundingClientRect().top
```

Eu sei que posso fazer um `forEach()` com o `headings` e pegar os valores que preciso, mas eu não fui capaz de selecionar os valores específicos que ele dá para cada heading. Então o que fiz foi isso:

```js
  // 'item' se refere aos <li> da tabela
  item.addEventListener('click', () => {
    const index = item.dataset.index
    headingsTop = [firstHeadingTop, secondHeadingTop, thirdHeadingTop, fourthHeadingTop]
    handleScroll(top = headingsTop[index])
  })
```

Acho que seria ótimo se eu conseguisse diminuir esse código. Quem sabe no futuro, não?