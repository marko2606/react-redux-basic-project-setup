# react-redux-basic-project-setup

Quick instruction
clone/copy repository
npm install
npm start

Detailed explanation
Installed dependencies
Package	Reason
React
'An npm package to get you immediate access to React, without also requiring the JSX transformer.'
React DOM
'This package serves as the entry point of the DOM-related rendering paths. It is intended to be paired with the isomorphic React, which will be shipped as react to npm.'
React route	Managing routes in React.
Webpack
'Allows to split your codebase into multiple bundles, which can be loaded on demand.'
Webpack Dev Server
'Serves a webpack app. Updates the browser on changes.'
Babel Loader
'Babel module loader for Webpack.'
Babel Core	Required for Babel Loader.
Babel Preset ES2015	Required for Babel Loader.
Babel Preset: React	Required for Babel Loader.
Babel preset-stage 2	Required for Babel Loader. Spread operator
Redux	Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.
React redux	Connecting react with redux.
Redux logger	Logging redux action in more details.
Style loader	Enable importing styles
Css loader	Enable importing css files


Webpack configuration
Here is what the webpack.config.js file looks like:

var path = require('path');
var srcPath = path.join(__dirname, 'src');
var buildPath = path.join(__dirname, 'dist');

module.exports = {
  context: srcPath,
  entry: path.join(srcPath, 'index.js'),
  output: {
      path: buildPath,
      filename: "bundle.js"
  },
  module: {
      loaders: [
          {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
              presets: ['react', 'es2015', 'stage-2']
            }
          },
          { 
            test: /\.css$/, 
            loader: "style-loader!css-loader" 
          }
      ]
  }
};


Again, let's break it down so that it's clear what this file is doing:
•	Firstly, we are requiring NodeJS's path module so that we can handle file paths, which is required for setting the object's context. It's very important to use this module rather than try and concatenate directories with strings, because some operating systems, like Windows, require this.
•	Then, we specify a srcPath and a buildPath using the path module that we just required. Doing this will ensure we have DRY, readable code.
•	Now comes the time to write the object. The properties we are going to use are all relevant to Webpack.
o	We first provide a context, which simply specifies where our app is. It refers to the context variable that we just created.
o	We then specify the entry point, which is of course the React app we wrote earlier (src/js/client.js).
o	Next we specify the name of the bundled file that Webpack creates when it runs. In this case it's dist/bundle.js. Sound familiar? It should do, because this is the file we are linking to from our dist/index.html!
o	Finally comes the module property, which contains an array, loaders, which currently contains a single object. This object's properties tell Webpack what JavaScript files are being written with ES6 and React, so that its loader, babel can run accordingly when webpack.config.js is run. This is largely boilerplate code that we can see at the readme page on Babel Loader.
If webpack.config.js is confusing now, don't worry, as long as you understand what it is there to do.

