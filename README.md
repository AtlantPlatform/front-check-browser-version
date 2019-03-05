# front-check-browser-version

## Установить:
```
npm i -S git+ssh://git@github.com:AtlantPlatform/front-check-browser-version.git
```
## Добавить в проект:
### Через вебпак:
Вставить в entry point
```
module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: [
      'babel-polyfill',
      'check-browser-version',
      './src/main.js'
    ]
  },
```
### Либо через файл инициализации vue:
Первой строчкой:
```
import 'check-browser-version';
```
