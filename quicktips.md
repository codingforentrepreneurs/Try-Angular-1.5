# Quick Tips for Try Angular 1.5


### Emulate a Hosting Server

**Command** `python -m SimpleHTTPServer`

**Assumes**:
    - you have [python](https://www.python.org/) installed globally
    - you're working in a folder with a valid `index.html` file

**What it does**: this command "emulates" a host server for your website on your local machine. The "simulated" web address is one of the following:

- [http://0.0.0.0:8000/](http://0.0.0.0:8000/)
- [http://127.0.0.1:8000/](http://127.0.0.1:8000/)
- [http://localhost:8000/](http://localhost:8000/)


### Starter (Boiler) HTML Code:

```
<!DOCTYPE html>
<html lang="en" ng-app='try'>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Try Angular 1.5</title>
    <body>
    </body>
</html>
```


### Boiler Angular HTML Code:

```
<!DOCTYPE html>
<html lang="en" ng-app>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Try Angular 1.5</title>
    <script src='https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.min.js'></script>
    <body>
    </body>
</html>
```