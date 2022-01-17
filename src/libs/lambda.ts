import middy from "@middy/core"
import middyJsonBodyParser from "@middy/http-json-body-parser"
import validator from "@middy/validator";
import type { APIGatewayProxyResult } from "aws-lambda";

export const middyfy = (handler, schema) => {
  return middy(handler).use(middyJsonBodyParser())
    .use(validator({
      inputSchema: {
        type: 'object',
        properties: {
          body: {
            ...schema,
            ...(!schema.required && { nullable: true }),
          }
        }
      },
    }))
    .use(errorHandler)
}

const errorHandler = {
    onError: (request): APIGatewayProxyResult => {
      const { error } = request
      if (error?.name === 'BadRequestError') {
        const statusCode = 422
        let messages = []
        error.details.forEach(detail => {
          if (detail.keyword === 'required') {
            const param = detail.params.missingProperty
            messages.push(`${param} is missing`)
          }
        })
        return { statusCode, body: JSON.stringify({ messages }) }
      } else {
        throw error
      }
  }
}