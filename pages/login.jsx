import React from "react";
import { getProviders, signIn } from "next-auth/react";

const Login = ({ providers }) => {
  console.log(providers);
  return (
    <div className="flex flex-col items-center bg-black min-h-screen w-full justify-center">
      <img
        className="w-52 mb-12"
        src="https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png"
        alt="spotify-logo"
      />

      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            className="bg-[#18D860] text-white text-lg font-bold p-6 rounded-full w-64 "
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
          >
            Login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
