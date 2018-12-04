#Setup
npm install -g serverless

"tail": "serverless logs -f query -t --aws-profile mood"

curl --get 'https://2wkz34x88i.execute-api.us-east-1.amazonaws.com/dev/query' --data-urlencode 'query={moods(email: "jonathanssewell@gmail.com") { email, date }}'

curl --get 'https://2wkz34x88i.execute-api.us-east-1.amazonaws.com/dev/query' --data-urlencode 'query={moods(email: "jonathanssewell@gmail.com") { email, date }}'

curl --get 'https://2wkz34x88i.execute-api.us-east-1.amazonaws.com/dev/query' --data-urlencode 'query={\_\_schema {}}'
