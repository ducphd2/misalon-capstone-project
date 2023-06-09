#!/bin/bash

pm2 start dist/apps/api-gateway/main.js --name gateway
pm2 start dist/apps/user-service/main.js --name user-service
pm2 start dist/apps/merchant-service/main.js --name merchant-service
pm2 start dist/apps/booking-service/main.js --name booking-service
pm2 start dist/apps/payment-service/main.js --name payment-service
pm2 start dist/apps/notification-service/main.js --name notification-service
