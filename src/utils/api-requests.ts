import axios from "axios";
export type Course = {
  title: string;
};

// export async function CreateCourse() {
//   const res = await fetch('/api/course');
//   // const users = (await res.json()) as User[];
//   const users = (await res.json());
//   return users;
// }

export const CreateCourse = async (data: Course) => {
  const { data: response } = await axios.post('/api/course', data);
  return response.data;
  };