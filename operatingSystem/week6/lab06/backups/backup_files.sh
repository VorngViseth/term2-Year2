#!/bin/bash

count=0

read -p "Enter source Dir: " source

read -p "Enter backup Dir: " backup

if [ ! -d "$source" ]; then
	echo "Error: Source directory does not exist."
	exit 1
fi

if [ ! -d "$backup" ]; then
	mkdir -p "backup"
	echo "Backup directory created."
fi

shopt -s nullglob

for file in "$source"/*; do
	cp "$file" "$backup"
	((count++))
done

echo "Total file copied : $count"
