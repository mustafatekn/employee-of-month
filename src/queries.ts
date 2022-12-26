import { gql } from "@apollo/client";

export const getEmployees = gql`
  query {
    users {
      data {
        id
        username
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
        albums {
          data {
            photos {
              data {
                thumbnailUrl
              }
            }
          }
        }
        posts {
          data {
            id
            title
            body
            comments {
              data {
                id
                name
                email
                body
              }
            }
          }
        }
      }
    }
  }
`;

export const getEmployee = (id: string) => {
  return gql`
  query {
    user(id: ${id}) {
        id
        username
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
        albums {
          data {
            photos {
              data {
                thumbnailUrl
              }
            }
          }
        }
        posts {
          data {
            id
            title
            body
            comments {
              data {
                id
                name
                email
                body
              }
            }
          }
        }
    }
  }
 `;
};
