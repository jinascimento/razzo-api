# Razzo-api
Api para cadastro e manutenção de artigos para blog:
 - Cadastro de artigo;
 - Atualização de artigo;
 - Destruição de artigos em massa;

## Requerimentos 

MongoDB(Database): 
 - https://www.mongodb.com/what-is-mongodb

### Node

    $ node --version
    v12.1.0+

    $ yarn --version
    1.13.0+

#### Node installation on OS X

You will need to use a Terminal. On OS X, you can find the default terminal in
`/Applications/Utilities/Terminal.app`.

Please install [Homebrew](http://brew.sh/) if it's not already done with the following command.

    $ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"

If everything when fine, you should run

    brew install node

#### Node installation on Linux

    sudo apt-get install python-software-properties
    sudo add-apt-repository ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs

#### Node installation on Windows

Just go on [official Node.js website](http://nodejs.org/) & grab the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it.

---

## Instalação

    $ git clone https://github.com/jinascimento/razzo-api
    $ cd razzo-api
    $ yarn install
     
## Setar variaveis de ambiente

MONGO_URL={url_mongo_db}

## Start & watch

    $ yarn dev

