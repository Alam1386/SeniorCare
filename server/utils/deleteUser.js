
const  AWS = require('aws-sdk');
var creds = new AWS.Credentials('AKIATRHIVUXV5M4WHGVK', 'wGmFtHKqMJuDkQ+sgO1hRjRuUiKd5P8Iq9yDwABH');
AWS.config.update({region: 'us-east-1'});

var cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider();

const getUserPool = async() => {
    var params2 = {
        MaxResults: '10',
      };
      cognitoidentityserviceprovider.listUserPools(params2, function(err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else     console.log(data);           // successful response
      });
}

const ListUsers = async () => {
    var params = {
        UserPoolId: 'us-east-1_PSlRc9dPQ'
      };
    let users2 = await cognitoidentityserviceprovider.listUsers(params).promise()
    users2.Users.map(user => {        
        console.log('userAttributes ',user.Username, ' ', user.Attributes.filter((e)=>{            
            return e.Name === 'email'
        }));
    })
}

deleteUser = async (user_id) => {
    var params = {
        UserPoolId: 'us-east-1_PSlRc9dPQ',
        Username: user_id /* required */
      };

    let deletedUser = await cognitoidentityserviceprovider.adminDeleteUser(params).promise()
    console.log(deletedUser);   
}

module.exports = deleteUser;