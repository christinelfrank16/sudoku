# _{Application Name}_

#### _{Brief description of application}, {Date of current version}_

#### By _**{List of contributors}**_

## Description

_{This is a detailed description of your application. Its purpose and usage.  Give as much detail as needed to explain what the application does, and any other information you want users or other developers to have. }_

## Specifications

|Behavior|Input|Output|
|:------|:-----:|:----:|
|program only accepts positive numeric input from user | 4 <br> apple | 4 <br> "invalid input"|
|check that number is < 10| 4 <br> 11 | 4 <br> "invalid input" |
| check that number is not already in current row | 9 (9 already exists in row) <br> 9 (no 9 present)| false <br> true|
| check that selected coordinate is not where a fixed value from board creation is located | 3 at [3,4] (was present at board creation) <br> 3 at [2,3] (empty at board creation)| false <br> true |
| check that number is not already in current column | 9 (9 already exists in column) <br> 9 (no 9 present)| false <br> true|
|checks that each set of 9 squares contains all numbers| contains: 1-9 <br> does not contain 1-9 | true <br> false|
| user input stored and displayed only when board validation checks are passing | row check fails <br> all checks pass | "invalid input" <br> 3 at [2,3] |
|check that board is complete | "submit when not complete" <br> "submit button when board is complete" | "not complete" <br> "congrats" |
|builds a winnable board | none | generates values and makes some empty and some fixed |


## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this app depends on?}_

## Known Bugs

_{Are there issues that have not yet been resolved that you want to let users know you know?  Outline any issues that would impact use of your application.  Share any workarounds that are in place. }_

## Support and contact details

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

## Technologies Used

_{Tell me about the languages and tools you used to create this app. Assume that I know you probably used HTML and CSS. If you did something really cool using only HTML, point that out.}_

### License

*{Determine the license under which this application can be used.  See below for more details on licensing.}*

Copyright (c) 2016 **_{List of contributors or company name}_**
