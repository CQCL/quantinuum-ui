cp ../../common/tokens.css ./source/_static/tokens.css
rm -rf ./build

make html
npx serve ./build/html
