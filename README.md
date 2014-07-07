Node.js and Bootstrap Example Application
=========================================

This is a [Node.js](http://nodejs.org/) and [Bootstrap](http://getbootstrap.com/) example web application. [Express](http://expressjs.com/) is used as the web application framework. [Bower](http://bower.io/) is used as the front-end package manager (i.e. for Bootstrap and jQuery). [Grunt](http://gruntjs.com/) is used to run the [Less](http://lesscss.org/) pre-processor (which generates the CSS assets) and to minify both the the CSS and JavaScript assets. This web application is configured to be deployed with [Heroku](https://www.heroku.com/).

Requirements
------------

* [Node.js](http://nodejs.org/)
* [Heroku Toolbelt] (https://toolbelt.heroku.com/) (includes Heroku client, Foreman, and Git)
* [Nodemon] (http://nodemon.io/) (optional)


Installing Dependencies
-----------------------

Install the npm dependencies:  
`npm install`

This will also install the Bower dependencies and run Grunt.

Building
--------

Run Grunt:  
`grunt`

Optionally, have Grunt watch for changes in your Less files:  
`grunt watch`

Running
-------

Start the server with Foreman:  
`foreman start`

Note that running `foreman start` will run both the Node.js server and `grunt watch` simultaneously.

You can optionally use Nodemon to monitor for changes and automatically restart the server. To use Nodemon, create a file called `.env` with the following contents before starting Foreman:

```
NODE_ENV=development
```
