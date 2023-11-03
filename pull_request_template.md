## Please answer the following questions about your work:

# 0 - What language did you program in?
    Javascript / Node

# 1 - Have you manually tested the SDK?
    Yes

# 2 - Did you add a test suite? If so, how will we use it? If not, why?
    Yes. Added some simple Jest unit tests, and provided in the readme how to invoke the tests, ie., -- 'npm test' 

# 3 - Did you use any 3rd party library? Why did you use it? What are the tradeoffs?
    Yes, Jest. I was going to bring in one of my favorites, lodash, but decided against it for this simple SDK

# 4 - Do you feel this SDK makes it easier to interact with the API?
    I do

# 5 - If you had more time, what else would you add?
    1) Research deeper if it would make sense to cache more responses than just the Movies and Quotes
    2) Possibly build a GraphQL schema to sit on top of API calls to get the relations wired up, then make some canned Graph Schema's for sample functions
    3) Explore more Aggregate functions (if GraphQL didn't work out), for aggregating more objects into single response objects. I made the one for combining movies and quotes, but I'm sure there could be more useful ones
    4) Build a UI (either simple HTML, or a SPA | React or Angular) to allow the user to see and feel the experience of filtering for movies, selecting movies, showing quotes, filtering through quotes, etc, all in a responsive UI... but I didn't want to take even more time than I already had

# 6 - What would you change in your current SDK solution?
    I would research all the options noted in #5 above, to make it more useful

# 7 - On a scale of 1 to 10 (10 being the highest), how would you rate this solution?
    A solid 7 as it is... (but could get to a 10 with more features, and the rest of the API's, and adding for all the other possible languages consumers would need )

# 8 - Anything else we should keep in mind when we evaluate the project?
    Maybe just that I had a lot of fun putting this together. I love building tools that developers themselves find useful, and will actually use... kinda like when I was a musician, I gravitated to musicians-for-musicians type bands, like Dream Theater. It's fun and rewarding to build SPA sites for end users, but something kinda extra fun building for developers.