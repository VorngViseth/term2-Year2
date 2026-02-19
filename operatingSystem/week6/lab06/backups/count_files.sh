#!/bin/bash

count=0

read -p "Enter a path: " path

if [ -z "$path" ]; then
	echo "Error: path is empty"
elif [ ! -d "$path" ]; then
	echo "Error path is not a dir"
else
	for file in "$path"/*; do
		if [ -f "$file" ]; then
			((count++))
		fi
	done

	echo "The number of files in '$path' is : '$count'"
fi
