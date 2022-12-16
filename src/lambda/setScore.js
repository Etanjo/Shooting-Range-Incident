var request = require("request");
export const handler = function(event, context, callback){
let key = process.env.RESTDB_KEY
let today = Date()
let datetime = today.datetime
var options = { method: 'POST',
  url: 'https://rangeincident-8b15.restdb.io/rest/highscores',
  headers: 
   { 'cache-control': 'no-cache',
     'x-apikey': key,
     'content-type': 'application/json' },
  body: { 'name': 'LOSER', 'score': '10', 'date': datetime },
  json: true };
  request(options,
    function(error,response,body){
        callback(null,{
            statusCode: 200,
            body,
        })
    }
    
    )
}

