# YouTube Statistics Bot

This bot is based off of a YouTube video I saw, something along the lines of 'how long does it take for YouTube to recommend alt-right content on a new account'.

I thought there were some things that could have been done better with the way the analysis was done. A lot of the issues could be solved with automation, so I was inspired to make this project.

Essentially, the bot makes a new youtube account and watches to the amount of videos specified in the config. Afterwards, it outputs charts of the data.

This project was made with Typescript, R (and R studio), and various JS libraries which can be found in the package.json file.


pseudocode:

startup:
if not logged in (invalid cookies)
check login details file
if no user details file or it is invalid
do account creation
replace/create user details file & cookies
if there is a user file,
login and get new cookies
 
main process:
find video
gather details
watch video
report to spreadsheet
repeat

 
 
