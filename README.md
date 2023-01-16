# crypto-project
Read the initial pages of the documentation till the first api i.e. /assets api  : 
https://docs.coincap.io/ 
ignore most of the stuff ( it might seem very verbose at this stage) and just try to get a basic idea 
Now create an API key from the section which says  “Request API Key- Click here to request your API key”
the “HEADER” section above it also contains details on how to use this API key
“set the header field Authorization=Bearer XXXX” :- you have to create a header named “Authorization” and set its value to “Bearer XXXX” where XXXX stands for the API key that you have generated above


Now the assignment is to create an API that does the following ( one single API and not multiple separate API’s)

Get the list of all the top 100 cryptocurrency coins in the world using the /assets api ( the first api mentioned in the documentation)
Save all the 100 coins in database ( each document to have data of 1 coin)
The schema should have the following 4 keys:
 {  "symbol" // String and Unique
    "name": // String and Unique
    "marketCapUsd": // String  ( not Number)
     "priceUsd": //String
   }
Notice that changePercent24Hr key is not present in the schema or collection

Send back the list of all the coins sorted in order of their growth in last 24 hours   i.e. sort all the 100 coins based on their changePercent24Hr and send the sorted array in response

The above has to be done in one single API and not multiple separate API’s. SO go step by step and build features into your API one by one.

NOTE: When you hit the api for the first time, it will create 100 documents corresponding to the 100 coins in your database. Now next time when you hit your API, it will fail as you have made the symbol and name unique in your schema. Same coins can't be saved again as they will have the same symbol and name. SO you could do one of these 3 things to help yourself in the development phase:
- delete the data from DB every time after hitting your API 
- Don't maintain “unique:true” in your schema till you are done with your development and add unique:true only towards the completion of your assignment
- for inserting the documents, use findOneAndUpdate with upsert=true..this will create a new document in case there is no entry or will update the old doc with new values when there is an entry already there

