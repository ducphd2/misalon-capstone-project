#!/bin/bash

nest start @app/api-gateway & 
nest start @app/user-service & 
nest start @app/merchant-service