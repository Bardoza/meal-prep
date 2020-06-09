const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient({ region: "us-east-2" });

exports.handler = async (event, ctx, callback) => {
  const {
    name,
    serving,
    unit,
    calories,
    fat,
    carbs,
    protein,
    ingredientId
  } = event;

  if (!ingredientId) {
    throw new Error(
      JSON.stringify({
        statusCode: 400,
        body: "Ingredient Id is required"
      })
    );
  }

  const params = {
    TableName: "ingredients",
    Item: {
      name,
      serving,
      unit,
      calories,
      fat,
      carbs,
      protein,
      ingredientId
    }
  };

  try {
    await docClient.put(params).promise();
    return {
      statusCode: 201,
      body: "Ingredient created"
    };
  } catch (e) {
    throw new Error(
      JSON.stringify({
        errorType: "BadRequest",
        statusCode: 400,
        body: e.message,
        requestId: ctx.awsRequestId
      })
    );
  }
};
