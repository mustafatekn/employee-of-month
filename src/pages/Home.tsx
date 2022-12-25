import { useQuery, gql } from "@apollo/client";
import EmployeeCard from "../components/EmployeeCard";
import { User } from '../types';

export default function Home() {
  const GET_EMPLOYEES = gql`
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
  `;

  const { loading, error, data } = useQuery(GET_EMPLOYEES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div className="container pt-5">
      <div className="grid-container">
        {data.users.data.map((user: User) => <EmployeeCard user={user} key={user.id} />)}
      </div>
    </div>
  )
}
