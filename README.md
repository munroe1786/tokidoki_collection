![tokidoki is the hope the hidden energy that everyone has inside](https://user-images.githubusercontent.com/51828035/143304545-62b7dee1-5a58-4c80-a29f-40dce97e9869.jpg)


Tokidoki Collection

This app allows for creation of Tokidoki families and characters as well as viewing those families and characters.

This app has a Rails API back-end with Javascript, HTML and the Tachyons CSS Design System handling the front-end.

Ruby version 2.6.1 is used for this project.

To install, fork and clone this repository.

System dependencies:
    
    gem "fast_jsonapi", "~> 1.5"
    
    gem 'rails', '~> 6.0.2', '>= 6.0.2.2' then run bundle install

Getting started using the app:

    -change directory into the Rails API back-end with the command cd tokidoki_api

    -run rails db:migrate to create the database

    -run rails db:seed to seed the database

    -run rails s to start the back-end server

    -navigate to localhost:3000 in the browser if you'd like to check that the Rails server is running

    -open a second terminal window

    -change directory into the front-end with the command cd tokidoki_client
    
    -type python -m SimpleHTTPServer to start the front-end Python server

    -navigate to localhost:8000 in the browser to use the app

    Happy collecting!
