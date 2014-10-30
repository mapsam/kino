Kino
====

Kino is a simplified javascript library for embedding YouTube videos without the junk. Kino works without the YouTube API and effectively repurposes the standard `iframe` embed for multiple videos as well as creating a simple thumbnail navigation.

![Kino video in action](img/kino.png)

### How to use

Kino is comprised of two files: `kino.min.js` and `kino.min.css`. **Include these files in the `<head>` of your page**.

```HTML
<link href="src/kino.css" rel="stylesheet">
<script src="src/kino.js"></script>
```

**Include a `#kino` element in your page**. This element can be sized and positioned however you want and the video player will size to *100%* of the `#kino` element.

```HTML
<div id="kino"></div>
```

**Initiate the Kino object** in your page's javascript file. Here you will pass an array of youtube video URLs under the `videos` parameter to be processed.

```javascript
kino.init({
  videos: [
    'https://www.youtube.com/watch?v=1fzQKMp_tdE',
    'https://www.youtube.com/watch?v=8w1p5UI7Siw',
    'https://www.youtube.com/watch?v=HxaO7lkXIhg',
    'https://www.youtube.com/watch?v=1LMKi3BcrcE',
    'https://www.youtube.com/watch?v=SVgMvJVTjFI'
  ]
});
```

### Notes

* It's important to note the `kino.min.css` can be excluded if you wish. Each element will have an appropriate, accessible class associated to it so you can access and style yourself. Here is a list of all created classes:

```CSS
#kino {}
.kino-player {}
.kino-player iframe {}
.kino-video-list {}
.kino-video-thumb {}
.kino-video-thumb:hover {}
.kino-video-thumb.active {}
.kino-video-thumb img {}
```