import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import LatesNews from "../components/LatesNews";
import Navbar from "../components/Navbar";
import LeftAside from "../components/homelayout/LeftAside";
import RightAside from "../components/homelayout/RightAside";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto">
          <LatesNews></LatesNews>
        </section>
        <nav>
          <Navbar></Navbar>
        </nav>
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12  mb-5 gap-5">
        <aside className="col-span-3 sticky top-20 h-fit  ">
          <LeftAside></LeftAside>
        </aside>
        <section className="main col-span-6 p-3">
          <Outlet></Outlet>
        </section>
        <aside className="right_nav col-span-3 sticky top-20 h-fit ">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
