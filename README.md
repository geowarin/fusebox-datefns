## Bundle subpackages in vendors problem

```
yarn
yarn start
```

This will generate two bundles: `dist/index.js`, `dist/vendor.js`.

Open index.html in a browser.
It should print the date in french.

Instead it fails like this:


![image](http://i.imgur.com/4QNJtFT.png)

The problem is I did not find a way to include `date-fns/locale/fr` in
`vendor.js`.

See [this config](https://github.com/geowarin/fusebox-datefns/blob/270de01e5290517650c1618f7c8f20dbeb47c5cb/fuse.js#L8-L8)