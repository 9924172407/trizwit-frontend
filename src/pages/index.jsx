import { useEffect, useState } from "react";
import "./index";
import Accordion from "../component/Accordion";
import HeroSection from "../component/HeroSection";

const HomePage = () => {
  const [data, setData] = useState([]);

  const getAllSyllabusData = () => {
    fetch("http://localhost:3000/api/syllabus")
      .then((res) => res.json())
      .then((res) => setData(res?.data))
      .catch((error) => console.error("Error fetching data:", error));
  };
  console.log(data);

  useEffect(() => {
    getAllSyllabusData();
  }, []);
  return (
    <div className="px-10">
      <HeroSection />
      <Accordion data={data} />
    </div>
  );
};

export default HomePage;
