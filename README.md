# HuffPost Project

## Project setup
```
1. create dev.js file inside of "./server/config" folder
2. place in mongoDB information into dev.js file 
3. create "./uploads" folder to main directory
4. Type  " npm install " inside the "./server" directory  to download Server dependencies
5. Type " npm install " inside the "./client" directory to download Client dependencies
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Scripts
```
"scripts": {
    "start": "node server/index.js",
    "backend": "nodemon server/index.js",
    "build": "cd client && npm run build",
    "heroku-postbuild": "npm run install-client && npm run build",
    "frontend": "npm run start --prefix client",
    "dev": "concurrently \"npm run backend\" \"npm run start --prefix client\""
  }
```

### For Questions
```
See Live:
https://huffpostclone.herokuapp.com
```
### For Questions
```
Linkedin Account:
https://www.linkedin.com/in/barış-yıldırım-933375194
```
```
Gmail Account:
yildrmbaris@gmail.com
```
