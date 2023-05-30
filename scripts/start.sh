#!/bin/bash

git pull
yarn migrate:up
yarn pm2-start