# Matt Jennings Digital
[![codecov](https://codecov.io/gh/captainCoolMJ/Matt-Jennings-Digital-Source/branch/master/graph/badge.svg)](https://codecov.io/gh/captainCoolMJ/Matt-Jennings-Digital-Source)

[![Build Status](https://travis-ci.org/captainCoolMJ/Matt-Jennings-Digital-Source.svg?branch=master)](https://travis-ci.org/captainCoolMJ/Matt-Jennings-Digital-Source)

## Warning: Deprecated
This application is in the process of being refactored

## Development
Make sure you have docker and docker compose installed and running.

Copy `.env.dist` into `.env` and fill in your details with the correct values.

While inside the root directory, run `make start`. 

Next, run `make ssh` to enter the container, then `npm install`.

While inside the container, `npm run build` will build assets. To run the server run `npm run serve`. The site should then be accessible via `localhost` on your configured port.