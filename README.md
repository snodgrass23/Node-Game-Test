# node-boilerplate
      
  Structure for your [node.js](http://nodejs.org) project.
  
## Requirements

  - node v0.4.x
  - npm v0.3.x

## Installation

    mkdir mynewproject && cd mynewproject
    git clone git://github.com/hunterloftis/node-boilerplate.git .
    git checkout -b mynewproject
    ./setup.sh
    sudo node server.js

## Adding libraries

  Add to 'dependencies' in /package.json, then:
  
    sudo npm bundle
    
## Included modules:

  - Express
  - Jade
  - Stylus
  - Connect-Timeout
  - Cluster
  - Express-Messages
  