# Quantum Forge

## Descrição do Projeto

Este projeto é uma aplicação web desenvolvida em React, como avaliação da matéria programação web II (PRW2) do IFSP campus São Carlos, que permite o cadastro e a visualização de produtos organizados por seções. A aplicação possui uma interface intuitiva onde o usuário pode:

- Cadastrar novos produtos através de um formulário
- Categorizar produtos por seções (ex: Computadores)
- Especificar marca, nome e preço do produto
- Indicar se o produto é usado
- Visualizar os produtos cadastrados agrupados por seção

A interface é composta por um formulário de cadastro e uma área de exibição dos produtos, onde cada item é apresentado em um card com suas principais informações.

### Componentes Principais

- **Form**: Formulário para cadastro de novos produtos
- **DropDown**: Seletor para escolha de seções e marcas
- **TextField**: Campo para entrada de texto (nome do produto)
- **PriceField**: Campo específico para entrada de valores monetários
- **SwitchButton**: Botão de alternância para indicar se o produto é usado
- **Section**: Container que agrupa produtos por categoria
- **Product**: Card que exibe as informações de um produto

### Características

- Design responsivo
- Formulário com validação
- Efeitos visuais de hover nos cards de produtos
- Indicador visual para produtos usados
- Organização por seções

## Integrantes

- Rhuan Andrey de Andrade Boni (SC3043983)

## Deploy

[Link para a aplicação](https://quantum-forge.vercel.app)

## Como Executar o Projeto Localmente

1. Clone o repositório:
```
git clone https://github.com/Rhuan-aa/quantum-forge.git
```

2. Instale as dependências:
```
cd quantum-forge
npm install
```

3. Execute a aplicação:
```
npm start
```

4. Acesse a aplicação em seu navegador:
```
http://localhost:3000
```

## Tecnologias Utilizadas

- React.js
- CSS
- JavaScript

## Estrutura de Arquivos

```
src/
├── components/
│   ├── Button/
│   ├── DropDown/
│   ├── Form/
│   ├── PriceField/
│   ├── Product/
│   ├── Section/
│   ├── SwitchButton/
│   └── TextField/
```

## Funcionalidades Futuras

- Implementação de edição de produtos
- Sistema de busca e filtros
- Armazenamento persistente dos dados
- Melhorias na experiência do usuário
