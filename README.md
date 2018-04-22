## 0. Make sure this is a git repo

```
git init .

git add -A

git commit -sm "commit message"

```


## 1. Install Heroku CLI

Login to Heroku

```
heroku login
```
Note: Does not work on Git Bash for Windows. Use Powershell or CMD. 

## 2. Create App

```
heroku  apps:create your-app-name
```

## 3. Publish to Heroku

Commit latest changes

```
git add -A
git commit -sm "update to latest code"
```

NOTE: If `heroku` git remote does not exist, then
```
git remote add heroku https://git.heroku.com/your-app-name.git
```



Publish to heroku

```
git push heroku master
```

## 4. Open Your project

https://your-app-name.herokuapp.com 

