#!/bin/sh

# Entrypoint for Frontend Docker
echo 'Installing project...'
cd /src/XXPROJECTNAMEXX && npm install

echo "Starting..."
# cd /src/ && npm run serve
cd /src/ && vue ui -D -H 0.0.0.0
