
# KickBacks

A shoe eccomerce that allows users to make an account and pay for shoes via PayPal. Once they have paid for their shoes that can keep track of their order history.

![ KickBacks search](./client/public/images/kbsearch.gif)

## Tech
### Client
* Framework: React
* CSS library: BootStrap

### Server
* Runtime Environment: Node.Js
* Framework: Express
* DataBase: MongoDB
* Authorization: JWT

## Prerequisites for running locally

You will need the following things to properly clone and run on your computer.

* MongoDB
* Node.Js

For running the client and server I recommend a code editor such as [Visual Studio Code](https://code.visualstudio.com/).

## Database Setup

* Using your CLI you will need to create a database. 
```
 use your_database_name;
```
## Server Setup

In the root folder run this line to install all dependencies.
```
npm run install
```
Navigate to the .envExample file: server/.envExample.
You need to setup your enviromental variables and rename the file to .env
``` 
LOCAL = mongodb://localhost:27017/your_database_name
JWT_SECRET = secret
```
## Viewing in browser

* In the root folder run the following
```
npm run develop
```
* To view in the browser go to http://localhost:3000/


## License

MIT (c) 2022 @ Steven Lofquist
