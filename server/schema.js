export default `
type Results {
  resultsList: [String!]!
}
type Query (resultList: Results!) {
    getEndBowlingResult: Number!
}
`