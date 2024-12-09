---
id: 2
slug: how-to-setup-a-firewall-with-ufw-on-ubuntu-18-04
published: true
title: How to setup a Firewall with UFW on Ubuntu 20.04
date: '2018-07-16 13:45:33 +0530'
date_gmt: '2018-07-16 13:45:33 +0530'
image: '/02/featured.jpg'
category: Ubuntu
tags:
  - Linux
  - Ubuntu
---

UFW - Uncomplicated Firewall provides a user friendly way to create an IPv4 or IPv6 host-based firewall which helps a regular user to deny all incoming connections without much configuration.

UFW comes with Ubuntu by default. In case it is not installed or removed for some reason, run the following command to install it:

```
sudo apt install ufw
```

UFW is disabled by default. Before we enable it, let's check it for any existing rule.

```
sudo ufw status
```

It shouldn't be having any rules yet. Before we enable it, we should add set the rule to allow ssh connection. To do that let's run the command below. Which will add the rule to allow connection from port 22.

```
sudo ufw allow ssh
```

If your ssh server is configured to use different port, run the following command, instead of previous one.

```
sudo ufw allow 2222
```

Now let's enable UFW. Run the following command.

```
sudo ufw enable
```

You will get the warning of existing ssh connection disruption. Since we already set the rule to allow ssh connection, choose yes to continue.

Boom. UFW deny all the incoming connections except the one we allowed.

If you are running a webserver on your server. Run the following command to allow http connection.

```
sudo ufw allow http
```

You could also specify the port:

```
sudo ufw allow 80
```

Run the following command to check the status and rules.

```
sudo ufw status
```

In case if you would like to deny connection from specific port, you could do it with following command.

```
sudo ufw deny 80
```

To delete the rule, let's run the command.

```
sudo ufw delete allow 80
```

Hope this guide is helpful for you. If you have any questions post in the comments below. Happy to help you.
