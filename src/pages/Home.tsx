import React from 'react'
import { useQuery, gql } from "@apollo/client";

export default function Home() {
    const GET_LOCATIONS = gql`
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
            geo {
              lat
              lng
            }
          }
          company {
            name
          }
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  console.log(data);
  
  return (
    <div>Home</div>
  )
}
