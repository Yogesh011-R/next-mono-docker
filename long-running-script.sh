#!/bin/sh

echo "Starting long-running process..."
while true; do
    echo "Process running at $(date)"
    sleep 10
done
