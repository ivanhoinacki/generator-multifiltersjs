MultiFilters JS
=========

Select multiple input of the same group to perform a filter that is made via js

<img align="right" height="150" src="http://bower.io/img/bower-logo.png">

## Bower.io

This package is available on Bower.

#### Install Bower.io

```sh
$ npm install -g bower
```

#### Installing

```sh
# install a package and add it to bower.json
$ bower install generator-multifiltersjs --save
```

Bower depends on [Node.js](http://nodejs.org/) and [npm](http://npmjs.org/). Also make sure that [git](http://git-scm.com/) is installed as some bower
packages require it to be fetched and installed.

#### Usage

[DEMO](http://ivanhoinacki.github.io/generator-multifiltersjs/)

Call the plugin on any input you want to track and tell it what to look for with a data-col attribute:

```js
$(document).ready(function() {
  $('#formGroupFilters .form-control').multifiltersJS({
    'target' : $('#table-dados')
  });
})
```
As long as the data-col attribute matches up with something in the <thead>, it will filter the content in those columns in the table:

```html

data-col='Filter1'

data-col='Filter2'

data-col='Filter3'

```

```html
<div class="form-group" id="formGroupFilters">
  <div class="control-group">
    <label for="txt-filter1" class="control-label">Filter1</label>
    <div class="controls">
      <input type="text" id="txt-filter1" name="txt-filter1" class="form-control" data-col='Filter1'>
    </div>
  </div>

  <div class="control-group">
    <label for="filter2" class="control-label">Filter2</label>
    <div class="controls">
      <input type="text" id="txt-filter2" name="txt-filter2" class="form-control" data-col='Filter2'>
    </div>
  </div>

  <div class="control-group">
    <label for="txt-filter3" class="control-label">Filter3</label>
    <div class="controls">
      <input type="text" id="txt-filter3" name="txt-filter3" class="form-control" data-col='Filter3'>
    </div>
  </div>
</div>
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Test your changes to the best of your ability.
4. Update the documentation to reflect your changes if they add or changes current functionality.
5. Commit your changes (`git commit -am 'Added some feature'`)
6. Push to the branch (`git push origin my-new-feature`)
7. Create new Pull Request

## Creator

Created by [Ivan Augusto Hoinacki](http://ivanhoinacki.com)

## License

[MIT License](http://ivanhoinacki.mit-license.org/) © Ivan A. Hoinacki
