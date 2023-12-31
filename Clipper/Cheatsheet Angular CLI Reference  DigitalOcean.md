---
page-title: "Cheatsheet: Angular CLI Reference | DigitalOcean"
url: https://www.digitalocean.com/community/tutorials/angular-angular-cli-reference
date: "2023-12-31 12:10:28"
---
---

> ### [Introduction](https://www.digitalocean.com/community/tutorials/angular-angular-cli-reference#introduction)
> 
> Here’s a cheat sheet that will help you find the commands you need for most of the things that you would want to do with the Angular CLI. [For a brief introduction to the Angular CLI you can explore this tutorial](https://www.digitalocean.com/community/tutorials/angular-angular-cli).
> 
> ## [Checking the Version](https://www.digitalocean.com/community/tutorials/angular-angular-cli-reference#checking-the-version)
> 
> See which version of the CLI you’re using:
> 
> ### [Updating the Version](https://www.digitalocean.com/community/tutorials/angular-angular-cli-reference#updating-the-version)
> 
> Run this:
> 
> ## [Help](https://www.digitalocean.com/community/tutorials/angular-angular-cli-reference#help)
> 
> Get general help:
> 
> Or get help for a specific command:
> 
> ## [New Project](https://www.digitalocean.com/community/tutorials/angular-angular-cli-reference#new-project)
> 
> Generate a new project:
> 
> And here are a few flags you can use:
> 
> -   `--dry-run`: See which files would be created, but don’t actually do anything.
> -   `--verbose`: Be more chatty.
> -   `--skip-install`: Don’t `npm install`, useful when offline or with slow internet.
> -   `--skip-tests`: Don’t create spec files.
> -   `--skip-git`: Don’t initialize a git repo.
> -   `--source-dir`: Name of the source directory
> -   `--routing`: Add routing to the app.
> -   `--prefix`: Specify the prefix to use for components selectors.
> -   `--style`: Defaults to `css`, but can be set to `scss`.
> -   `--inline-style`: Use inline styles for components instead of separate files.
> -   `--inline-template`: Use inline templates for components instead of separate files.
> 
> Here’s an example with a few flags:
> 
> ## [Generate All The Things](https://www.digitalocean.com/community/tutorials/angular-angular-cli-reference#generate-all-the-things)
> 
> Generate a component:
> 
> Generate a service:
> 
> Generate a pipe:
> 
> Generate a directive:
> 
> Generate an enum:
> 
> Generate a module:
> 
> Generate a class:
> 
> Generate an interface:
> 
> Generate a route guard:
> 
> The `--dry-run` and `--verbose` flags can be used with any generate command.
> 
> ## [Serving](https://www.digitalocean.com/community/tutorials/angular-angular-cli-reference#serving)
> 
> Serve your project
> 
> Serve and open in your default browser automatically:
> 
> Serve to a different port:
> 
> ## [Running Your Tests](https://www.digitalocean.com/community/tutorials/angular-angular-cli-reference#running-your-tests)
> 
> And some flags you can use with the `test` command:
> 
> -   `--watch`: Retest when some files change.
> -   `--code-coverage`: Add a coverage report.
> -   `--progress`: Show the progress while running the tests.
> -   `--browsers`: Specify which browsers to use.
> -   `--colors`: Use colors in the output or not.
> 
> ## [Linting](https://www.digitalocean.com/community/tutorials/angular-angular-cli-reference#linting)
> 
> Run the linter:
> 
> A few flags for the linter:
> 
> -   `--fix`: Apply fixes for linting errors.
> -   `--force`: Force success even when linting fails.
> 
> ## [Building Your App](https://www.digitalocean.com/community/tutorials/angular-angular-cli-reference#building-your-app)
> 
> Build your app with the `build` command:
> 
> And here are some flags that you can use with **build**:
> 
> -   `--target`: Specify the target for the build (e.g.: `--target production`).
> -   `--aot`: Use ahead of time compilation.
> -   `--base-href`: Specify the base href to use.
> -   `--deploy-url`: Specify the deployment url.
> -   `--extract-css`: Put the global styles in a CSS file instead of keeping it in the JavaScript.
> -   `--watch`: Rebuild every time a file changes.
> 
> ## [Ejecting Your Webpack Config](https://www.digitalocean.com/community/tutorials/angular-angular-cli-reference#ejecting-your-webpack-config)
> 
> The Angular CLI doesn’t do it for your project anymore? Just eject, and you’ll have the full Webpack config available to tweak to your heart’s desire:
---