#!/bin/bash

args=("$@")
num=1

for arg in "${args[@]}"
do
	if [ -d  "$arg" ]; then
		echo "$arg"
	fi
	((num++))
done
