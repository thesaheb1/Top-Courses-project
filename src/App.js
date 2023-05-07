import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";
import FilterData from "./data";
import {  toast } from 'react-toastify';
const ApiUrl = "https://codehelp-apis.vercel.app/api/get-top-courses";

const App = () => {
  const [CourseData, SetCourseData] = useState([]);
  const [Loading, SetLoading] = useState(true);
  const  [Category,SetCategory] = useState(FilterData[0].title);
  async function getcoursedata() {
    SetLoading(true);
    try {
      const response = await fetch(ApiUrl);
      const output = await response.json();
      SetCourseData(output.data);
    } catch (error) {
      toast.error("Can't able to fetch data");
    }
    SetLoading(false);
  }

  useEffect(() => {
    getcoursedata();
  }, []);

  return (
    <div className="bg-[#B04759]">
      <Navbar> </Navbar>
      <Filter Category = {Category} SetCategory = {SetCategory} FilterData={FilterData}> </Filter>
      {
      Loading ?<Spinner></Spinner> : <Cards Category = {Category} CourseData={CourseData}> </Cards>
      }
      
    </div>
  );
};

export default App;
