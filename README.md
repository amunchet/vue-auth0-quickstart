# vue-auth0-quickstart
Quickstart scaffold template for Vue + Auth0

## Summary
This quickstart template creates a basic Vue application with Auth0 already implemented.  It will also run `npm update` on creation.

## Requirements
Make sure that Docker and python are installed on the base.  Docker-compose is created by default, but not required.

## Installation
0.  Clone this repository `git clone https://github.com/amunchet/vue-auth0-quickstart.git`
1.  Run `setup.py` in the main folder.  
2.  Follow the instructions.
3.  Enjoy.

The file `project_name/entrypoint.sh` is the Docker entrypoint.  Remove `npm update` or the Vue UI server here.

## Use Cases
This is meant to be used as a starting point for a larger Vue project.  You will likely change the docker configuration, endpoint, and packages.  