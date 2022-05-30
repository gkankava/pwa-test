import React from "react";
import { ReactSVG } from "react-svg";
import styled, { css } from "styled-components";

const StyledSVGIcon = styled(ReactSVG)`
  svg {
    fill: black;
    ${({ size }) =>
      size &&
      css`
        width: ${size}px;
        height: ${size}px;
      `}
    ${({ transform }) =>
      transform &&
      css`
        transform: ${transform};
      `}
    path {
      ${({ color }) =>
        color &&
        css`
          fill: ${color};
        `}
    }
    rect {
      ${({ color }) =>
        color &&
        css`
          fill: ${color};
        `}
    }
    circle {
      ${({ color }) =>
        color &&
        css`
          fill: ${color};
        `}
    }
  }
`;

const SMIcon = (props) => {
  if (props.png) {
    return (
      <img
        className="sm-icons-cat"
        src={
          props.name
            ? require(`./icons/png/${props.name}.png`)
            : require(`./icons/png/default.png`)
        }
        alt="category-icon"
        style={{
          height: props.size,
          width: props.size,
          objectFit: "contain",
        }}
      />
    );
  }
  return (
    <StyledSVGIcon
      src={
        props.name
          ? require(`./icons/${props.name}.svg`)
          : require(`./icons/default.svg`)
      }
      color={props.color}
      size={props.size}
      transform={props.transform}
    />
  );
};

export default SMIcon;
