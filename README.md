# myMovieApp

Hello, My name is Sanjay Loncha. This blog is all about movie listing project that i have made in two days. This app is fully RESPONSIVE.

Technologies used: In making this project, I have used React, advanced JavaScript, Redux, Chakra UI.

Following are the pages I have put in my project :

Home Page: In landing page there is one simple navbar, and one search bar to search the movie user want to search. After user enter any movie name , after 2 seconds the data will be fetched from API called, meanwhile loader gif will be there for 2 seconds and if the movie is available in the database that he wil be able to see all movies. Movie are displayed in grid format containing details like title,year and poster of the searched movie. It contains one button as "Add to favourite" , by clicking on it that particular movie will be added to the favourite page and that button will get disable as user cannot added the movie already added.

Favourite Page : In this page, user can see the list of all movie that he has added after searching. If there is no movie added to the favourite than this page shows one image as "NOTHING TO SHOW HERE"  and one button as "SEARCH MOVIE !" which will redirect the user to the home page. Now if user has added movie/s than he can see the details of the movie added by him/her from home page and it contains details like title,year and poster. Along with that it has two buttons as "View" and "Remove" . On clicking on the REMOVE button, that particular movie will be removed and updated list will be shown to the user on favourite page. On clicking on the VIEW button user wil be redirected to the next page that is view page.

View Page : On this page user will be able to view the movie he/she has selected from favourite page .

To store data that is fetched from API and added to favourite, I have used Redux to manage it.

This was the first project I made with Chakra UI and it was fun learning many thing while applying it for the first thing.