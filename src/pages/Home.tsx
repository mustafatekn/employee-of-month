import { useQuery, gql } from "@apollo/client";
import { User } from '../types';

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
          }
          company {
            name
          }
          website
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
      {data.users.data.map((user: User) => (
        <div key={user.id}>
          <span>{user.name}</span>{" "}
          <span>{user.email}</span>
        </div>
      ))}

    </div>
  )
}
