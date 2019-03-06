# fast_tracker
Spend less time tracking your tasks; less tracking, more tasking.
## the why and how
There are already good ways to track tasks over time, but this one is built to be faster (i.e., spend less time tracking the task). “But how,” you may ask. Here’s how:
- Assuming you live in the terminal, fast_tracker keeps you from having to switch to another window (be it a spreadsheet or notes app).
- Operating in the CLI, all CRUD actions will be macro driven.  Macros are what separate the super-users from the users.  Super-users get things done faster.  With fast_tracker you will get things done faster.
## stack(s on stacks on stacks)
- mongoDB
- Expess
- Node.js
- Heroku (only if this thing works locally, and if I’m feelin’ it)
- mLab (if Heroku setup is too finicky)
# usage
Log a task: `ftrk <task> <detail>`
- A line item will be created: `index | date | timestamp | task | detail`
- The first 3 columns are auto-generated
- `date` is ISO format yyyy-mm-dd

Print tasks: `ftrk -p <date>`
- All items from this date will be printed from most recent to earliest.

Update task: `ftrk -u <index>`

Delete task: `ftrk -df <index>`
- If `-f` flag omitted, line will be printed, and a <y/n> prompt will show. 
## references
- [mLab (database-as-a-service, specifically for mongoDB)](https://mlab.com)
- [this API tutorial using Node.js / Express / mongoDB](https://medium.com/@dinyangetoh/how-to-build-simple-restful-api-with-nodejs-expressjs-and-mongodb-99348012925d)
