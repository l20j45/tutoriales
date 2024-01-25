

```ad-info
icon: css
title: Mixins varios
~~~sass
@use '../custom'as *;

@mixin bgImage($url, $color) {
    background-image: linear-gradient(transparentize($color, .3%) 0%, transparentize($color, .3%) 100%), url($url);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
}

@mixin background-image($url) {
    background-image: linear-gradient(to right, rgb(0 0 0 / .7), rgb(0 0 0 / .7)), url($url);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
}

@mixin headingBorder($color, $colorLinea) {
    color: $color;
    display: inline-block;
    margin-top: 5rem;

    @include media-breakpoint-up(md) {
        margin-top: 0;
    }

    &::after {
        content: '';
        height: 1rem;
        width: 100%;
        background-color: $colorLinea;
        display: block;
        margin-top: -1.5rem;
    }

}

@mixin bgIcono($url) {
    background-image: url($url);
    background-size: 10rem;
    background-position: 50% 2rem;
    background-repeat: no-repeat;
}
~~~

```

