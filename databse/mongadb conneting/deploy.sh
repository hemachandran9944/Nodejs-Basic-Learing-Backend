#!/bin/bash

echo "------------------------------------------"
echo " Hema's Automation Pipeline Starting..."
echo "------------------------------------------"

# STEP 1: Build check (Syntax bug detection)
echo "  Stage 1: Building Docker Image..."
docker-compose build

if [ $? -ne 0 ]; then
    echo " ERROR: Syntax error detected in your code or Dockerfile!"
    echo "Stopping Pipeline..."
    exit 1
fi

# STEP 2: Deploy
echo " Stage 1 Clear! Stage 2: Deploying..."
docker-compose up -d

# STEP 3: Verification
echo " Checking Container Status..."
sleep 5 # Startup time

if [ "$(docker ps -q -f name=hema-api-service)" ]; then
    echo "------------------------------------------"
    echo " SUCCESS! App is running at http://localhost:8000"
    echo "------------------------------------------"
else
    echo " BUG DETECTED: Container crashed after start!"
    echo "Check logs: docker logs hema-api-service"
    exit 1
fi