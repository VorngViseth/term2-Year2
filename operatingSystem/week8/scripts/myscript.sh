#!/bin/bash

args=("$@")

my_func() {
	for arg in "${args[@]}"
	do
		if [[ -d  "$arg"  ||  "$arg" == -* ]]; then
			echo "$arg"
		fi
	done
}

my_func
