#!/bin/bash

show_instructions() {
	echo "Error. Arguments needed. -s(source) PATH -b(backup dir) PATH"
}

check_args() {
	if [ $# == 2 ]; then
		source=$1
		backup=$2

	elif [ $# == 4 ]; then
		if [ $1 == "-s" ]; then
			source=$2
			backup=$4
		elif [ $1 == "-b" ]; then
			backup=$2
			source=$4
		fi
	else 
		show_instructions
		exit 1
	fi
}

back_up_files() {
	if [ ! -d "$source" ]; then
		echo "Error. Source directory does not exist."
		exit 1
	fi

	if [ ! -d "$backup" ]; then
		mkdir -p "backup"
		echo "Backup directory created."
	fi

	shopt -s nullglob

	for file in "$source"/*; do
		cp -r "$file" "$backup"
	done

	echo "copied"
}

check_args "$@"
back_up_files