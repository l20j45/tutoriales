esta utilidad sirve para bajar el peso a las imagenes con un script ayuda para aligerar los proyectos la forma de utilisarla es sencilla


[ImageMin](https://github.com/imagemin/imagemin-cli)

### Uso

```ad-info
icon: npm
title: Uso imagen min
~~~bash
imagemin --help

  Usage
    $ imagemin <path|glob> ... --out-dir=build [--plugin=<name> ...]
    $ imagemin <file> > <output>
    $ cat <file> | imagemin > <output>

  Options
    --plugin, -p   Override the default plugins
    --out-dir, -o  Output directory

  Examples
    $ imagemin images/* --out-dir=build
    $ imagemin foo.png > foo-optimized.png
    $ cat foo.png | imagemin > foo-optimized.png
    $ imagemin foo.png --plugin=pngquant > foo-optimized.png
    $ imagemin foo.png --plugin.pngquant.quality=0.1 --plugin.pngquant.quality=0.2 > foo-optimized.png
    # Non-Windows platforms may support the short CLI syntax for array arguments
    $ imagemin foo.png --plugin.pngquant.quality={0.1,0.2} > foo-optimized.png
    $ imagemin foo.png --plugin.webp.quality=95 --plugin.webp.preset=icon > foo-icon.webp
~~~
```

