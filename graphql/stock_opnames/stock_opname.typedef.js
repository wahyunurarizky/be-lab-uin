const typeDefs = `#graphql
  extend type Query {
    getOneStockOpname(_id: ID): StockOpname
    getAllStockOpnames(filter: StockOpnameFilterInput): [StockOpname]
  }

  extend type Mutation {
    createStockOpname(stock_opname_input: StockOpnameInput): StockOpname
    updateStockOpname(_id: ID, stock_opname_input: StockOpnameInput): StockOpname
    deleteStockOpname(_id: ID!): StockOpname
  }

  input StockOpnameInput {
    laboratorium_type: EnumLaboratoriumType
    name: String
    remaining_ingredient: Float
    piece: Float
    unit_of_piece: String
    spesification: String
    expired_date: String
    created_by: ID
  }

  type StockOpname {
    _id: ID
    laboratorium_type: EnumLaboratoriumType
    name: String
    remaining_ingredient: Float
    piece: Float
    unit_of_piece: String
    spesification: String
    expired_date: String
    created_by: User
    createdAt: String
    updatedAt: String
  }

  input StockOpnameFilterInput {
    laboratorium_type: [EnumLaboratoriumType]
    not_empty_remaining: Boolean
  }

  enum EnumLaboratoriumType {
    Agripa
    Agribisnis
    Fisika
    Kimia
    Biologi
    Tisimat
    Tambang
    Pengujian
    Lingkungan
    Pangan
  }
`

export default typeDefs
