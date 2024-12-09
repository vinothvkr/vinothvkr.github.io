---
id: 9
slug: revert-back-to-stock-os-in-oneplus
published: true
title: Revert back to stock OS in OnePlus
date: '2021-05-31 12:06:25 +0530'
date_gmt: '2021-05-31 06:36:25 +0530'
image: '/09/featured.jpg'
category: Android
tags:
  - Android
  - Oxygen OS
  - OnePlus
  - Android 11
  - Android 12
---

This guide shows how to restore the stock Oxygen OS from any custom ROM in OnePlus 7 and latest OnePlus devices. This may work in 7 and below version of devices. But this worked 100% in my 7T device and this how I reverted back my device.

**Important:** Please read through the instructions at least once before actually following them, so as to avoid any problems due to any missed steps. Also take the backup of your data.

## Preparation

Before we proceed, let's get all the required files downloaded.

- [Oxygen OS](https://www.oneplus.in/support)
- [payload-dumper-go](https://github.com/ssut/payload-dumper-go/releases)

Hope that adb and fastboot is already installed. If it is not installed, follow [this guide](https://wiki.lineageos.org/adb_fastboot_guide.html) to install it in your computer.

Let's create a folder named "android" in C: drive and move the downloaded files in this folder.

Now extract the payload-dumper-go zip file and move the `payload-dumper-go.exe` into the `android` folder, where the Oxygen OS zip file is available.

Now open the cmd/powershell and change the directory to `c:/android`

Use the payload-dumper to extract the image files from Oxygen OS. Run the command below.

`PS C:/android> .\payload-dumper-go.exe .\OnePlusXXXX_...._XXXX.zip`

Change the `OnePlusXXXX\_....\_XXXX.zip` to match your Oxygen OS zip file name.

After the extracting process is done. We could find a new folder `extracted_XXXXXXXX_XXXXX`.

Now change the command line to newly created folder.

`PS C:/android> cd extracted_XXXXXXXX_XXXXX`

Change the directory name `extracted_XXXXXXXX_XXXXX` with your matching name.

## Flashing

With the device powered off, hold `Volume Up` + `Volume Down` + `Power`

Once the device is in fastboot mode, verify your PC finds it by typing

`fastboot devices`

Now flash the stock boot and recovery images

`fastboot flash --slot=all boot boot.img
fastboot flash --slot=all recovery recovery.img`

Then reboot system into fastbootd mode

`fastboot reboot fastboot`

Now let's start the flashing by wiping the device first.

```
fastboot -w
fastboot flash --slot=all abl abl.img
fastboot flash --slot=all aop aop.img
fastboot flash --slot=all bluetooth bluetooth.img
fastboot flash --slot=all boot boot.img
fastboot flash --slot=all cmnlib64 cmnlib64.img
fastboot flash --slot=all cmnlib cmnlib.img
fastboot flash --slot=all devcfg devcfg.img
fastboot flash --slot=all dsp dsp.img
fastboot flash --slot=all dtbo dtbo.img
fastboot flash --slot=all hyp hyp.img
fastboot flash --slot=all imagefv imagefv.img
fastboot flash --slot=all keymaster keymaster.img
fastboot flash --slot=all LOGO LOGO.img
fastboot flash --slot=all modem modem.img
fastboot flash --slot=all multiimgoem multiimgoem.img
fastboot flash --slot=all odm odm.img
fastboot flash --slot=all oem_stanvbk oem_stanvbk.img
fastboot flash --slot=all opproduct opproduct.img
fastboot flash --slot=all qupfw qupfw.img
fastboot flash --slot=all recovery recovery.img
fastboot flash --slot=all storsec storsec.img
fastboot flash --slot=all tz tz.img
fastboot flash --slot=all uefisecapp uefisecapp.img
fastboot flash --slot=all vbmeta vbmeta.img
fastboot flash --slot=all vbmeta_system vbmeta_system.img
fastboot flash --slot=all xbl_config xbl_config.img
fastboot flash --slot=all xbl xbl.img
fastboot reboot fastboot
fastboot flash --slot=all system system.img
fastboot flash --slot=all system_ext system_ext.img
fastboot flash --slot=all vendor vendor.img
fastboot flash --slot=all product product.img
```

Now the flashing process is done. If you wanted to lock the bootloader follow the below commands else reboot the device by entering the command `fastboot reboot`.

To lock the bootloader.

```
fastboot reboot bootloader
fastboot oem lock
```

Now follow the onscreen steps to complete the lock process. Once it is done enter the command `fastboot reboot` to boot into the phone.

Hope this guide helped you to restore the stock Oxygen OS in your device.

You can support by buying a coffee ☕️ here - https://www.buymeacoffee.com/vinothvkr
