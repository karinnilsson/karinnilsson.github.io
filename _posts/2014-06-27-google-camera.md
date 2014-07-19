---
layout: post
title:  "The Google Camera"
date:   2014-06-27 16:37:58
categories:
---

A couple of weeks ago, Google released their _Google Camera_ app, which is a standalone Android camera app from the regular one included in AOSP. Not my favorite move, since i am not a fan of being more and more tied in to the Google ecosystem. 

However, it does include some cool tech which regardless made me install it. By taking a photo in a continuous tilting motion, you do not only get a bitmap photo, but a depth-map of what you are portraying. 

This can be used in several ways, and the app uses it to apply a fake bokeh effect on the proto, to convey depth in the image. It is suprisingly effective, and sometimes can get really pretty results.

<a class="lightbox" href="/blogassets/bokeh.jpg">
    <img class="blogImage" src="/blogassets/bokeh.jpg" alt=""/>
</a>

<p class="imageText">
	(Sorry, this near plastic plant at <a href="http://ctk.se/">@CTK</a> was the most interesting subject at hand...)
</p>

While the effect is not perfect in this image, you can clearly see that there is some non-trivial processing going on here, that determines what leaves are at what length from the camera.  

Here is the depth-map of the photo: 

<a class="lightbox" href="/blogassets/bokehmap.jpg">
    <img class="blogImage" src="/blogassets/bokehmap.jpg" alt=""/>
</a>

<p class="imageText">
	As you can se it is pretty rough, perhaps the fault of the aging camera and processing capabilites of my phone. I extracted this using the <a href="http://depthy.me/#/">depthy.me</a>  web tool, that can grab the image with depth data from your phone. Also check out the <a href="https://github.com/panrafal/depthy">Github repo</a>, cool stuff!
</p>



What is really interesting though, is the apps that extract the raw depth information and coordinates it with the gyroscope, such as this live background. _(Click to zoom)_

<div style="text-align: center">
<video class="blogVideo" width="224"  loop autoplay>
  <source src="/blogassets/wiggle.mp4" type="video/mp4">
   <source src="/blogassets/wiggle.webmhd.webm" type="video/webm">
</video>
</div>

Pretty cool if you do not mind the minor glitches (again, perhaps the fault of my aging device). The fun is over though when you realise how much this kills your battery life.

Try it out by downloading _Google Camera_ and and _Depth Photo Live Wallpaper_ from the Play Store. (Android 4.4 Kitkat and a gyroscope required)