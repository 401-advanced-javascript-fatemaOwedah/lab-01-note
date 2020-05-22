
## LAB - Class 04
### Project: Notesty
### Author: Fatema Owedah

### Links and Resources

- [submission PR](https://github.com/401-advanced-javascript-fatemaOwedah/lab-01-note/pull/7)
- [Git Hub action](https://github.com/401-advanced-javascript-fatemaOwedah/lab-01-note/actions)


#### Documintation

### Modules
#### `notes.js`
#### `input.js`

### Setup

#### `minimist`
#### `estlint`
#### `jest`
#### `mongoose`
#### `@code-fellows/supergoose`

#### How to initialize/run your application 

-  `node index.js -a 'your note' --category 'category type'`
  -Returns object
-  `node index.js --add 'your note' --category 'category type'`
  -Returns object
-  `node index.js --delete 'id'`
  -delete from database
-  `node index.js --list `
  -show all note in database
-  `node index.js --list 'category'`
  -filter note in database and shown the same category.
-  `node index.js --update 'id' --new 'the new note'`
  -update the note which have this id in data base and change it.



#### How do I install the app or library
- npm init -y
- npm i -D jest
- npm i eslint
- npm i minimist
- npm i mongoose
- npm i @code-fellows/supergoose

#### Tests

- Lint Tests: `npm run lint`
- jest Tests: `npm test`

#### UML

![UML Digram](/assest/lab4.jpeg)