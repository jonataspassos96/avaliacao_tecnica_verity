# Onboarding Técnico (Setup)

### Objetivo

Este documento tem como objetivo, a partir de instruções, facilitar o processo de instalação, configuração e execução do projeto na sua máquina.

# Instalações

## NodeJS

Para executar o projeto é necessário instalar o **Node** em sua máquina

- Para realizar a instalação é sugerido realizar o download a partir do site oficial do [Node](https://nodejs.org/en/)

## VSCode

Instalação do editor de texto mais utilizado, obviamente existem outros, mas neste documento será abordado a instalação e configuração do **VSCode**.

- Para realizar a instalação é sugerido realizar o download a partir do site oficial do [VSCode](https://code.visualstudio.com/download)

## Git

Caso você não possua o Git instalado em sua máquina, você pode tentar realizar o download a partir do link a seguir.

- Para realizar a instalação é sugerido realizar o download a partir do site oficial do [Git](https://git-scm.com/downloads)

Após a instalação, é necessário realizar a configuração do Git em sua máquina para que o mesmo funcione corretamente. Primeiro será necessário realizar a configuração global do nome do usuário e do email, para realizar tal procedimento, utilize os seguintes comandos, lembrando de substituir os valores entre aspas duplas.
    
    git config –global user.email “seuemail@email.com”
    
    git config –global user.email “seuemail@email.com”
    
Também será necessário realizar a configuração de chaves SSH no ssh-agent da sua máquina e também adicionar a chave ssh criada na sua conta GitHub. Para isso, é recomendável seguir os guias fornecidos pela equipe do próprio GitHub.

[Gerar uma nova chave SSH e adicioná-la ao ssh-agent](https://docs.github.com/pt/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

[Adicionar uma nova chave SSH à sua conta do GitHub](https://docs.github.com/pt/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)

## Java

A versão 11 do JDK não é obrigatória, mas é a recomendada, visto que a versão 8 é a próxima versão a ser depreciada e a 15 não é LTS e apresenta problemas.

- Para realizar a instalação é sugerido realizar o download a partir do site oficial da [Oracle](https://www.oracle.com/java/technologies/downloads/)

Após a instalação, é necessário configurar a variável de ambiente no sistema.

    export JAVA_HOME=$(/usr/libexec/java_home)
    
# Execução do projeto

**Passo 1:** para fazer o clone do projeto em sua máquina, execute o seguinte comando.

    git@github.com:jonataspassos96/avaliacao_tecnica_verity.git


**Passo 2:** após a instalação do projeto, entre no diretório raiz e execute o seguinte comando:

    npm install

ou

    yarn install

**Passo 3:** para olhar a execução dos testes pela interface do Cypress, execute o seguinte comando.

    npx cypress open
    
ou

    yarn cypress open

**Passo 4:** para olha o resultado da bateria de teste no Dashboard do Allure, execute o seguinte comando.

    npm run dashboard
    
ou

    yarn dashboard
