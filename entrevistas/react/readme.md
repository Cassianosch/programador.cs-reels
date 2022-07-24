#### O que é Tree Shaking?

É uma prática de remover conteúdo não necessário do arquivos package.json

#### Qual a diferença entre class component e function component?

function component é uma função que recebe propriedades(props) e retorna um elemento react (jsx)  
class component necessita que você extenda a partir do react e retorna uma função render que retorna um elemento react (jsx)

#### O que é PureComponent?

É um componente que só se atualiza caso suas propriedades(props) ou state forem atualizadas, isso deve ser feito com a função shouldComponentUpdate

#### Qual a diferença entre memo and useCallback?

useCallback e memo têm o mesmo objetivo: não renderizar coisas desnecessárias.  
useCallback - retorna um callback memorizado, é mais utilizado para lógicas  
useMemo - devolve um valor memorizado, o memo é mais utilizado na view, um exemplo seria em um grande lista que fará algumas alterações ou apenas mostrado visualmente.

#### O que é drilling?

É a forma de passar propriedade entre componentes, sem a necessidade de utiliza-los nos componentes "pontes", pode ser utilizado outras formas ou ferramentas para fazer a mesma coisa como contexto, redux ou recoil.
