# Your Local App

## Synopsis

A JavaScript and jQuery app with integrating Open Platform APIs *YouTube*, *Wikipedia* and *Google Maps*, which allows users to quickly research different places and pull up the basic details.  

## Motivation

This app is made to enable users to quickly and dynamically draw the relevant information of a location on one platform. 

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

## Development Roadmap

This is v1.0 of the app, future enhancements are expected to include:
* Extending the app functionality to return other relevant information such as social media feeds, local news and restaurants regarding an area. 
* A higher degree of data sanitisation so that the searches return more accurate information. 
* Redesigning the user interface to improve user experience. 

