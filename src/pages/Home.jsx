import React from "react";
import Hero from "../components/Hero";
import RecentWorks from "../components/RecentWorks";
import Services from "../components/Services";
import Statistics from "../components/Statistics";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <RecentWorks />
      <Services />
      <Statistics />
      <ContactUs />
      <Footer />
    </div>
  );
}
