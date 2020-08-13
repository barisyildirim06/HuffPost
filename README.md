Hello, My Friends  
Thank you for having interest in this repository ! 

To use this application, 

1. make dev.js file inside config folder 
2. put mongoDB info into dev.js file 
3. Type  " npm install " inside the root directory  ( Download Server Dependencies ) 
4. Type " npm install " inside the client directory ( Download Front-end Dependencies )


"scripts": {
    "start": "node server/index.js",
    "backend": "nodemon server/index.js",
    "build": "cd client && npm run build",
    "heroku-postbuild": "npm run install-client && npm run build",
    "frontend": "npm run start --prefix client",
    "dev": "concurrently \"npm run backend\" \"npm run start --prefix client\""
  }

If you have problem, feel free to ask me ^^ 

You can watch the tutorial for this app.

https://www.youtube.com/channel/UCFyXA9x8lpL3EYWeYhj4C4Q?view_as=subscriber


