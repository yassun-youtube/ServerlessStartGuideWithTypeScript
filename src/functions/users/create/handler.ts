import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import { dynamodb } from "@libs/dynamodb";

import schema from './schema';

const hello: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  const { email, username, age } = event.body

  await dynamodb.put({
    TableName: 'usersTable',
    Item: {
      email, username, age,
    }
  }).promise()

  return formatJSONResponse({
    message: 'Success'
  });
}

export const main = middyfy(hello);
