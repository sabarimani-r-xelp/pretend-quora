## API's List

##### To add Question

Method: POST

localhost:3000/api/questions

###### Params:

question: how to get answers for questions

userId: 1

-----------------------------------------------------------------
##### To add Question

Method: PUT

localhost:3000/api/questions/:id

###### Params:

question: how to get answers for my questions?

userId: 1

-----------------------------------------------------------------
##### To List All the Questions

Method: GET

localhost:3000/api/questions

-----------------------------------------------------------------

##### To get a single Question

Method: GET

localhost:3000/api/questions/:id

-----------------------------------------------------------------
##### To Get Question with All Answers

Method: GET
localhost:3000/api/questions/1/answers

-----------------------------------------------------------------
##### To Answer a question

Methos: POST

localhost:3000/api/questions/1/answers

###### Params:

answer=Use Quora to find the answers of your questions

userId=2

QuestionId=1

-----------------------------------------------------------------
##### To Update a Answer

Methos: PUT

localhost:3000/api/questions/1/answers

###### Params:

answer=Use Quora to find the answers of your questions

userId=2

QuestionId=1

-----------------------------------------------------------------
