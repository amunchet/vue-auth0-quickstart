#!/usr/bin/env python
"""
Setup script for Vue+Auth0 Quickstart Template
"""
from pprint import pprint
import os
import subprocess
import json

def inplace_change(filename, old_string, new_string):
    """
    Credit to https://stackoverflow.com/questions/4128144/replace-string-within-file-contents
    """
    # Safely read the input filename using 'with'
    with open(filename) as f:
        s = f.read()
        if old_string not in s:
            print('"{old_string}" not found in {filename}.'.format(**locals()))
            return

    # Safely write the changed content, if found in the file
    with open(filename, 'w') as f:
        print('Changing "{old_string}" to "{new_string}" in {filename}'.format(**locals()))
        s = s.replace(old_string, new_string)
        f.write(s)

if __name__ == "__main__":

    # TODO: Check if we are in the right directory

    # TODO: Check if docker is installed

    clear = lambda: subprocess.call('cls||clear', shell=True)
    clear()
    print("----------------------------------------------")
    print("Welcome to the Vue+Auth0 Setup script")

    print("We assume you have python and docker installed.")
    print("----------------------------------------------")

    print()
    print()
    print("Please enter your project's name: ")
    project_name = input().strip()

    if not project_name.isalnum():
        print("ERROR - Project name can only contain numbers or letters")
        return -1


    file_list = [
        "frontend/entrypoint.sh",
        "frontend/mars/package-lock.json",
        "frontend/mars/package.json",
        "frontend/mars/README.md"
    ]

    for f in file_list:
        inplace_change(f, "XXPROJECTNAMEXX", project_name)

    os.rename("frontend/mars", "frontend/" + project_name)

    clear()
    print("Please enter Auth0 domain: ")

    print("Please enter Auth0 clientId: ")

    print("Please enter Auth0 audience: ")
