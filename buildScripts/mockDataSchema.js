var schema = {
  type: 'object',
  properties: {
    todos: {
      type: 'array',
      minItems: 3,
      maxItems: 5,
      items: {
        type: 'object',
        properties: {
          id: {
            type: 'number',
            unique: true,
            minimum: 1
          },
          text: {
            type: 'string',
            faker: 'name.firstName'
          },
          completed: {
            type: 'boolean',
            value: false
          }
        },
        required: ['id', 'text', 'completed']
      }
    }
  },
  required: ['todos']
};

module.exports = schema;
