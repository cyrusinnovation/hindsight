hindsight
=========

Angular front-end to our Hindsight Application - a tool for running seamless Retrospectives  

After cloning the code into a directory, cd into the directory and run:  
npm install  
bower install

You may need to install Ruby and Compass (gem install compass).  
If you have them, confirm things are working by running:   
grunt test  
grunt serve

If your shell can't find grunt after the npm install, you need to install grunt-cli globally by running:
npm install -g grunt-cli

For integration tests, install protractor:  
npm install -g protractor  
(You may need to run 'sudo npm install -g protractor')  

Download the selenium server with:  
webdriver-manager update  
(You may need to run 'sudo webdriver-manager update')  

Check the integration tests pass by starting grunt server and starting the selenium server in separate terminal windows:  
grunt serve  
webdriver-manager start   

and finally, run the tests:  
protractor tests/protractor.conf.js  


To deploy, we are hosting on heroku and you must run:
grunt build
to write new dist/ files and then:
git commit -m "build"
and then:
git push heroku
to push the dist files to heroku.