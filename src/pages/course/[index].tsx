import MainLayout from "@/layouts/mainLayout";
import prisma from "@/lib/prismaFunctions";
import authStore from "@/store/globalStore";
import axios from "axios";
import React, { ReactElement, useState } from "react";

function Course({ course }: any) {
  const { userProfile } = authStore();
  const [courseP, setCourse] = useState(course);

  const alreadyEnroled = courseP?.attending.find(
    (user: any) => user.email === userProfile?.email
  );

  const enrolToCourse = async () => {
    try {
      const { data } = await axios({
        method: "POST",
        url: "/api/user/courses",
        data: {
          userId: userProfile?.email,
          courseId: course?.id,
        },
      });
      setCourse({
        ...course,
        attending: [data.data],
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="h-[85vh] p-4">
      <div className="text-white font-medium rounded-lg shadow dark:bg-gray-900 mb-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 text-2xl flex justify-between items-center">
          <span>{courseP?.title}</span>
          {userProfile?.connected && !alreadyEnroled && (
            <button
              onClick={() => enrolToCourse()}
              className="text-sm p-2 border-2 border-blue-400/20 bg-black/10 hover:border-blue-400/40 rounded-md ease-in-out duration-300"
            >
              Ma inrolez
            </button>
          )}
          <p className="flex items-center gap-2 text-sm">
            <span>{courseP?.attending?.length}</span>
            <span>
              {courseP?.attending?.length === 1 ? "Persoana" : "Persoane"}{" "}
              inrolate
            </span>
          </p>
        </div>
      </div>
      <iframe
        width="100%"
        height="90%"
        src={courseP?.url}
        title="YouTube video player"
        className="rounded-md border-2 border-black"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}

Course.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export const getServerSideProps = async (ctx: any) => {
  const { query } = ctx;
  const course = await prisma.course.findFirst({
    where: {
      id: query.index,
    },
    include: {
      attending: true,
    },
  });
  return {
    props: {
      course: course,
    },
  };
};

export default Course;
