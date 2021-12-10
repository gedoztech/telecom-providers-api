import { ApolloServer, gql } from 'apollo-server'
import fetch from 'node-fetch'

const PORT: number | undefined = parseInt(<string>process.env.API_DOCKER_PORT, 10)
const HOSTNAME: string = 'api'
const OI_API_URI: string | undefined = process.env.OI_API_URI
const TIM_API_URI: string | undefined = process.env.TIM_API_URI

const typeDefs = gql`

  type OiResponse {
    name: String!
    price: String!
  }

  type TimResponse {
    name: String!
    price: String!
  }

  type Product {
    oi: [[OiResponse]]!
    tim: [TimResponse]!
  }

  type Query {
    product: Product!
  }
`

const cache = {};
const dateStore = {};

const resolvers = {
  Product: {
    oi: async () => {
      const response = await fetch(<string>OI_API_URI);
      const data = await response.json();
      return data;
    },
    tim: async () => {
      const response = await fetch(<string>TIM_API_URI);
      const data: any = await response.json();
      return data.xpress;
    }
  },
  Query: {
    product: () => ({})
  }
}

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: PORT, host: HOSTNAME }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
