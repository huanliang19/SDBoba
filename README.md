npm install gh-pages --save-dev
"homepage" : "https://huanliang19.github.io/SDBoba/"
"predeploy":"npm run build"
"deploy":"gh-pages -d build"

npm run deploy