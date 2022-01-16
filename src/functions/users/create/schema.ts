export default {
  type: "object",
  properties: {
    email: { type: 'string' },
    username: { type: 'string' },
    age: { type: 'integer' },
  },
  required: ['email', 'username']
} as const
