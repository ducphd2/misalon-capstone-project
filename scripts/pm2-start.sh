#!/bin/bash

pm2 start dist/apps/api-gateway/main.js --name gateway
pm2 start dist/apps/user-service/main.js --name user-service
pm2 start dist/apps/merchant-service/main.js --name merchant-service