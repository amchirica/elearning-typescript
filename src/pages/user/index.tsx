import DefaultButton from "@/components/Buttons/DefaultButton";
import MainLayout from "@/layouts/mainLayout";
import prisma from "@/lib/prismaFunctions";
import authStore from "@/store/globalStore";
import axios from "axios";
import React, { ReactElement, useState } from "react";
import { AiFillDelete } from "react-icons/ai";

export interface User {
  user: {
    id: String;
    email: String;
    lastName: String;
    firstName: String;
    password: String;
    role: String;
    courses: any;
  };
}
function UserProfile(props: User) {
  const { loading } = authStore();
  const { user } = props;
  const [profile, setProfile] = useState(user);

  const handleUpdate = async (e: any) => {
    try {
      authStore.setState({
        loading: true,
      });
      const { data } = await axios({
        method: "POST",
        url: `/api/user`,
        data: profile,
      });
      authStore.setState({ loading: false });
    } catch (err) {
      console.error(err);
    }
  };

  const deleteCourse = async (e: any, item: any, id: any) => {
    e.preventDefault();
    authStore.setState({ loading: true });
    try {
      const { data } = await axios({
        method: "PUT",
        url: "/api/user/courses",
        data: {
          courseId: item,
          userId: id,
        },
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-neutral-200 m-2 p-2 rounded-md">
      <div>
        <h2 className="text-xl">Salut {user.firstName}!</h2>
      </div>
      <div className="flex gap-4 flex-col md:flex-row">
        <div className="w-1/3 flex flex-col gap-2">
          <div className="flex items-center gap-2 w-full justify-between">
            <span>Email:</span>
            <input
              type="email"
              defaultValue={profile.email as string}
              className="p-2 rounded-md min-w-[15rem] outline-none border-2 border-neutral-200"
            />
          </div>
          <div className="flex items-center gap-2 w-full justify-between">
            <span>Nume:</span>
            <input
              type="text"
              value={profile.lastName as string}
              onChange={(e) =>
                setProfile({
                  ...profile,
                  lastName: e.target.value,
                })
              }
              className="p-2 rounded-md min-w-[15rem] outline-none border-2 border-neutral-200"
            />
          </div>
          <div className="flex items-center gap-2 w-full justify-between">
            <span>Prenume:</span>
            <input
              type="text"
              value={profile.firstName as string}
              onChange={(e) =>
                setProfile({
                  ...profile,
                  firstName: e.target.value,
                })
              }
              className="p-2 rounded-md min-w-[15rem] outline-none border-2 border-neutral-200"
            />
          </div>
          <div className="flex items-center gap-2 w-full justify-between">
            <span>Role:</span>
            <input
              type="text"
              className="p-2 rounded-md min-w-[15rem] outline-none border-2 border-neutral-200"
              defaultValue={profile.role as string}
            />
          </div>
        </div>
        <div>
          <p className="text-xl">Cursurile mele</p>
          <div className="mt-4">
            <table className="w-full table-fixed">
              <thead className="bg-neutral-800 border-b-2 border-neutral-500">
                <tr>
                  <th className="w-1/2 px-4 py-1 text-left text-sm font-medium text-neutral-100">
                    Name
                  </th>
                  <th className="w-1/2 px-4 py-3 text-left text-sm font-medium text-neutral-100">
                    Description
                  </th>
                  <th className="w-1/2 px-4 py-3 text-left text-sm font-medium text-neutral-100">
                    Category
                  </th>
                  <th className="w-1/2 px-4 py-3 text-left text-sm font-medium text-neutral-100">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {user.courses.map((item: any, index: number) => (
                  <tr
                    key={item.id}
                    className={`${
                      index % 2 === 0 ? "bg-neutral-800" : "bg-neutral-700"
                    } hover:bg-neutral-700`}
                  >
                    <td className="px-4 py-3 whitespace-no-wrap text-sm text-neutral-100 border-b border-neutral-700">
                      {item.title}
                    </td>
                    <td className="px-4 py-3 text-sm text-neutral-100 border-b border-neutral-700">
                      {item.description}
                    </td>
                    <td className="px-4 py-3 text-sm text-neutral-100 border-b border-neutral-700">
                      {item.category}
                    </td>
                    <td className="px-4 py-3 text-sm text-neutral-100 border-b border-neutral-700">
                      <button
                        onClick={(e: any) => deleteCourse(e, item.id, user.id)}
                        className="p-2 bg-neutral-400 hover:bg-red-500 rounded-md text-black"
                      >
                        <AiFillDelete />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <DefaultButton
        name="Modifica"
        loading={loading}
        action={(e: any) => handleUpdate(e)}
      />
    </div>
  );
}

UserProfile.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export const getServerSideProps = async (ctx: any) => {
  const {
    query: { user: email },
  } = ctx;
  let user;
  try {
    user = await prisma.user.findFirst({
      where: {
        email: email,
      },
      include: {
        courses: true,
      },
    });
  } catch (err) {
    console.log(err);
  }

  return {
    props: {
      user: user,
    },
  };
};

export default UserProfile;
