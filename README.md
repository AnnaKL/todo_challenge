[![Code Climate](https://codeclimate.com/repos/55b3900d6956800b440156f4/badges/192f567a0a2be5a44346/gpa.svg)](https://codeclimate.com/repos/55b3900d6956800b440156f4/feed)   [![Build Status](https://travis-ci.org/AnnaKL/todo_challenge.svg)](https://travis-ci.org/AnnaKL/todo_challenge)


## Todo Challenge

To do list application built with:
* Javascript.
* Angular JS (open source front-end MVC framework).

Tested with:
* Karma (Spectacular Test Runner for Javascript).
* Protractor (end-to-end test framework for AngularJS applications).

## Implemented user stories:

```
As a forgetful person
I want to store my tasks
So that I don't forget them

As a person with limited time
I want to instantly be able to update my todo list (adding and changing entries)
So that I have more time to think about other things

As a person who actually gets stuff done
I want to mark my tasks as done
So that I don't do them twice

As a person with a lot of tasks
I want to be able to filter my tasks by "All", "Active", "Complete"
So that I only see the relevant tasks

As a person who doesn't like counting by hand
I want to see a total number of tasks
So that I don't have to count

As someone who has done lots of stuff
I want to be able to clear my completed tasks
So I never see them again
```


## How to run:

```
git clone git@github.com:AnnaKL/todo_challenge.git
cd todo_challenge
npm start
type http://localhost:8080/ in the browser
```
To run tests:
```
Karma:
karma start test/karma.conf.js

Protractor:
http-server
webdriver-manager start
protractor test/e2e/conf.js
```

## To do:

* Styling
