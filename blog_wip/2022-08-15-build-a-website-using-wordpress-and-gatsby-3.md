---
layout: blog
title: "Build a website with Wordpress and Gatsby"
description: "Take the power of the blocks in the editor of Wordpress and the speed of a static website of GatsbyJS."
tags: [Web Dev, Wordpress, GatsbyJS, Static Site Generators, CMS]
toc: true
math: false
part: 3
basePartUrl: build-a-website-using-wordpress-and-gatsby
partName: "Cleaning WP & Depployment"
keywords: "math2it wordpress website ssg static site generator cms tailwind css deploy localhost github netlify cloud server production"
date: 2022-09-20
---

All of the previous steps are performed totally on local (*math2it.local* and *localhost:8080*). We have to make the same things for *math2it.com*.

## What we want (WWW)

1. A server hosts our website, like local hosts `http://localhost:8000`.
2. When we change something in the theme (by pushing to Github) or in the Wordpress site, the server detects them and rebuild the site.
3. Same as 2 but this time, the **server rebuilds only parts related to the changes**.

## Options to choose

1. You can build your site locally and publish the `public/` folder to github. The rest will be handled by Github Pages or Netlify to serve your HTML files. This option supports only WWW1, your site is really static, you have to build manually each time the site has something new.
   - **Pros**: It's free and the time of deploy is quick (because the server just publishes the HTML files).
   - **Cons**: Everything else the deployment is performed manually!
2. Let a service like Netlify or Gatsby Cloud to build and serve your site, nothing is performed on local.
   - **Pros**: All are automatically, all of 3 WWWs are satisfied.
   - **Cons**: the building time is long and the usage is limit. The site need to be built again whenever the server detects some changes (even if you only change the title of some WP post). **This is the big disadvantage of using Gatsby in case of free/low-cost use**. You also have to have another sever to host your WP site.

::: info

==**In this post, I'll do everything to reduce the cost of deployment!**== If you have other ideas who work better, please let me know in the comment below.

:::

::: tip

Instead of Gatsby, you can check [Next.js](https://nextjs.org/), another SSG (also based on React) which supports [Incremental Static Regeneration](https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration) (only build what changes, not the whole site).

:::



## Cleaning your Wordpress site

When Gatsby builds your site, plugin `gatsby-source-wordpress` will fetch all data from your WP site including the media which is the most heavy thing. When developing with Local and everything on your machine, the building process seems work quite fast but when we use online services to build and deploy your site, Gatsby needs more time than that.

That's why we need to reduce the size of our WP site.

::: warning

The methods I use in this post are "the hard ways". They work well with my site which has around 150 posts and it has not so many images.

:::

### Turn off auto-generating thumbnails for images

When you upload an image to the media library of WP, all of "neccessary" thumbnails (different sizes and reso) will be generated automatically based on both of the setting of you WP site and the theme your site is using. You don't need these thumbnails in your Gatsby site. **When Gatsby fetch the images, they fetch the original images from your WP site** and it will generate itself the thumbnails when building.

I use [reGenerate Thumbnails Advanced](https://wordpress.org/plugins/regenerate-thumbnails-advanced/) to re-generate all of the current images on my site and remove all of the thumbnails. To prevent the generation when you upload new images in the future, you can use [Stop Generating Unnecessary Thumbnails](https://wordpress.org/plugins/image-sizes/) plugin.

### Resize and compress the featured images

When you upload an image to the WP Library, this image may be heavy (in Mbs). It's best practice to resize and compress it before uploading to your site but how about the ones you have uploaded?

I use [`imagemagick`](https://imagemagick.org/) to resize the images to `1280x1080` max of width and height and skip ones below this threshold.

```bash
# Resize all images in the current folder and put the new images in ./out/
magick mogrify -path out -resize 1280x1080\> *
```

In order to compress the images, you can use [iloveimg](https://www.iloveimg.com/compress-image) website.

### (Optional) Take all originally featured images from subfolders

If WP Amin > Settings > Media > "Organize my uploads into month- and year-based folders" is checked (ususally, it's checked by default), whenever you upload a new image, it will be placed in a subfolder like `2022/09/21/`. So, if you want to find a featured image of a post to resize and compress, you have to know to which it belongs. It's




