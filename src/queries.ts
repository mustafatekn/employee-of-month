import { gql } from "@apollo/client";

export const getEmployees =  gql`
query {
  users {
    data {
      id
      name
      email
      address {
        street
        suite
        city
        zipcode
      }
      company {
        name
      }
      website
      albums{data{photos{data{thumbnailUrl}}}}
    }
  }
}
`