#!/bin/bash

args=("$@")
num=1

for arg in "${args[@]}"
do
	echo "$num is $arg"
	((num++))
done
