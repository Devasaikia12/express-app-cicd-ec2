#!/bin/bash

#navigate into our working directory where we have all our github files
cd /home/ec2-user/express-app

#start our node app in the background
echo "Start application"
node app.js > app.out.log 2> app.err.log < /dev/null & 