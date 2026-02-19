#!/bin/bash

echo "[1] to use the count file program."
echo "[i] to show about this program"
echo "[q] to quit this program"

read -p "Enter an option: " option

case "$option" in
q|Q)
        echo "Exiting.."
        exit 1
	;;
i|I)
        echo "This program allow you to choose between 3 options and one option can count how many files in your inputted dir."
        echo  "date of creation (last modification) of the script : $(date +%Y)"
        echo "Owner : LancD"
        echo "version 0.1"
	;;
1)
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
	;;
*)
	echo "Invalid option"
	;;
esac
