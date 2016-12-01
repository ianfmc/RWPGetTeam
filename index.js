var AWS = require('aws-sdk');

exports.handler = function(event, context, callback) {
    
    var teamID = event.teamID.toString();
    var docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});
    var teamParams = {
        TableName : 'Team',
        Key : {
            teamID: teamID
        },
    }
    console.log(teamParams);
    docClient.get(seasonParams, function(err, data) {
        if (err) {
            callback(new Error('Unknown Team'));
        }
        else {
            callback(null, data);
          }
      });
};