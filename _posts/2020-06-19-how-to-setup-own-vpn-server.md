---
id: 7
slug: how-to-setup-own-vpn-server
published: true
title: How to setup own VPN server
date: '2020-06-19 11:13:13 +0530'
date_gmt: '2020-06-19 11:13:13 +0530'
image: '/07/featured.jpg'
category: Ubuntu
tags:
  - Linux
  - Ubuntu
  - OpenVPN
---

Today we are going to see how to setup our own VPN server. Here is a step by step guide to install and setup VPN server.

**Prerequisites:**

We need a VPS with any Linux distribution setup and running with basic initial configuration. In this tutorial we are using Ubuntu 20.04 server, so the steps shown below would work on almost all the Debian based linux distributions.

To setup OpenVPN server we are going to use a script which will setup and configure a VPN server with in few seconds. The script is hosted in GitHub repository.

Let's begin to setup VPN server. First download the script to our server:

```
curl -O https://raw.githubusercontent.com/angristan/openvpn-install/master/openvpn-install.sh
```

Now make the script executable:

```
chmod +x openvpn-install.sh
```

Run the script:

```
sudo ./openvpn-install.sh
```

Now it asks few questions before it install and configure the server.

```
IP address: XXX.XX.XX.XXX
```

Script itself detect the VPS public IP address. Verify the IP address it shows is correct.

```
Do you want to enable IPv6 support (NAT)? &#91;y/n]: n
```

If you want to enable IPv6 support enter "y" else "n".

```
Which port do you want OpenVPN to listen to?
     1) Default: 1194
     2) Custom
     3) Random &#91;49152-65535]
Port choice &#91;1-3]: 1
```

Choose a port of your choice. I chose the default port.

```
What protocol do you want OpenVPN to use?
UDP is faster. Unless it is not available, you shouldn't use TCP.
     1) UDP
     2) TCP
Protocol &#91;1-2]: 1
```

Choose the protocol you prefer.

```
What DNS resolvers do you want to use with the VPN?
     1) Current system resolvers (from /etc/resolv.conf)
     2) Self-hosted DNS Resolver (Unbound)
     3) Cloudflare (Anycast: worldwide)
     4) Quad9 (Anycast: worldwide)
     5) Quad9 uncensored (Anycast: worldwide)
     6) FDN (France)
     7) DNS.WATCH (Germany)
     8) OpenDNS (Anycast: worldwide)
     9) Google (Anycast: worldwide)
    10) Yandex Basic (Russia)
    11) AdGuard DNS (Anycast: worldwide)
    12) NextDNS (Anycast: worldwide)
    13) Custom
DNS &#91;1-12]: 3
```

Choose a DNS of your choice.

```
Do you want to use compression? It is not recommended since the VORACLE attack make use of it.
Enable compression? &#91;y/n]: n
```

Enter "n", it's advised to have it disabled.

```
Customize encryption settings? &#91;y/n]: n
```

Enter "n" to have the default encryption settings. Then press any key to let it install and configure the VPN server.

Once everything is installed it ask for few more questions to create a Client file. Then it will create a client file, which we will use to import into OpenVPN client to connect to OpenVPN server.

```
Client Name: swiftionvpn
```

Give the name of your choice.

```
Do you want to protect the configuration file with a password?
(e.g. encrypt the private key with a password)
   1) Add a passwordless client
   2) Use a password for the client
Select an option &#91;1-2]: 1
```

It is suggested to set a password for the client. This the password we have to enter while connecting to our VPN server. Enter "1" and enter the password when it prompts.

Once it is done. Client file will be created in your home directory for eg. `/home/username/swiftionvpn.ovpn`

Now let's download the client file to our local machine. To do that we use SCP.

```
scp username@ipaddress:/home/username/swiftionvpn.ovpn swiftionvpn.ovpn
```

This will download the client file to current directory.

Now open OpenVPN client and import the client file and connect to our VPN server. when it prompt's credentials. Username is the client name you given and the password you set for that client name.

Now you would have successfully connected to VPN tunnel and routing your traffic through secured encrypted tunnel.

In case you have any questions or an issue, feel free to post it in the comment box below. Hope I helped you today. Thank you.
