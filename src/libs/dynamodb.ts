import { DynamoDB } from 'aws-sdk'

const options = process.env.NODE_ENV === 'production' ? {} : {
  region: 'localhost',
  endpoint: 'http://localhost:8000',
}
export const dynamodb = new DynamoDB.DocumentClient(options)
