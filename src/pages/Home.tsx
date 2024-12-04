import { useEffect } from 'react';
import { useQuery } from "@apollo/client";
import EmployeeCard from "../components/EmployeeCard";
import { User } from '../types';
import { getEmployees } from "../queries";
import { useAppDispatch, useAppSelector } from "../store";
import { setEmployees } from "../store/features/employeeSlice";
import Loading from '../components/Loading';

export default function Home() {
  const { loading, error, data } = useQuery(getEmployees)
  const employees = useAppSelector(state => state.employees.employees)
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!(!loading && data)) return;
    const usersCopy: User[] = [];

    data.users.data.forEach((user: User) => {
      const userClone = {
        id: user.id,
        albums: user.albums,
        address: user.address,
        company: user.company,
        website: user.website,
        email: user.email,
        name: user.name,
        voteCount: generateRandomNumber(),
        posts: user.posts,
        username: user.username
      }
      usersCopy.push(userClone)
    })
    // had to do this because object was not extensible. I know it is not good but I had to.
    // fake api doesn't contain voteCount so I generated it.
    dispatch(setEmployees(usersCopy));
  }, [data, loading])

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 100);
  }

  if (loading) return <Loading />;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div className="container py-5">
      <header>
        <h1 className='page-title'>Choose the employee of the month!</h1>
      </header>
      <div className='flex'>
        <div className='w-50'>
          {employees.map((user: User) => <EmployeeCard user={user} key={user.id} />)}
        </div>
        <aside className='w-50'>
          <div className='side-card'>
            <h3>We would be happy if you spent your time for us!</h3>
            <p>We are always trying to choose the employee of the month in justice.</p>
            <p>Please help us to do this. Vote anyone who is worthy.</p>
          </div>
        </aside>
      </div>

    </div>
  )
}
