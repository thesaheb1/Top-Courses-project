import Card from "./Card";
import React from "react";

const Cards = (props) => {
  let Courses = props.CourseData;
  let Category = props.Category;

  function getAllCourses() {
    if (Category === "All") {
      let allCourses = [];

      Object.values(Courses).forEach((array) => {
        array.forEach((cdata) => allCourses.push(cdata));
      });

      return allCourses;
    } else {
      return Courses[Category];
    }
  }

  return (
    <div className="xl:w-[60vw] lg:w-[80vw] w-[90vvw] m-auto my-8 flex justify-center items-baseline flex-wrap gap-4">
      {getAllCourses().map((cardData) => {
        return <Card key={cardData.id} cardData={cardData}></Card>;
      })}
    </div>
  );
};

export default Cards;
