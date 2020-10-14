
let response;

exports.lambdaHandler = async (event, context) => {
    const requestContext = event.requestContext
    console.info(event)
    try {
        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'get data',
                location: requestContext.state
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};
