import React, { useState, useEffect } from "react";

import styled from "@emotion/styled";

/**
 * To use this, create a custom event like:
 * const customEvent = new CustomEvent("toast", {
 *    detail: {
 *      type: "dismiss",
 *      message: "Your fancy message here!"
 *    }
 * });
 * window.dispatchEvent(customEvent);
 *
 * The message can be anything.
 * The type must be "dismiss" or "refresh"
 */

const StyledToast = styled.div(
  {
    position: "fixed",
    bottom: "1rem",
    left: "1rem",
    right: "1rem",
    textAlign: "center",
    width: "calc(100%-2rem)",
    display: "grid",
    gridTemplateColumns: "1fr 120px",
    justifyContent: "center",
    alignItems: "center",
    color: "#ffffff",
    willChange: "transform",
    transitionProperty: "visibility, transform",
    transitionDuration: "225ms",
    transitionTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)"
  },
  props => ({
    zIndex: props.theme.zIndex.abovePage,
    backgroundColor: props.theme.colors.primaryDark
  })
);

import Button from "../base/button";

export default function Toast() {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("hello world");
  const [type, setType] = useState("dismiss");

  function showToast(e) {
    setMessage(e.detail.message);
    setType(e.detail.type);
    setShow(true);
  }

  function actionHandler() {
    if (type === "refresh") {
      document.location.reload();
    }
    setShow(false);
  }

  useEffect(() => {
    window.addEventListener("toast", showToast);
    return function cleanup() {
      window.removeEventListener("toast", showToast);
    };
  }, []);

  const toastStyles = {
    transform: show ? "translate3d(0, 0, 0)" : "translate3d(0, 100%, 0)",
    visibility: show ? "visible" : "hidden"
  };

  return (
    <StyledToast style={toastStyles}>
      {message}
      <Button design="ghost" onClick={actionHandler}>
        {type}
      </Button>
    </StyledToast>
  );
}
