---
id: 6
slug: how-to-install-php-7-3-in-ubuntu-18-04
published: true
title: How to install PHP 7.3 in Ubuntu 18.04
date: '2019-10-08 16:59:08 +0530'
date_gmt: '2019-10-08 16:59:08 +0530'
image: '/06/featured.jpg'
category: Ubuntu
tags:
  - Ubuntu
  - php
  - Debian
---

In this tutorial we will see how to install PHP version 7.3 in Ubuntu 18.04. Currently Ubuntu 18.04 support PHP version 7.2 officially in their repository. There are some situation we are required to install version 7.3.x. For example Wordpress latest version required PHP 7.3 or above.

Developer Ondřej Sur&yacute; maintain's the unsupported versions of PHP in [Launchpad](https://launchpad.net/~ondrej). Let's thanks for his work.

### Add PPA repository

```
sudo add-apt-repository ppa:ondrej/php
sudo apt update
```

Now PHP version 7.3 could be installed in Ubuntu 18.04

### Install PHP 7.3 for Nginx

`sudo apt install php7.3-fpm`

### Install PHP 7.3 for Apache

`sudo apt install php7.3`

Execute that following command to confirm the php version.

`php -v`

PHP 7.3 version is successfully installed on your server.

Please let me know if you encounter any issue in the comment section below.
