# ShowLimits
Mostra os limites dos elementos HTML. Contorna os Elementos com uma linha tracejada.

Basicamente adiciona o seguinte código:
```css
* {
    outline-style: dashed;
    outline-color: #FF1493;
    outline-width: 1px;
}
``` 
Foi adicionado um botão no canto superior esquerdo para injetar o código acima.

Para utiliar, adicione antes da tag `</body>`.
```html
<script src='https://gamts.github.io/ShowLimits/showlimits.js'></script>
```
Necessário jQuery.

![sem contornos](imagem1.PNG)
![com contornos](imagem2.PNG)
