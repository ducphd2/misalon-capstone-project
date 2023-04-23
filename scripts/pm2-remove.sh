#!/bin/bash

# Get the list of PM2 processes
pm2_list=$(pm2 list)

# Check if there are any processes running
if [[ "$pm2_list" == *"online"* ]]; then
  # Stop all PM2 processes
  pm2 stop all

  # Wait for all processes to stop
  pm2_wait=$(pm2 list)

  while [[ "$pm2_wait" == *"online"* ]]; do
    echo "Waiting for PM2 processes to stop..."
    sleep 1
    pm2_wait=$(pm2 list)
  done

  # Remove all PM2 processes
  pm2 delete all
fi