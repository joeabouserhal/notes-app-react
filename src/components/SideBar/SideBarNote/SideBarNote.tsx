import React from "react";
import "./SideBarNote.css";
import { useNavigate } from "react-router-dom";

interface Props {
  title: string;
  id: string;
}

const SideBarNote = (props: Props) => {
  const navigate = useNavigate();

  const navigateToNote = () => {
    navigate(`/${props.id}`);
  };

  return (
    <div className="noteContainer" onClick={navigateToNote}>
      <p className="previewTitle">
        {props.title == "" ? "No Title" : props.title}
      </p>
    </div>
  );
};

export default SideBarNote;
