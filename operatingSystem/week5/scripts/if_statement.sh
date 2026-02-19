#!/bin/bash

echo "greeting"

date

read -p "Enter you name : " NAME

if [ -z "$NAME" ]; then
	echo "/!\ You inputted blank name!"
elif [ "$NAME" == $(whoami) ]; then
	echo "Awsome! Your name is $NAME"
else
	echo "$NAME"
fi
