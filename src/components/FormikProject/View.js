import React from "react";
import Layout from "../Layout";
import FormikProject from "./FormikProject";

export default function View() {
  return (
    <>
      <Layout columnone={<FormikProject />} columntwo={"Test"} />
    </>
  );
}
