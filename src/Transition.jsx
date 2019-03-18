import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import "./transition.css";

export const Transition = props => (
  <ReactCSSTransitionGroup
    transitionName="tooltip"
    transitionEnterTimeout={500}
    transitionLeave={false}
    {...props}
  />
);
