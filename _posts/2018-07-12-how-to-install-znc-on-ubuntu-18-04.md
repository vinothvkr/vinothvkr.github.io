---
id: 1
slug: how-to-install-znc-on-ubuntu-18-04
published: true
title: How to install ZNC on Ubuntu 18.04
date: '2018-07-12 13:29:44 +0530'
date_gmt: '2018-07-12 13:29:44 +0530'
image: '/01/featured.jpg'
category: Ubuntu
tags:
  - Linux
  - Ubuntu
---

ZNC allows you to stay connected to IRC network.123

---

ZNC allows you to stay connected to IRC network. Multiple clients can be connected to single ZNC account different locations simultaneously and therefore appear under the same nickname on IRC server.

Let's get our system set up with prerequisite.

First, update system.

```
sudo apt update
sudo apt upgrade
```

ZNC can be installed from Ubuntu repo. Let's install it.

`sudo apt install znc znc-dev`

znc-dev is requires to compile the modules if installed.

We will now begin setting up ZNC as a system daemon.

```
sudo useradd --create-home -d /var/lib/znc --system --shell /sbin/nologin --comment "User to run ZNC daemon" --user-group znc
sudo -u znc /usr/bin/znc --datadir=/var/lib/znc --makeconf
[ .. ] Checking for list of available modules...
[ >> ] ok
[ ** ]
[ ** ] -- Global settings --
[ ** ]
[ ?? ] Listen on port (1025 to 65534): 6697
[ ?? ] Listen using SSL (yes/no) [no]: yes
[ ?? ] Listen using both IPv4 and IPv6 (yes/no) [yes]: yes
[ .. ] Verifying the listener...
[ >> ] ok
[ ** ] Unable to locate pem file: [/var/lib/znc/znc.pem], creating it
[ .. ] Writing Pem file [/var/lib/znc/znc.pem]...
[ >> ] ok
[ ** ] Enabled global modules [webadmin]
[ ** ]
[ ** ] -- Admin user settings --
[ ** ]
[ ?? ] Username (alphanumeric): vinoth
[ ?? ] Enter password:
[ ?? ] Confirm password:
[ ?? ] Nick [vinoth]:
[ ?? ] Alternate nick [vinoth_]:
[ ?? ] Ident [vinoth]:
[ ?? ] Real name [Got ZNC?]: vinoth
[ ?? ] Bind host (optional):
[ ** ] Enabled user modules [chansaver, controlpanel]
[ ** ]
[ ?? ] Set up a network? (yes/no) [yes]: yes
[ ** ]
[ ** ] -- Network settings --
[ ** ]
[ ?? ] Name [freenode]:
[ ?? ] Server host [chat.freenode.net]:
[ ?? ] Server uses SSL? (yes/no) [yes]: yes
[ ?? ] Server port (1 to 65535) [6697]: 6697
[ ?? ] Server password (probably empty):
[ ?? ] Initial channels: #ubuntu
[ ** ] Enabled network modules [simple_away]
[ ** ]
[ .. ] Writing config [/var/lib/znc/configs/znc.conf]...
[ >> ] ok
[ ** ]
[ ** ] To connect to this ZNC you need to connect to it as your IRC server
[ ** ] using the port that you supplied. You have to supply your login info
[ ** ] as the IRC server password like this: user/network:pass.
[ ** ]
[ ** ] Try something like this in your IRC client...
[ ** ] /server <znc_server_ip> +6697 vinoth:
[ ** ]
[ ** ] To manage settings, users and networks, point your web browser to
[ ** ] https://<znc_server_ip>:6697/
[ ** ]
[ ?? ] Launch ZNC now? (yes/no) [yes]: no
```

Before starting ZNC, let's create systemd unit file.

`sudo nano /etc/systemd/system/znc.service`

Now put the below in the file we just created.

```
[Unit]
Description=ZNC Service
After=network-online.target

[Service]
ExecStart=/usr/bin/znc -f --datadir=/var/lib/znc
User=znc

[Install]
WantedBy=multi-user.target
```

Now let's enable and start ZNC service.

```
sudo systemctl enable znc
sudo systemctl start znc
```

Boom, we have successfully setup znc now.

If you have any question or stuck up anywhere, post it on comments below. Happy to help.
