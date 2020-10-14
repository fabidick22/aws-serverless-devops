
const dynamodb = require('aws-sdk/clients/dynamodb');
const docClient = new dynamodb.DocumentClient();
const tableName = process.env.DATA_TABLE;
const crypto = require("crypto");

exports.lambdaHandler = async (event, context) => {
    console.info('table name:', tableName);

    const body = JSON.parse(event.body)
    var params = {
        TableName: tableName,
        Item: {
            id: crypto.randomBytes(16).toString("hex"),
            message: body.message,
        }
    };

    const result = await docClient.put(params).promise();
    console.log(result);
    const response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST"
        },
        body: JSON.stringify({message: 'saved data'})
    };

    console.info(`response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`);

    return response
};
