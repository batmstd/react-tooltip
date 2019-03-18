import React, { useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { Transition } from "./Transition.jsx";
import "./tooltip.css";

const Tooltip = props => {
  const { children, content, position, style } = props;
  const [visible, setVisible] = useState(false);
  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  const classes = classNames("tooltip", position);
  return (
    <span className="tooltipWrapper">
      <Transition>
        {visible && (
          <span style={style} className={classes}>
            {content}
          </span>
        )}
      </Transition>
      <span className="targetElement" onMouseEnter={show} onMouseLeave={hide}>
        {children}
      </span>
    </span>
  );
};

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  content: PropTypes.string.isRequired,
  position: PropTypes.oneOf(["top", "right", "bottom", "left"]),
  style: PropTypes.objectOf(PropTypes.string)
};

Tooltip.defaultProps = {
  style: {},
  position: "bottom"
};

export default Tooltip;
