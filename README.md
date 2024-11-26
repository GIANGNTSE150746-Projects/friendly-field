# Build and Deploy a Full Stack Social Media App (ReactJS + Firebase v9 + Chakra UI)

## Packages used
- react-firebase-hooks
- react-router-dom
- react-hook-form

## Features to add
No.           | Function       | Status
:------------ | :------------- | :-------------
1 | Email verification | [ ]
2 | Being able to follow other users (and customize home feed based on followed users) | [ ]
3 | Firebase Auth Security Rules (to secure write access) | [ ]
4 | Responsive Design (for mobile) | [ ]
5 | Change all "Loading..." text indicators to more aesthetic skeletons | [ ]
6 | Use a library like "react-query" to optimize and reduce reads with cache (e.g \| changing pages causes all avatar images to refresh) | [ ]
7 | Use count() and Firebase indexes to reduce billed read counts (instead of using fetching all documents and using Javascript's Array.length to count number of likes, comments, posts, etc) | [ ]
8 | Possibly move to NextJS (but NextJS 13 is a huge mess right now) | [ ]
9 | Better protected routes: Make use of the "next=?" prop | [ ]
10 | Better storage validation and optimization (using serverless functions to compress and upload profile picture files) | [ ]
11 | Auth optimization: Store user to localStorage to reduce auth user loading time | [ ]
12 | Deploying to Firebase: Remember to add the .env vars | [ ]
