# Your Local App

## Motivation

I've made this to understand programing a litte more!

## Initial UX

The initial mobile and desktop wireframes can be seen below:

![screenshot 10](https://cloud.githubusercontent.com/assets/22433378/23987471/b05e6f9a-0a21-11e7-84c8-0723add8a57b.png)

## Working Prototype

You can find a working prototype of the app here:

https://mersenne1729.github.io/know-your-area-api

## Functionality

The app's functionality includes:

* A map that brings up the location entered returned by *Google Maps*. 
* Listing of the 10 most relevant videos of the location entered returned by *YouTube*.
* Listing of all callable data via *Wikipedia* on any given search query with links to the requested data.
* Sanitising all search information submitted that is too location specific to ensure relevant search are returned for *YouTube* and *Wikipedia*.
* An autofill dropdown box to facilitate accessibility and enhance speed.

## Technical

The app is built with HTML, CSS, JavaScript and jQuery, and makes use of three JSON calls to the *YouTube*, *Wikipedia* and *Google Maps* Open Platform APIs to return the data. All data is held in memory during the user's session. It has been built to be fully responsive across mobile, tablet and desktop screen resolutions.

