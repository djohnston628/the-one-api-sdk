David Johnston - LibLab: Lord of the Rings SDK/Helper Library
===

## Hello! So in making this SDK/Library, I...

1) Made a simple service Client class to make the API direct and Aggregate calls
2) Added Caching to the two main (and slow) calls, Movies and Quotes, so that during the lifecycle of the Client instance, those would only be called over-the-wire one time
3) Added Jest for unit testing and made simple high level tests for each API fetch that it calls
4) Added a Node index.js file to provide working examples of how to use the Client functions, and spit out some sample logs to see the results


## Ideas I had during the creation that I think could provide further value, if time permitted

1) Research deeper if it would make sense to cache more responses than just the Movies and Quotes
2) Possibly build a GraphQL schema to sit on top of API calls to get the relations wired up, then make some canned Graph Schema's for sample functions
3) Explore more Aggregate functions (if GraphQL didn't work out), for aggregating more objects into single response objects. I made the one for combining movies and quotes, but I'm sure there could be more useful ones
4) Build a UI (either simple HTML, or a SPA | React or Angular) to allow the user to see and feel the experience of filtering for movies, selecting movies, showing quotes, filtering through quotes, etc, all in a responsive UI... but I didn't want to take even more time than I already had


## Lastly... Thoughts...

This was a lot of fun putting together. I took 20+ hours to submit (Mainly cause I started on one day, and continued on the next), but this was a great coding excercise, and fun to think through the other options that could really make it useful to end consumers.

Thank you! 

David Johnston

