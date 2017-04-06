# MySQL + Express + Angular4+ NodeJS

Just a JS stack binding some cool technologies.

## Nota Bene

* Javascript version: ECMAScript 5.1
* MySQL not implemented yet

## Documentations

* [Client side README](https://github.com/gigouni/stack_nodejs_angular2_express/blob/master/client/README.md)
* [Server-side README](https://github.com/gigouni/stack_nodejs_angular2_express/blob/master/server/README.md)

## tl;dr

```shell
$ cd your_projects_folder
$ mkdir my_project
$ cd my_project
$ yarn init
$ ng new yout_submodule_name
$ mkdir server
$ cd server
$ yarn init
$ touch server.js
$ npm install --save express path morgan cookie-parser body-parser ejs
$ cd ../client
$ ng serve

(in another terminal)

$ cd your_projects_folder/my_project/server
$ node server.js
```

## Getting started

First, if you don't have a client folder, generate it

```bash
$ ng new your_project_name
```

Run the client

```bash
$ cd client
$ ng serve
```

Then, run the server

```bash
$ cd ../server
$ node server.js
```

Now, open your browser here: [127.0.0.1:4200](http://127.0.0.1:4200)
