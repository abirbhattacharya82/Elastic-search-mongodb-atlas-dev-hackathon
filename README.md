# Elastic-search-mongodb-atlas-dev-hackathon
This solution is submitted as a part of the MongodB Atlas Dev Hackathon.
## FIFA 20 Catalogue
Are you looking for your favourite FIFA 20 player? FIFA 20 Catalogue is the perfect solution for you. This solution performs a quick search across the entire player database and finds details such as **nationality, clubs, age, overall etc.**

### Category Submission:
**Search No More** (Building an Application with the help of Mongodb Atlas Search)

### App Link
The App is deployed in the following link
[FIFA 20 Catalogue](https://fifa20.netlify.app/)

### Screenshots
![App Screenshot](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ss9jek3v3ew45g553n6e.png)

### Description
FIFA 20 Catalogue is a simple User Interface which helps people in finding details like
- Age
- Overall
- Nationality
- Club
- Height
The user interface is pretty self explanatory which has a search bar and asks the user to enter the name of a player and if the player exist in the FIFA 20 Player catalogue then it will be returning the details of the player withing seconds. The design of the details section is simmilar to the FIFA 20 Club crests.

### Link to Source Code
The source code of the Solution is present here [link to source code](https://github.com/abirbhattacharya82/Elastic-search-mongodb-atlas-dev-hackathon)

### Permissive License
[MIT License](https://github.com/abirbhattacharya82/Elastic-search-mongodb-atlas-dev-hackathon/blob/main/LICENSE)

## Background
Being a football fan I have always enjoyed dealing with datas related to Football. FIFA is a game which I have been playing over a decade now. Among various versions of the game EA Sports FIFA 09 was the FIFA I ever played. <br>
When I saw that Dev is organising Mongo DB Atlas Hackathon for everyone this year I was excited and decided to participate immediately. However I wasn't sure which dataset I would be working on. <br>
Thats when I came across the dataset in Kaggle [fifa-20-complete-player-dataset](https://www.kaggle.com/datasets/stefanoleone992/fifa-20-complete-player-dataset). And it was then I decided to work on this dataset.

### How I built it
In order to build the app I performed the following steps:
- Downloaded the Kaggle dataset in csv form
- Converted the csv dataset to json
- Wrote a Nodejs program to upload the json objects in the form of mongodb collections with fields I needed and ommited the rest.
- Created a Search Index
- Used Mongodb Atlas Search to add the following three stages:
  1. Querrying on the short_name field of the database
  2. Sorting the list in descending order
  3. Limit to only top 4 collections to prevent overcrowding
- Created a Nodejs API using Express framework.
- Used MongoClient and pulled the collections with the help of player's short name
- Sent the array of json objects as a response to the request
- In the frontend made an **GET** API call on the hosted API and retrieved the results
- Properly presented the result with DOM manipulation.

### Additional Resources/Info
- **Raw Data Link:** [raw dataset](https://www.kaggle.com/datasets/stefanoleone992/fifa-20-complete-player-dataset)
- **Service for Hosting API:** [cyclic.sh](https://www.cyclic.sh/)
- **Service for Hosting Frontend:** [netlify](https://www.netlify.com/)