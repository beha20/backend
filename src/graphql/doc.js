const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull
} = require('graphql');

const DocType = new GraphQLObjectType({
  name: 'Doc',
  description: 'This represents a doc.',
  fields: () => ({
      name: { type: new GraphQLNonNull(GraphQLString) },
      html: { type: new GraphQLNonNull(GraphQLString) },
  })
})

module.exports = DocType;
