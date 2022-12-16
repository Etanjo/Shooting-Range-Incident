import request from 'request'

export const handler = function(event, context, callback){
    let key = process.env.RESTDB_KEY
    var options = {
        method: 'GET',
        url: 'https://rangeincident-8b15.restdb.io/rest/highscores',
        headers: {
            'cache-control': 'no-cache',
            'x-apikey': key
        }
    }
    request(options,
        function(error,response,body){
            callback(null,{
                statusCode: 200,
                body,
            })
        }
        
        )
}