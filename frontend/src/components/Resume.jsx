import { Modal } from "@mui/material";
import React from "react";
import resume from "../assets/resume.pdf";

const Resume = ({ openResume }) => {
  <Modal open={openResume}>
    <iframe
      src={resume}
      width={"100%"}
      height={"100%"}
      loading="lazy"
      title="Kyle Jones Resume"
    ></iframe>
  </Modal>;
};

export default Resume;
