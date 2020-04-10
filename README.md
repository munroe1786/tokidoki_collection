Tokidoki Collection

This app allows for creation of Tokidoki families and characters as well as viewing those families and characters.

This app has a Rails API back-end with Javascript, HTML and the Tachyons CSS Design System handling the front-end.

Ruby version 2.6.1 is used for this project.

To install, fork and clone this repository.

System dependencies:
    
    gem "fast_jsonapi", "~> 1.5"
    
    gem 'rails', '~> 6.0.2', '>= 6.0.2.2' then run bundle install

Getting started

    -run rails db:migrate 

    -run rails db:seed to seed the database

    -run rails s to start the server

    -navigate to http://localhost:3000/ in the browser

    -in a second terminal window, type python -m SimpleHTTPServer to start the front-end Python server, which will take you to the app
