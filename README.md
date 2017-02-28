# ShowLimits
Mostra os limites dos elementos HTML. Contorna os Elementos com uma linha tracejada.
Útil enquanto estiver montando a estrutura.

Basicamente adiciona o seguinte código:
```css
* {
    outline-style: dashed;
    outline-color: #FF1493;
    outline-width: 1px;
}
``` 

Foi adicionado um botão ![botão](img/imagem3.png) no canto superior esquerdo para injetar o código acima.

Para utiliar, adicione antes da tag `</body>`.
```html
<body>
    <!-- my page -->
    <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
    <script src="https://gamts.github.io/ShowLimits/showlimits.js"></script>
</body>
```

Necessário jQuery.

Veja um [Exemplo](https://gamts.github.io/ShowLimits/exemplo/exemplo.html).
*(Obs: Exemplo feito com base nos vídeos do canal [curso bootstrap](https://www.youtube.com/watch?v=8sU-IVaQYgk&list=PLd4yfya-3PIomj2O-W0s9A-0i1ThWJncj))*


![sem contornos](img/imagem1.PNG)

![com contornos](img/imagem2.PNG)


Sugestões: gesiel.am@gmail.com
