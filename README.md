# user-generator
A web application using React framework as the rendering engine, with Redux as the store management

## Pre-requisites
Make sure you have npm and node packages installed. If not please follow the procedure given [Here](https://websiteforstudents.com/install-the-latest-node-js-and-nmp-packages-on-ubuntu-16-04-18-04-lts/)

Internet connection for bootstrap components and api request works.

## To host the project locally
'''
npm install
'''
Once the packages are installed succesfully,
'''
npm start
'''

## Flow of the app
* Add new user to the initialy empty users list stored in single Redux store by making an api call and generating a random user data from ___https://randomuser.me/documentation___.
* Delete the user from the redux store after it is been created.

