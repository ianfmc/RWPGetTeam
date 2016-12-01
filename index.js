var AWS = require('aws-sdk');

exports.handler = function(event, context, callback) {
    
    var seasonID = event.seasonID.toString();
    var docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});
    var seasonParams = {
        TableName : 'Season',
        Key : {
            seasonID: seasonID
        },
    }
    console.log(seasonParams);
    docClient.get(seasonParams, function(err, data) {
        if (err) {
            callback(new Error('Unknown Season'));
        }
        else {
            callback(null, data);
          }
      });
};