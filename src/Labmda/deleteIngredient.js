const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient({ region: "us-east-2" });

exports.handler = async (event) => {
  const { ingredientId } = event;

  const params = {
    TableName: "ingredients",
    Key: {
      ingredientId,
    },
  };

  try {
    await docClient.delete(params).promise();
    return {
      statusCode: 200,
      body: "Record Deleted",
    };
  } catch (e) {
    throw new Error(
      JSON.stringify({
        errorType: "BadRequest",
        statusCode: 400,
        body: e.message,
      })
    );
  }
};
