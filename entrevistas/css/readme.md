#### O que é o CSS e para que ele serve?

O CSS é o acrônimo de Cascading Style Sheet ou Folha de Estilo em cascata. Ele é utilizado para fazer a estilização de uma página HTML.

#### Qual seletor tem mais importância (id, class ou tipo/tag(body, h1))?

id > class > type

#### O que é uma declaração CSS?

Uma declaração é um linha que contenha uma estilização. Composta por propridade(color) e valor(red) color: red;

#### O que são as variáveis?

Variáveis dentro do CSS irão guardar um valor que você poderá utilizar em vários locais, facilitando a codificação e também as boas práticas.

#### Quais as três formas de utilizar CSS?

inline - utilização dentro da tag do elementp html &lt;p style="color:red;" >@programador.cs&lt;/p>  
interno - utilização dentro da tag head do HTML(bem lá no topo)  
externo - utilização em um arquivo separado .css

#### Explique o box-model?

box-model é o padrão dos elementos html que irão conter de fora para dentro - margin, border, padding e conteúdo

#### Qual a diferença entre ID e classe?

classe - é uma forma de buscar o elemento ou uma série de elemento para poder ser feita a estilização, podendo ser declarado várias vezes em vários elementos  
id - é uma forma de buscar um único elemento, não podendo ser declarado em mais de um elemento.

#### O que \* { box-sizing: border-box; } faz? E quais as vantagens?

Com essa declaração você conseguirá ter o controle sobre o tamanho do elemento html. Ao definir uma largura ou altura o tamanho máxima da caixa irá se conter a esse valores que irá levar em consideração o padding e a borda no calculo do tamanho, diferente de não ter a declaração que o padding e borda não serão contabilizados no tamanho definido
