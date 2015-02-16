auth0-demo-spa
=================

This is Single Page Application for the Auth0 SSO example. It has been modified
so that all configuration comes from ENV. Grunt is used to compile the ENV
config.


## Running the Project

#### Install Dependencies

```
# Assuming Node.js is installed...
npm install -g grunt-cli
npm install -g serve
npm install
```

#### Compile with Grunt
The project uses Grunt to compile the JavaScript configuration from ENV vars.
Configure the following ENV variables.

```sh
AUTH0_CLIENT_ID=xxxxx
AUTH0_DOMAIN=example.auth0.com
PORT=3004 # default 3000
```

Compile:

`grunt`

#### Start the server

Start a local static file server to serve the assets on a configured port:

```sh
npm start
```

## Deploying to Github Pages
A Grunt task is added to deploy the static site to Github Pages. Build the
project normally. Then run the `gh-deploy` task to push to github pages.

```sh
grunt build
grunt gh-pages
```
