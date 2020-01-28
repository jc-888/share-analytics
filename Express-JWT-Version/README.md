# Share Analytics

Deployment: https://music.jaconjcondes.com/

## <center>Walkthrough Update</center>

<p align="center">
<img src="walkthrough.gif" />
</p>

# Verions

Express (MERN - Mongo Express React Node)

Express (JWT Version in progress)

Flask (Python React Flask)

Rails (React on Rails; React + Ruby on Rails)

# Instructions (Express)

1. go into the Express folder
```
cd Express
```

2. install dependencies 
```
npm run install-everything
```

3. AWS auth
```
cd client
amplify init
amplify add auth (if you dont have a AWS amplify project)
```

4. run both front-end and back-end servers
```
cd ..
npm run dev
```

# Instructions (Flask)

1. go into the Flask folder
```
cd Flask
```

2a. install dependencies (front-end)
```
cd react-client
npm install
```

2b. install dependencies (back-end)
```
cd flask-server
pipenv shell
pipenv install
```

3. AWS auth
```
amplify init
amplify add auth
```

4a. run front-end 
```
npm start
```

4b. create db
```
>>> from app import db
>>> db.create_all()
```

4c. run back-end
```
python3 app.py
```

# Instructions (React on Rails)

1. go into the Rails folder
```
cd Rails
```

2. install dependencies 
```
bundle install

cd client
npm install
```

3. AWS auth
```
amplify init
amplify add auth (if you dont have a AWS amplify project)
```

4. run both front-end and back-end servers
```
cd ..
Rails/$ rake start
```

# Description

Give a link you want to have it's clicks tracks and get a link to use to share.

# Tech Stack

#### Front End

- AWS cognito; authentication
- React JS (ES6+) + Typescript
- React Bootstrap
- Chart JS
- Axios
- Redux
- Redux Thunk
- Redux Saga

#### Testing

- Jest
- Enzyme

#### Back End (NoSQL)

- Node JS
- Express JS
- Mongo DB

#### Back End (SQL) - Python

- Python 3
- Flask
- PostgreSQL

# Things to do (MERN)

- remove AWS cognito
- replace with passport js