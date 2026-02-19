#!/bin/bash

option=0;

while [[ "$option" != [qQ] ]]; do

echo "[1] to use the count file program."
echo "[i] to show about this program"
echo "[q] to quit this program"
echo "[b] to backup your files"
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
	./count_files.sh
	;;
b|B)
	./backup_files.sh
	;;
*)
	echo "Invalid option"
	;;
esac

done
