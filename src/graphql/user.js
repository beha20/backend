const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull
} = require('graphql');

const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'This represents a user.',
  fields: () => ({
      email: { type: new GraphQLNonNull(GraphQLString) },
      password: { type: new GraphQLNonNull(GraphQLString) },
  })
})

module.exports = UserType;
