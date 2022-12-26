import { IEmployeePostProps } from "../types"

export default function EmployeePost(props: IEmployeePostProps) {
  const { post } = props;

  return (
    <div className="post-wrapper">
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  )
}
