
let response;

exports.lambdaHandler = async (event, context) => {
    const requestContext = event.requestContext
    console.info(requestContext)
    try {
        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'get data',
                location: requestContext.stage
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};
