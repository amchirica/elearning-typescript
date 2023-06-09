import authStore from "@/store/globalStore";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import DefaultButton from "../Buttons/DefaultButton";
import { AiOutlineLogout } from "react-icons/ai";

const Header = () => {
  const router = useRouter();
  const { userProfile, logout, loading, userProfilePopup } = authStore();
  const [initials, setInitials] = useState("");

  useEffect(() => {
    if (userProfile?.connected) {
      const fInitial = userProfile!.firstname!.split("")[0];
      const lInitial = userProfile!.lastname!.split("")[0];
      const ini = lInitial + fInitial;
      setInitials(ini);
    }
  }, [userProfile]);

  const handleLogout = () => {
    logout();
    authStore.setState({
      userProfile: {
        connected: false,
      },
    });
    router.reload();
  };

  const buttonClass =
    "hover:bg-neutral-700 ease-in-out duration-300 p-2 text-start";

  return (
    <div className="z-20 bg-neutral-100 flex items-center justify-between px-10">
      <div className="h-20 md:flex">
        <img className="h-[5rem]" src="/images/icon.png" />
      </div>

      <div className="flex gap-4">
        <Link href="/">
          <button className="text-neutral-500 hover:text-black ease-in-out duration-300">
            Home
          </button>
        </Link>
        <Link href="/about">
          <button className="text-neutral-500 hover:text-black ease-in-out duration-300">
            About
          </button>
        </Link>
        <Link href="/courses">
          <button className="text-neutral-500 hover:text-black ease-in-out duration-300">
            Course
          </button>
        </Link>
        <Link href="/enrolment">
          <button className="text-neutral-500 hover:text-black ease-in-out duration-300">
            Enrolment
          </button>
        </Link>
        <Link href="/results">
          <button className="text-neutral-500 hover:text-black ease-in-out duration-300">
            Results
          </button>
        </Link>
        <Link href="/contact">
          <button className="text-neutral-500 hover:text-black ease-in-out duration-300">
            Contact
          </button>
        </Link>
      </div>

      <div>
        {userProfile!.connected ? (
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-2 relative"
          >
            <button
              onClick={() =>
                authStore.setState({ userProfilePopup: !userProfilePopup })
              }
              className="w-10 h-10 bg-neutral-900 rounded-full flex items-center justify-center text-white cursor-pointer select-none"
            >
              {initials}
            </button>
            {userProfilePopup ? (
              <div className="absolute top-[105%] -left-20 w-[7rem] bg-neutral-800 rounded-md text-gray-200 flex flex-col py-2">
                <Link
                  href={`/user?user=${userProfile?.email}`}
                  className={buttonClass}
                >
                  <button>Cursurile mele</button>
                </Link>
                <Link
                  href={`/user?user=${userProfile?.email}`}
                  className={buttonClass}
                >
                  <button>Profilul meu</button>
                </Link>
                <button
                  onClick={() => handleLogout()}
                  className={`${buttonClass} flex items-center justify-between`}
                >
                  <span>Logout</span>
                  <AiOutlineLogout className="text-xl" />
                </button>
              </div>
            ) : null}
          </div>
        ) : (
          <Link href={"/auth/login"}>
            <DefaultButton name="Login" action={"none"} loading={loading} />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
