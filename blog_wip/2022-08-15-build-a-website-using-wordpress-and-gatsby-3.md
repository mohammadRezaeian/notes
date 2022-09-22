---
layout: blog
title: "How to build a website with Wordpress as backend and Gatsby as frontend"
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
2. When we change something in the theme or in the Wordpress site and push it to github, the server detects it and rebuild the site.
3. Same as 2 but this time, the server only parts related to the changes.



## Options to choose

1. You can build your site locally and publish the `public/` folder to github. The rest will be handled by Github Pages or Netlify to serve your HTML files. This option supports only WWW1, your site is really static, you have to build manually each time the site has something new.
   - **Pros**: It's free and the time of deploy is too quick (because the server just publish the HTML files).
   - **Cons**: Everything else the deployment is performed manually!
2.

A server for these purposes is not totally free. If your website grows, you have to pay for the running server. Therefore, we have 2 options in this case:

1. Manually build your site on local and use Github Pages (or free Netflify service) to serve your static site (in HTML formats).
2. Use a free service to host your site (Gatsby Cloud, Netlify,... They all have free tiers). Think of paid tiers when your website grows.
3. Pay what you need.



```bash
npm run build # gatsby build
```



Resize images

```bash
# https://stackoverflow.com/a/73729489/1323473
brew install imagemagick
magick mogrify -path out -resize 1280x1080\> *
```

[Compress image](https://www.iloveimg.com/compress-image)



Nhớ chỉnh setting > media > bỏ bớt option generate auto images + bỏ option upload vào sub folder!

GraphiQL IDE -> check post name + post id + feature image

Lưu ý: `first:100` là maximum 100 by default! <- because can lead to client and server performance issues. This is why WPGraphQL limits to a max of 100 nodes by default ([ref](https://wordpress.org/support/topic/graphiql-ide-get-more-results-in-query/)) -> [increase this number](https://www.devtwins.com/blog/wpgraphql-increase-post-limit) (be careful, just do on local!)

```graphql
{
  posts(where: {orderby: {field: DATE, order: DESC}}, first: 100) {
    nodes {
      databaseId
      title
      featuredImage {
        node {
          slug
        }
      }
    }
  }
}
```



Local có sẵn `wp-cli`!!!!

---

Local > open site shell > (have php installed) > [install wp-cli](https://wp-cli.org/#installing) > just follow download + run

```bash
php wp-cli.phar --info
chmod +x wp-cli.phar
```

that's enough -> check `wp --info`

---

Upload + attach + set featured image to a post

```bash
wp media import --post_id=6804 --featured_image /Users/thi/Downloads/math2it/uploads_resize/geometry1.jpg
```



```bash
brew install php
brew install mysql
brew install wp-cli

# check
wp --info
php --version
mysql --version
```



`wp-cli.local.yml`

```bash
path: app/public
require:
  - wp-cli.local.php
```

`wp-cli.local.php` (change the socket path)

```php
<?php
define('DB_HOST', 'localhost:/Users/thi/Library/Application Support/Local/run/tYPsK7Qf_/mysql/mysqld.sock');
define('DB_USER', 'root');
define('DB_PASSWORD', 'root');

// Only display fatal run-time errors.
// See http://php.net/manual/en/errorfunc.constants.php.
error_reporting(1);
define( 'WP_DEBUG', false );

```



KHÔNG CẦN CÀI Ở TRÊN -> Copy file `assign_featured_images.py` to source folder of site  => local -> Open Site Shell

```bash
python assign_featured_images.py 5 6
```



Next: check posts containing `img` -> auto replace

https://apidocs.imgur.com/#de179b6a-3eda-4406-a8d7-1fb06c17cb9c <- return <- [doc](https://apidocs.imgur.com/)



Next: using imgur api to auto upload + using `re` to auto [replace img url using wp-cli (khó???)](https://developer.wordpress.org/cli/commands/search-replace/)! <- https://helgeklein.com/blog/regex-search-replace-in-wordpress-posts-with-wp-cli/
