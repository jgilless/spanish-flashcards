import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const StyledButton = styled.button(
  {
    border: "none",
    borderRadius: "2px",
    padding: "1rem 2rem",
    textAlign: "center",
    fontSize: "1.2rem"
  },
  props => {
    let shadow = {};
    if (props.design !== "ghost") {
      shadow = {
        boxShadow:
          "0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);"
      };
    }
    if (props.design === "primary") {
      return Object.assign({}, shadow, {
        color: "white",
        backgroundColor: props.theme.colors.primaryDark
      });
    } else if (props.design === "secondary") {
      return Object.assign({}, shadow, {
        color: "white",
        backgroundColor: props.theme.colors.secondary
      });
    } else if (props.design === "success") {
      return Object.assign({}, shadow, {
        color: "white",
        backgroundColor: props.theme.colors.success
      });
    } else if (props.design === "danger") {
      return Object.assign({}, shadow, {
        color: "white",
        backgroundColor: props.theme.colors.danger
      });
    }
    return Object.assign({}, shadow, {
      color: "inherit",
      backgroundColor: "inherit",
      textDecoration: "underline"
    });
  }
);

const Button = ({
  onClick,
  type,
  design,
  disabled,
  tabIndex,
  label,
  children
}) => {
  return (
    <StyledButton
      design={design}
      role="button"
      type={type}
      aria-label={label}
      tabIndex={tabIndex}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  design: PropTypes.oneOf([
    "primary",
    "secondary",
    "danger",
    "ghost",
    "success"
  ]),
  disabled: PropTypes.bool,
  tabIndex: PropTypes.number,
  label: PropTypes.string,
  children: PropTypes.node
};

Button.defaultProps = {
  type: "button",
  disabled: false,
  tabIndex: 0,
  design: "primary"
};

export default Button;
