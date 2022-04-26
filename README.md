# The-Red-Badge-of-Courage

## Install Prerequisites 
1. Node.js
    1. https://nodejs.org/en/ (current version is 16.14.2) 
2. NPM
    1. after installing Node.js, run “npm install -g npm” on the command line 

## Installation and Launch Instructions
1. clone git repo locally using “git clone [address of the git repo]” on the command line 
2. run “npm install” within demo-application folder on your computer’s terminal 
3. run “npm run build” 
4. run “npm start” 
    1. application will launch using local port 3000 by default 

## Troubleshooting
- NPM not recognized. 
    - If you get an error saying that “npm is not a recognized command” or equivalent and you are on windows, try running the command in a bash terminal. 
    - Check the Node.js permissions under environment variables, if it is not global, copy the permissions from the local user to the global environment variables. 
- Raw.macro error on npm run build/npm start 
    - Run “npm install --save-dev raw.macro” on command line 

## Release Notes version The-Red-Badge-of-Courage-Project 1.0:
- Features:
    - Added the full text of The Red Badge of Courage 
    - Added full book navigation 
        - Direct Page 
        - Next and previous page 
        - Next and previous chapter 
    - Added highlighting and pronunciation audio functionality 
    - Added definition, root, and derivative words screen 
    - Added quiz functionality and screen 
        - Quiz scores recorded for use with DAP repository 
    - Added resizing for use with mobile or smaller windows and standardized pages 
    - Added Stephen Crane (author) biography and picture set 
- Bug Fixes:
    - Fixed OS dependency problems for page load 