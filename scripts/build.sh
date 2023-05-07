#!/bin/bash

nest build @app/api-gateway
nest build @app/user-service
nest build @app/merchant-service
nest build @app/booking-service
nest build @app/payment-service