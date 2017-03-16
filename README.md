# Your Local App
Thinkful (https://www.thinkful.com) Unit 1 Portfolio Exercise -Java Script and jQuery app integrating Open Platform API with *YouTube*, *Wikipedia* and *Google Maps*. 

###Background
I made this app to help simplify those moments when you want to quickly research a place and know the most basic of details. All of the information provided is drawn from Open Platform API and could be found with a quick google search, however, this is meant to draw the most relevant sources together in one place. 

##Use Case
What this app good for? If your about to visit somewhere or want to know a little more about where someone is from this app will make that an even faster process. By knowing more about the location of a meeting or city where someone is from can help in meeting both professional and personal, and this app let the user do this in a cursory and quick way.

##Initial UX
The initial mobile and desktop wireframes can be seen below:


![know your area](https://cloud.githubusercontent.com/assets/22433378/20891290/f50a57a4-bb01-11e6-8cf6-ff82c39e9037.png)



##Working Prototype
You can find a working prototype of the app here: https://mersenne1729.github.io/know-your-area-api

##Functionality
The app's functionality includes:
* A location based map results for a given user location search.
* Listing the 20 most relevant videos regarding the user location request returned by *YouTube*.
* An autofill dropdown box to help facility accessibility and enhanced speed.
* Listing all callable data via *Wikipedia* on any given search query with links to the requested data.
* Sanitising all search information submitted that is too location specific to ensure relevant search are returned for *YouTube* and *Wikipedia*.

##Technical
The app is built entirely with HTML, CSS, Java Script and jQuery and makes use of three JSON calls to the *YouTube*, *Wikipedia* and *Google Maps* Open Platform APIs to return the data. All data is held in memory during the user's session. It has been built to be fully responsive across mobile, tablet and desktop screen resolutions.

##Development Roadmap
This is v1.0 of the app, but future enhancements are expected to include:
* Extending the app to analyse other relevant data such as social media information reading the area and/or current news.
* A higher degree of data snatiation so the search returns location information only or close to. 
* Resigned of the user interface to reflect the quick and fun nature of the app more closely.
