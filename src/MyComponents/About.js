import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export const About = () => {
  let Aboutstyle = {
    minHeight: "90vh",
  };
  return (
    <div style={Aboutstyle}>
      This is about component
      <p>
        Welcome to [Your To-Do List Website] – your ultimate productivity
        companion! We understand that life can get busy, and staying organized
        is key to success. That's why we created this intuitive and
        user-friendly platform to help you manage your tasks with ease. At [Your
        To-Do List Website], we believe in simplifying your life by providing a
        streamlined solution for task management. Whether you're a student,
        professional, or anyone with a busy schedule, our platform is designed
        to adapt to your unique needs.
      </p>
    </div>
  );
};
