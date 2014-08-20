hindsight
=========

Angular front-end to our Hindsight Application - a tool for running seamless Retrospectives  

There are a couple install options below - one using vagrant so projects leave no trace on your laptop
or you can do the manual install option.


## Vagrant Install

Install [vagrant](https://www.vagrantup.com/downloads.html)

Clone the repository

```shell
vagrant up
```

### General principles for using vagrant

- Edit on your 'host'. Use the IDE / OS that makes you the most productive / happiest.
- Run the server/test on vagrant. SSH into the box

```shell
vagrant ssh
cd /vagrant
grunt server
```

The vagrant box shares the project directory so changes made in your ide are instant reflected on the box. 

### Notes on the vagrant environment

The box uses [nvm](https://github.com/creationix/nvm) to manage node.

```shell
vagrant ssh
cd /vagrant
nvm use
```

will get you to the root of the project and using the right version of node.

Because we use nvm, node is siloed to the vagrant user, so you shouldn't need sudo ever.

The box also uses [rvm](https://rvm.io/rvm/install) to manage java.

Browser tests run via X11. You must have XQuartz or similar installed for them to work. If you find this to be a PITA please remove selenium and make the tests run headlessly :-) 

If you make changes to the box that you would like to see propagated to the team:

```shell
vagrant package
```

will make a .box file that you can put on the internets. Be sure to update the Vagrantfile to point to your new image.

### Rational

Vagrant does a few very things well

- You can get up and running in minutes, regardless of your experience
- Projects leave no trace on your laptop

```shell  
vagrant destroy
cd ..
rm -rf <project dir>
```

- You can experiment with new server configuration:
  - Without destroying your laptop
  - Fear of loosing time if it all goes wrong

```shell
vagrant destroy
vagrant up
```

  - Share the new configuration with the team with a checkin


## Manual Install

If you want to run your dev environment on your own machine do the following

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


## Running the server and tests

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