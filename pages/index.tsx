import type { NextPage } from "next";
import Layout from "@components/layout/Layout";

const Home: NextPage = () => {
  return (
    <>
      <section className="h-screen bg-red-100"></section>
      <section className="h-screen bg-red-300"></section>
      <section className="h-screen bg-red-500"></section>
    </>
  );
};

export default Home;
