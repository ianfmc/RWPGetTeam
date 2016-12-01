var AWS = require('aws-sdk');

exports.handler = function(event, context, callback) {
    
    var seasonID = event.teamID.toString();
    var docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});
    var seasonParams = {
        TableName : 'Team',
        Key : {
            teamID: teamID
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