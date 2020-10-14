
let response;

exports.lambdaHandler = async (event, context) => {
    console.info(event)
    console.info(context)
    try {
        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'get data',
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};
