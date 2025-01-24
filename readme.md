# YouTube Statistics Bot


This bot is based off of a YouTube video I saw, something along the lines of 'how long does it take for YouTube to recommend alt-right content on a new account'.

I thought there were some things that could have been done better with the way the analysis was done. A lot of the issues could be solved with automation, so I was inspired to make this project.

Essentially, the bot makes a new youtube account and watches to the amount of videos specified in the config. Afterwards, it outputs charts of the data.

This project was made with Typescript, Python, and various libraries which can be found in the package.json file and .venv folder.


pseudocode:

if not logged in
attempt login
if no user details file or it is invalid
do account creation
replace/create user details file
#   y t - s t a t - b o t  
 