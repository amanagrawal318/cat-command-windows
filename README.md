# cat-command-windows

documentation of cat command
https://www.tutorialspoint.com/unix_commands/cat.htm

Cat(concatenate) command is very frequently used in Linux. It reads data from the file and gives their content as output. It helps us to create, view, concatenate files.
Cat command is not present in windows cmd. So in this project i have created a cat command for windows cmd which works similar to the linux cat command.
This is mini nodejs project which is made using javascript in node js.

There  are various uses of cat command, some are included in this nodejs project are
 1. To display Contents of File
 2. To View Contents of Multiple Files
 3. To Remove continuous Empty Lines to one(-s)
 4. To Display Line Numbers in File(-n)
 5. To Display Line Numbers of non empty lines in a file(-b)


 Steps to make the cat command global in cmd  are
   1. Firstly we have created json file using command npm int -y
   2. create a bin object inside bin create a key that you use to run your cat cmd in your os and assign the file in which your project is there like script.js to that key.
   3. copy the code at the top of your project  #!/usr/bin/env node
   4. Now go to cmd and run the command npm link
  
  
  with these steps we have created this cat command global in our system so that we can use from any path of the system
