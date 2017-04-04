<h3>Quick instruction</h3>
<pre>
clone/copy repository
npm install
npm start
</pre>
<h3>Detailed explanation</h3>
<h4>Installed dependencies</h4>
<table>
	<tr>
		<th>Package</th>
		<th>Reason</th>
	</tr>
	<tr>
		<td>React</td>
		<td>'An npm package to get you immediate access to React, without also requiring the JSX transformer.'</td>
	</tr>
	<tr>
		<td>React DOM</td>
		<td>'This package serves as the entry point of the DOM-related rendering paths. It is intended to be paired with the isomorphic React, which will be shipped as react to npm.'</td>
	</tr>
	<tr>
		<td>React route</td>
		<td>Managing routes in React.</td>
	</tr>
	<tr>
		<td>Webpack</td>
		<td>'Allows to split your codebase into multiple bundles, which can be loaded on demand.'</td>
	</tr>
	<tr>
		<td>Webpack Dev Server</td>
		<td>'Serves a webpack app. Updates the browser on changes.'</td>
	</tr>
	<tr>
		<td>Babel Loader</td>
		<td>'Babel module loader for Webpack.'</td>
	</tr>
	<tr>
		<td>Babel Core</td>
		<td>Required for Babel Loader.</td>
	</tr>
	<tr>
		<td>Babel Preset ES2015</td>
		<td>Required for Babel Loader.</td>
	</tr>
	<tr>
		<td>Babel Preset: React</td>
		<td>Required for Babel Loader.</td>
	</tr>
	<tr>
		<td>Babel preset-stage 2</td>
		<td>Required for Babel Loader. Spread operator</td>
	</tr>
	<tr>
		<td>Redux</td>
		<td>Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.</td>
	</tr>
	<tr>
		<td>React redux</td>
		<td>Connecting react with redux.</td>
	</tr>
	<tr>
		<td>Redux logger</td>
		<td>Logging redux action in more details.</td>
	</tr>
	<tr>
		<td>Style loader</td>
		<td>Enable importing styles</td>
	</tr>
	<tr>
		<td>Css loader</td>
		<td>Enable importing css files</td>
	</tr>
</table>

<h4>Webpack configuration</h4>
<p>Here is what the webpack.config.js file looks like:</p>
<code>
<pre>
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

</pre>
</code>
<p>Again, let's break it down so that it's clear what this file is doing:</p>
<ul>•	Firstly, we are requiring NodeJS's path module so that we can handle file paths, which is required for setting the object's context. It's very important to use this module rather than try and concatenate directories with strings, because some operating systems, like Windows, require this.</ul>
<ul>•	Then, we specify a srcPath and a buildPath using the path module that we just required. Doing this will ensure we have DRY, readable code.</ul>
<ul>•	Now comes the time to write the object. The properties we are going to use are all relevant to Webpack.
	<ul>o	We first provide a context, which simply specifies where our app is. It refers to the context variable that we just created.</ul>
	<ul>o	We then specify the entry point, which is of course the React app we wrote earlier (src/js/client.js).</ul>
	<ul>o	Next we specify the name of the bundled file that Webpack creates when it runs. In this case it's dist/bundle.js. Sound familiar? It should do, because this is the file we are linking to from our dist/index.html!</ul>
	<ul>o	Finally comes the module property, which contains an array, loaders, which currently contains a single object. This object's properties tell Webpack what JavaScript files are being written with ES6 and React, so that its loader, babel can run accordingly when webpack.config.js is run. This is largely boilerplate code that we can see at the readme page on Babel Loader.</ul>
</ul>
<p>If webpack.config.js is confusing now, don't worry, as long as you understand what it is there to do.</p>
<h3>Usefull tutorials</h3>
<ul><a href="https://www.youtube.com/watch?v=JPT3bFIwJYA&list=PL55RiY5tL51oyA8euSROLjMFZbXaV7skS">Basic React</a></ul>
<ul><a href="https://www.youtube.com/watch?v=qrsle5quS7A&list=PL55RiY5tL51rrC3sh8qLiYHqUV3twEYU_">Basic React-Redux</a></ul>
