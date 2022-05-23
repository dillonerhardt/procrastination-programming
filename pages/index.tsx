import type { NextPage } from "next";
import Head from "next/head";
import { FiBell, FiHome, FiKey } from "react-icons/fi";

const Home: NextPage = () => {
  return (
    <div className="p-5">
      <Head>
        <title>Procrastination Payer</title>
        <meta
          name="description"
          content="Procrastination Payer make money motivate you!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex justify-end py-4">
        <FiBell size={26} color="#777" />
      </header>
      <main>
        <div className="flex flex-col items-center mb-5">
          <img
            className="h-24 w-20 object-cover rounded-2xl mb-3"
            src="https://images.unsplash.com/photo-1628260412297-a3377e45006f?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnRvb258ZW58MHx8MHx8&auto=format&fit=crop&w=500"
            alt="User avatar"
          />
          <div>
            <span className="text-lg text-gray-500">Good Morning</span>
          </div>
          <span className="text-2xl">
            <strong>Dillon Erhardt</strong>
          </span>
        </div>
        <div className="bg-black p-5 rounded-2xl text-white mb-5">
          First card
        </div>
        <div className="bg-blue-700 text-white p-5 rounded-2xl">
          <a className="text-white underline" href="/api/ob-auth">
            Authenticate with bank
          </a>
        </div>
      </main>
      <footer className="py-5 flex justify-around fixed bottom-0 w-full left-0">
        <div className="flex flex-col items-center">
          <FiHome size={26} color="#777" className="mb-2" />
          <span className="text-gray-600">Home</span>
        </div>
        <div className="flex flex-col items-center">
          <FiKey size={26} color="#777" className="mb-2" />
          <span className="text-gray-600">Accounts</span>
        </div>
      </footer>
    </div>
  );
};

export default Home;
