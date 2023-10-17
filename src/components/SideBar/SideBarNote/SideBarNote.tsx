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
      {props.title == "" ? "No Title" : props.title}
    </div>
  );
};

export default SideBarNote;
