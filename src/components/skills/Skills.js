import React from "react";

export const Skills = () => {
  return (
    <section id="skills" class="skills container mt-5 py-5">
      <div class="sec-title fs-1 fw-bolder text-center m-auto">skills</div>
      <div class="sec-content fs-1 fw-bolder mt-5 d-flex justify-content-between flex-wrap">
        {/* <!-- flex wrap placed incase we have more than 3 skill,so it will wrap to the next line --> */}
        <span class="d-flex flex-column align-items-center">
          <i class="fab fa-html5 text-danger"></i>HTML
        </span>
        <span class="d-flex flex-column align-items-center">
          <i class="fab fa-css3-alt text-primary"></i>CSS
        </span>
        <span class="d-flex flex-column align-items-center">
          <i class="fab fa-js text-warning"></i>Javascript
        </span>
      </div>
    </section>
  );
};
