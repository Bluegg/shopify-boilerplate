Shopify Boilerplate
======================
This repository provides a suggested directory structure and [Grunt](http://gruntjs.com) configuration for making the Shopify theme development process as smooth as possible. It was forked from
[this repo](https://github.com/discolabs/shopify-theme-scaffold) by the folks at Disco.

It ships with a few sample theme files, that demonstrate how the scaffold works. You should be able to slot any number of existing themes or theme frameworks in.

## Set up

*You'll need the [Shopify Theme Gem](https://github.com/Shopify/shopify_theme), `nodejs` and `npm`.*

- Set up a new remote repo (e.g On Github or Bitbucket)
- Fork this repo. Clone it locally. Then do the following to break the relationship to this repo:

```shell
# Set up the new remote
git remote add new-origin git@github.com:user/new-repo.git
# Push all local branches and tags
git push --all new-origin
git push --tags new-origin
# View existing remotes (you'll see 2 remotes for both fetch and push)
git remote -v
# Remove origin
git remote rm origin
# Rename "new repo" remote into just 'origin':
git remote rename new-origin origin
```

- Go to your Shopify dev store and set up a new private app
- Get the API Key, password etc
- Run the Theme Gem bootstrap command:

```shell
theme bootstrap API_KEY API_PASSWORD STORE THEME_NAME
```

- Find and replace YOUR_THEME_NAME to be the same as the theme name you used to bootstrap the theme (this will update Gruntfile.js, .gitgnore)(you should have a new directory by this name in your root directory)
- npm install
- run `grunt clean` to remove all the them files the bootstrap command created
- in the directory named after your theme, run the Theme Gem Watch (`theme watch`) command
- in the root dir, run `grunt`

The theme should now be pushing and updating the remote theme on Shopify


## Grunt Tasks

`grunt build` will compile all your JS and SCSS, minify images blah, blah, etc
`grunt` will do all that and run a watch task
`grunt icon` will compile the icons into Base64 BG images in a SCSS file
`grunt clean` will delete all the files in the build directory except the config.yml file. __*GO CAREFULLY AS THIS DELETES THINGS!*__
