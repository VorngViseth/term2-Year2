#!/bin/bash

count=0

print_args() {
    echo "Arguments passed to the script:"
    for arg in "$@"; do
        ((count++))
        echo "Argument $count: $arg"
    done
}

print_args "$@"