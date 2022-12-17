var request = require("request");
export const handler = function(event, context, callback){
  let parameters = event.queryStringParameters;
  let score = Number(parameters.score)
  let name = String(parameters.name)
let key = process.env.RESTDB_KEY
let today = Date()
let datetime = today.datetime
var options = { method: 'POST',
  url: 'https://rangeincident-8b15.restdb.io/rest/highscores',
  headers: 
   { 'cache-control': 'no-cache',
     'x-apikey': key,
     'content-type': 'application/json' },
  body: { 'name': name, 'score': score, 'date': datetime },
  json: true };
  request(options,
    function(error,response,body){
        console.log('Got me a response body',body)
        console.log('No error',error)
        callback(null,{
            statusCode: 200,
            body: JSON.stringify(body)
        })
    }
    
    )
}

