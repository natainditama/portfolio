import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <section className="h-screen bg-black text-center">
        <div className="container mx-auto flex h-full flex-col justify-center text-white">
          <h1 className="text-6xl">Comming Soon</h1>
          <p className="mt-3">Our website is currently undergoing scheduled maintenance. <br /> We Should be back shortly. Thank you for your patience</p>
        </div>
      </section>
    </>
  );
};

export default Home;
