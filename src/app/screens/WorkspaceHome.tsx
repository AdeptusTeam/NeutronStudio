import React, { useState, useRef, useEffect } from "react";
import { ipcRenderer } from "electron";
import { CSSTransition } from "react-transition-group";

function WorkspaceHome() {
  const [isHomeVisible, setIsHomeVisible] = useState(true);

  return (
    <div className="home-main">
      <div className="sidebar">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            width="800"
            height="800"
            viewBox="0 0 495.398 495.398"
            className="sidebarIcon"
          >
            <path d="m487.083 225.514-75.08-75.08v-86.73c0-15.682-12.708-28.391-28.413-28.391-15.669 0-28.377 12.709-28.377 28.391v29.941L299.31 37.74c-27.639-27.624-75.694-27.575-103.27.05L8.312 225.514c-11.082 11.104-11.082 29.071 0 40.158 11.087 11.101 29.089 11.101 40.172 0l187.71-187.729c6.115-6.083 16.893-6.083 22.976-.018l187.742 187.747a28.337 28.337 0 0 0 20.081 8.312c7.271 0 14.541-2.764 20.091-8.312 11.086-11.086 11.086-29.053-.001-40.158z" />
            <path d="M257.561 131.836c-5.454-5.451-14.285-5.451-19.723 0L72.712 296.913a13.977 13.977 0 0 0-4.085 9.877v120.401c0 28.253 22.908 51.16 51.16 51.16h81.754v-126.61h92.299v126.61h81.755c28.251 0 51.159-22.907 51.159-51.159V306.79c0-3.713-1.465-7.271-4.085-9.877L257.561 131.836z" />
          </svg>
        </div>
      </div>
      <CSSTransition
        in={isHomeVisible}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        <div className="home-work-container"></div>
      </CSSTransition>
      <div className="sidebar-workspace">
        <div>
          <p>Explorer</p>
        </div>
        <div></div>
      </div>
    </div>
  );
}
export default WorkspaceHome;
