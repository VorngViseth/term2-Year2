#!/bin/bash

#read -p "Enter a number : " NB
#if [ "$NB" -gt 10 ]; then
#	echo "NB is greater than 10"
#fi

read -p "Enter a number for A : " A
read -p "Enter a number for B : " B

if [ "$A" -gt "$B" ]; then
	echo "A is greater than B"
else 
	echo "B is greater than A"
fi
