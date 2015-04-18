# Ionic Import Contacts Demo

Just a place to save a demo of how to import contacts into an ionic application on an iOS device. Check out the blog post at http://www.austinknight.net

# Developing

## Initial setup
    
    sudo npm install -g ionic cordova (if you don't already have ionic)
    npm install
    bower install

*Add platform*
    
    ionic platform add ios

*Run the app*

    ionic run ios
OR

    ionic emulate ios

*Live reloading and logs enabled*
    
    ionic run ios --livereload --consolelogs --serverlogs


*Run a web server version of the app (contacts won't work on web though)*

    ionic serve
