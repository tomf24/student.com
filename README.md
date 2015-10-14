# Technical Test

This project uses [Node](http://nodejs.org/) with [Express](http://expressjs.com/).
Build tasks are run using [Gulp](http://gulpjs.com/).
CSS is pre-processed with [gulp-sass](https://www.npmjs.com/package/gulp-sass/).
JavaScript is linted with [gulp-eslint](https://github.com/adametry/gulp-eslint/).
JavaScript is tested with [Mocha](https://github.com/mochajs/mocha/).
Views are templated with [Jade](http://jade-lang.com/).

## Prerequisites
Unix/OSX environment (Windows requires extra installation steps)
Node installed

## Getting Started:
$ npm install

## Building Assets:
$ gulp

## Running Tests:
$ npm test

## Running Server:
$ npm start

## Technology Choice:
I chose Node & Express as the web server technologies due to the simplicity in rapidly getting a development environment and web server up & running allowing me to serve a simple webapp with a couple of routes without much configuration time.

I chose not to use a database for this exercise as there was only a small amount of data in-play so storing it on the local file system and then loading it direcrlt into memory seemed an acceptably efficient method to access this small chunk of data and still keep the data well structured.

Jade is my front-end templating choice as it is a quick & simple technology to install, learn, and use, and I wanted to further my knowledge of Jade so it made sense to use it here.

I could have chosen Grunt over Gulp for the static asset build tasks, however I use Grunt everyday and feel that Gulp is a welcome alternative, and possibly a faster processing task runner, and Gulp requires less time to write the tasks than Grunt.

I've decided to minify and concatinate my static assets to keep HTTP requests to a minimum and allow for a faster loading page. Images are also compressed losslessly to further aid in page weight reduction.

My approach to responsiveness is content-first and uses a mobile-first to desktop-last approach in CSS delivery. This allows mobile devices to only load the assets it needs and allows desktop to receive the full experience.
The property background image is loaded into memory after the core content has been loaded and is then shown with a fade-in transition.

jQuery was selected for some simple event binding and DOM manipulation due to its ease of use and quick implementation time and has good cross-browser support.

## Changes I've Made:
I've abstracted data into relevant forms (property/friends/ratings) and stored it on the filesystem.
Friends.json has been integrated into property room data to save me time. I was considering make ratings and friends data a RESTful endpoint that could be async loaded.

## Known Issues:
Scability would be a concern with very large datasets using this approach of storing data on the file system and loading it all into memory. I would therefore look to load data on demand from a database through a cached layer to provide more control.

## Outstanding:
I ran out of time before I could:
Style breadcrumb with arrows. I would do this using :before and :after using the border "hack" to create the triangle effect.
Write more useful Mocha test(s).
Make use of ES6 features.
Add section icons.