import authStore from "@/store/globalStore";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = () => {
  const { userProfile, logout } = authStore();
  const [initials, setInitials] = useState("");

  useEffect(() => {
    const fInitial = userProfile!.firstname!.split("")[0];
    const lInitial = userProfile!.lastname!.split("")[0];
    const ini = lInitial + fInitial;
    setInitials(ini);
  }, [userProfile]);

  console.log(userProfile);

  const [userMenu, setUserMenu] = useState(false);
  return (
    <div className="bg-neutral-100 h-[5rem] flex justify-between items-center px-2">
      <div className="hidden md:flex">E-learning</div>
      <div className="flex gap-4">
        <Link href="#">
          <button className="text-neutral-500 hover:text-black ease-in-out duration-300">
            Acasa
          </button>
        </Link>
        <Link href="#">
          <button className="text-neutral-500 hover:text-black ease-in-out duration-300">
            Acasa
          </button>
        </Link>
        <Link href="#">
          <button className="text-neutral-500 hover:text-black ease-in-out duration-300">
            Acasa
          </button>
        </Link>
        <Link href="/pagina">
          <button className="text-neutral-500 hover:text-black ease-in-out duration-300">
            Pagina
          </button>
        </Link>
      </div>
      <div>
        {userProfile!.connected ? (
          <div className="flex items-center gap-2 relative">
            <button
              onClick={() => setUserMenu(!userMenu)}
              className="w-10 h-10 bg-neutral-900 rounded-full flex items-center justify-center text-white cursor-pointer select-none"
            >
              {initials}
            </button>
            {userMenu ? (
              <div className="absolute top-[105%] -left-20 w-[7rem] bg-neutral-800 p-2 rounded-md text-gray-200 flex flex-col gap-2">
                <button>Profilul meu</button>
                <button>Profilul meu</button>
                <button>Profilul meu</button>
                <button onClick={() => logout()}>Logout</button>
              </div>
            ) : null}
          </div>
        ) : (
          <Link href={"/auth/login"}>
            <button>Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
