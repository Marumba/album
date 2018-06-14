### A React + Redux solution for Superbid front end test, album app.###

### HOW TO USE IT ###
* npm install
* npm run dev
* [localhost](http://localhost:8080)


### STRUCTURE ###

```bash
│   .babelrc
│   package.json
├───client
│   │   index.js
│   │   reducers.js
│   │   routes.js
│   │   
│   ├───App
│   │       index.js
│   │       layout.js
│   │       routers.js
│   │       store.js
│   │       
│   ├───component
│   │   ├───Breadcrumbs
│   │   │       index.js
│   │   │       
│   │   ├───Card
│   │   │       index.js
│   │   │       
│   │   ├───Footer
│   │   │       index.js
│   │   │       
│   │   ├───Form
│   │   │       form.js
│   │   │       input.js
│   │   │       select.js
│   │   │       
│   │   ├───Header
│   │   │       index.js
│   │   │       
│   │   ├───Loader
│   │   │       index.js
│   │   │       
│   │   ├───Overlay
│   │   │       index.js
│   │   │       
│   │   ├───Page
│   │   │       index.js
│   │   │       
│   │   ├───Section
│   │   │       index.js
│   │   │       
│   │   └───Sidebar
│   │           index.js
│   │           
│   ├───container
│   │   ├───AddressList
│   │   │       index.js
│   │   │       
│   │   ├───Home
│   │   │       index.js
│   │   │       
│   │   ├───Main
│   │   │       index.js
│   │   │       
│   │   ├───NotFound
│   │   │       index.js
│   │   │       
│   │   ├───OrderHistory
│   │   │       index.js
│   │   │       
│   │   ├───Profile
│   │   │       index.js
│   │   │       
│   │   └───Wishlist
│   │           index.js
│   │           
│   ├───ducks
│   │       profile.js
│   │       
│   ├───scss
│   │       main.scss
│   │       normalize.css
│   │       _animations.scss
│   │       _breadcrumbs.scss
│   │       _card.scss
│   │       _form.scss
│   │       _icons.scss
│   │       _layout.scss
│   │       _loader.scss
│   │       _typography.scss
│   │       _variables.scss
│   │       
│   └───utils
├───config
│       config.js
│       postcss.config.js
│       sass-loader.js
│       webpack.config.devClient.js
│       webpack.config.devServer.js
│       
├───public
│   │   favicon.png
│   │   
│   └───images
│       │   
│       └───icons
│               icon-arrow-right.svg
│               
└───server
    │   app.js
    │   index.js
    │   populate.js
    │   
    ├───controllers
    │       ProfileController.js
    │       
    ├───models
    │       Profile.js
    │       
    ├───routes
    │   │   index.js
    │   │   
    │   └───api
    │           profile.js
    │           
    └───source
            index.js
```
