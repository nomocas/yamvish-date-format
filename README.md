# yamvish-date-format

[dateFormat](http://stevenlevithan.com/assets/misc/date.format.js) plugin for [yamvish](https://github.com/nomocas/yamvish).
(format syntax docs : http://blog.stevenlevithan.com/archives/date-time-format)

## install

As it comes as an CommonJS module usable with browserify by example, simply install it with npm in your project folder, where you have previously installed yamvish.
```
npm i yamvish-date-format --save
```

## Example

```javascript
var y = require('yamvish');
require('yamvish-date-format');

var view = new y.View({
	data:{
		title: 'hello world',
		date: new Date()
	}
})
// filter 'myArr' (from context of course) with RQL and store result in 'myFilteredArr' (in context of course)
.div('{{ title }} - {{ date | dateFormat('dd/mm/yy') }}')
// mount view somewhere
.mount('#anID');
```

## Licence

The [MIT](http://opensource.org/licenses/MIT) License

Copyright (c) 2015 Gilles Coomans <gilles.coomans@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

