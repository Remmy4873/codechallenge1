

# Student Grade Calculator

This project contains a javascript function to calculate and display a student's grade based on their marks. The grade is determined according to the following criteria:

1. Marks greater than 79
2. Marks between 60 and 79
3. Marks between 50 and 59
4. Marks between 40 and 49
5. Marks less than 40

# How it Works
1. Open the vscode terminal
2. Run the script using the command: node index.js
3. Enter the student marks between  0 and 100
4. The script should display according to corresponding grade

# Speed Detector calculator
This script calulates the demerits points for a drivers speed and the speed limit

#How it works
The program defines a function calculatePoints that takes speed as input

It then checks, if the speed is less than or equal to the speed limit which is for now 70 and if so, it prints "ok" indicating that there are points

If not so, the script calculates the excess speed by subtracting the speed limit from the entered speed 

It then calculates demerits points by rounding down (using Math.floor) the excess speed divided by 5

it then checks if the demerits points exceed 12 and if it does exceed, it prints "License suspended".

Otherwise, it prints the number of demerits points received

# Net Salary Calculator
This script calculates the individual's net salary in Kenya

The code : calculates gross salary by adding basic salary and benefits.
It then calculates deduction based on Paye, NHIF and NSSF rates 
It goes on to calculate the net salary by subtracting deductions from gross salary

the results is displayed on the console.

# Display/Output
The propmt should display 
1. Gross salary
2. PAYE deductions
3. NHIF deductions
4. NSSF deductions
5. Total deductions
6. Net salary
