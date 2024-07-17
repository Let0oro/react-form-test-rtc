import React, { useEffect, useMemo } from "react";
import styled from "styled-components";

const PumpkinCSS = ({ state }) => {
  // Credit of Jaume Sanchez;

  useMemo(() => {
    const gestureByState = {
      normal: "",
      upset: "",
      complete: "",
    };

    gestureByState[state];
  }, [state]);

  return (
    <div
      style={{
        width: "90%",
        display: "flex",
        justifyContent: "start",
        paddingBlockStart: "50px",
        paddingLeft: "20%",
      }}
    >
      <Pumpkin>
        <Stem className="stem" />

        <Segment $state={state} className="segment" />
        <Segment $state={state} className="segment" />
        <Segment $state={state} className="segment" />
        <Segment $state={state} className="segment" />
        <Segment $state={state} className="segment" />

        <EyeL $state={state} className="eye left" />
        <EyeR $state={state} className="eye right" />

        <Mouth $state={state} className="mouth" />
      </Pumpkin>
    </div>
  );
};

const Pumpkin = styled.div`
  position: relative;
  width: 0;
  height: 0;
  display: flex;
  justify-content: center;

  & > * {
    transform: scaleY(1.5) scaleX(1.7);
  }

  & * {
    -webkit-transition: -webkit-transform 150ms ease-out;
    -moz-transition: -moz-transform 150ms ease-out;
    -ms-transition: -ms-transform 150ms ease-out;
    -o-transition: -o-transform 150ms ease-out;
    transition: transform 150ms ease-out;
  }
`;

const Stem = styled.div`
  position: absolute;
  color: #5c7a23;
  font-size: 200px;
  font-weight: 800px;
  font-family: sans-serif;
  left: 110px;
  top: 140px;
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  transform: rotate(180deg);

  &:after {
    position: absolute;
    content: "⟆";
    color: #7c9d3e;
    font-size: 150px;
    font-weight: 800px;
    font-family: sans-serif;
    left: 8px;
    top: 50px;
  }

  &:before {
    position: absolute;
    content: "⟆";
    color: #7c9d3e;
    font-size: 190px;
    font-weight: 800px;
    font-family: sans-serif;
    left: 12px;
    top: 10px;
    z-index: -1;
  }
`;

const Segment = styled.div`
  position: absolute;
  display: block;
  width: 126px;
  height: 180px;
  background-color: red;
  -webkit-border-radius: 63px 63px 63px 63px / 108px 108px 72px 72px;
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  background: #fb9a39; /* Old browsers */
  background: -moz-radial-gradient(
    center,
    ellipse cover,
    #fb9a39 0%,
    #c13c07 100%
  ); /* FF3.6+ */
  background: -webkit-gradient(
    radial,
    center center,
    0px,
    center center,
    100%,
    color-stop(0%, #fb9a39),
    color-stop(100%, #c13c07)
  ); /* Chrome,Safari4+ */
  background: -webkit-radial-gradient(
    center,
    ellipse cover,
    #fb9a39 0%,
    #c13c07 100%
  ); /* Chrome10+,Safari5.1+ */
  background: -o-radial-gradient(
    center,
    ellipse cover,
    #fb9a39 0%,
    #c13c07 100%
  ); /* Opera 12+ */
  background: -ms-radial-gradient(
    center,
    ellipse cover,
    #fb9a39 0%,
    #c13c07 100%
  ); /* IE10+ */
  background: radial-gradient(
    ellipse at center,
    #fb9a39 0%,
    #c13c07 100%
  ); /* W3C */
  ${({$state}) => /(upset)|(complete)/gi.test($state) &&
  ({
    "upset": `
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fb9a39', endColorstr='#c13c07',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
    box-shadow: 0 0 20px rgb(213, 62, 28);
    `,
    "complete": `
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fb9a39', endColorstr='#c13c07',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
    box-shadow: 0 0 20px rgba(206, 79, 51, 1);
    `,
  }[$state])}

  &:after {
    content: "";
    position: absolute;
    right: 0;
    width: 100%;
    height: 100%;
    -webkit-border-radius: 63px 63px 63px 63px / 108px 108px 72px 72px;
    border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
    background: -moz-linear-gradient(
      top,
      rgba(251, 154, 57, 0) 0%,
      rgba(127, 35, 5, 0.4) 100%
    ); /* FF3.6+ */
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(0%, rgba(251, 154, 57, 0)),
      color-stop(100%, rgba(127, 35, 5, 0.4))
    ); /* Chrome,Safari4+ */
    background: -webkit-linear-gradient(
      top,
      rgba(251, 154, 57, 0) 0%,
      rgba(127, 35, 5, 0.4) 100%
    ); /* Chrome10+,Safari5.1+ */
    background: -o-linear-gradient(
      top,
      rgba(251, 154, 57, 0) 0%,
      rgba(127, 35, 5, 0.4) 100%
    ); /* Opera 11.10+ */
    background: -ms-linear-gradient(
      top,
      rgba(251, 154, 57, 0) 0%,
      rgba(127, 35, 5, 0.4) 100%
    ); /* IE10+ */
    background: linear-gradient(
      to bottom,
      rgba(251, 154, 57, 0) 0%,
      rgba(127, 35, 5, 0.4) 100%
    ); /* W3C */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00fb9a39', endColorstr='#667f2305',GradientType=0 ); /* IE6-9 */
  }

  &:nth-child(5) {
    left: -40px;
    height: 160px;
    top: 10px;
  }

  &:nth-child(4) {
    left: 40px;
    height: 160px;
    top: 10px;
  }

  &:nth-child(2) {
    left: -60px;
    height: 120px;
    top: 30px;
  }

  &:nth-child(3) {
    left: 60px;
    height: 120px;
    top: 30px;
  }

  &:nth-child(6) {
    left: 0;
    height: 180px;
    top: 0;
  }
`;

const EyeL = styled.div`
  position: absolute;
  width: 0px;
  height: 0px;
  left: -10px;
  top: 30px;
  -webkit-transform: rotate(-20deg);
  -moz-transform: rotate(-20deg);
  -ms-transform: rotate(-20deg);
  -o-transform: rotate(-20deg);
  transform: rotate(-20deg);

  &:after {
    content: "";
    position: absolute;
    width: 0px;
    height: 0px;
    left: -20px;
    top: -20px;
  }

  border-right: 30px solid transparent;
  border-top: 30px solid transparent;
  border-left: 30px solid rgb(193, 60, 7);
  border-bottom: 30px solid rgb(193, 60, 7);
  border-top-left-radius: 60px;
  border-top-right-radius: 60px;
  border-bottom-left-radius: 60px;
  border-bottom-right-radius: 60px;

  ${(props) =>
    props.$state == "normal" &&
    `

&:after {
  border-right: 25px solid transparent;
  border-top: 25px solid transparent;
  border-left: 25px solid #CF5C05;
  border-bottom: 25px solid #CF5C05;
  border-top-left-radius: 60px;
  border-top-right-radius: 60px;
  border-bottom-left-radius: 60px;
  border-bottom-right-radius: 60px;
  -webkit-filter: drop-shadow(0 0 10px transparent);
  -moz-filter: drop-shadow(0 0 10px transparent);
  filter: drop-shadow(0 0 10px transparent);
}

`}

  ${(props) =>
    /(upset)|(complete)/gi.test(props.$state) &&
    `
  -webkit-filter: drop-shadow(0 0 10px ${props.$state == "complete" ? "rgb(248,181,0)" : "#f83a00"});
  -moz-filter: drop-shadow(0 0 10px ${props.$state == "complete" ? "rgb(248,181,0)" : "#f83a00"});
  filter: drop-shadow(0 0 10px ${props.$state == "complete" ? "rgb(248,181,0)" : "#f83a00"});
  transition: all .2s ease-out;
    &:after {
    border-right: 25px solid transparent;
    border-top: 25px solid transparent;
    border-left: 25px solid ${props.$state == "complete" ? "rgb(248, 181, 0)" : "#f83a00"};
    border-bottom: 25px solid ${props.$state == "complete" ? "rgb(248, 181, 0)" : "#f83a00"};
    border-top-left-radius: 60px;
    border-top-right-radius: 60px;
    border-bottom-left-radius: 60px;
    border-bottom-right-radius: 60px;
    -webkit-filter: drop-shadow(0 0 10px ${props.$state == "complete" ? "rgb(248, 181, 0)" : "#f83a00"});
    -moz-filter: drop-shadow(0 0 10px ${props.$state == "complete" ? "rgb(248, 181, 0)" : "#f83a00"});
    filter: drop-shadow(0 0 10px ${props.$state == "complete" ? "rgb(248, 181, 0)" : "#f83a00"});
  }
    `}
`;

const EyeR = styled(EyeL)`
  top: 30px;
  left: 70px;
  -webkit-transform: rotate(-70deg);
  -moz-transform: rotate(-70deg);
  -ms-transform: rotate(-70deg);
  -o-transform: rotate(-70deg);

  &:after {
    left: -30px;
    top: -30px;
  }
`;

const Mouth = styled.div`
  position: absolute;
  width: 0px;
  height: 0px;
  left: 0px;
  top: 90px;
  border-right: 30px solid transparent;
  border-top: 30px solid transparent;
  border-left: 30px solid rgb(193, 60, 7);
  border-bottom: 30px solid rgb(193, 60, 7);
    border-top-left-radius: 60px;
  border-top-right-radius: 60px;
  border-bottom-left-radius: 60px;
  border-bottom-right-radius: 60px;
  
  -webkit-transform: scale(2, 1) rotate(-45deg) translateX(10px)
    translateY(10px);
  -moz-transform: scale(2, 1) rotate(-45deg) translateX(10px) translateY(10px);
  -ms-transform: scale(2, 1) rotate(-45deg) translateX(10px) translateY(10px);
  -o-transform: scale(2, 1) rotate(-45deg) translateX(10px) translateY(10px);


  &:after {
    content: "";
    position: absolute;
    width: 0px;
    height: 0px;
    left: -25px;
    top: -25px;
    border-right: 25px solid transparent;
    border-top: 25px solid transparent;
        ${(props) =>
      props.$state == "normal" &&
      `border-left: 25px solid transparent;
    border-bottom: 25px solid transparent;
    -moz-filter: drop-shadow(0 0 10px transparent);
    filter: drop-shadow(0 0 10px transparent);
      -webkit-filter: drop-shadow(0 0 10px transparent);

  `}
        ${(props) =>
      props.$state == "complete" &&
      `border-left: 25px solid rgb(248, 181, 0);
    border-bottom: 25px solid rgb(248, 181, 0);
        -webkit-filter: drop-shadow(0 0 10px rgb(248, 181, 0));
    -moz-filter: drop-shadow(0 0 10px rgb(248, 181, 0));
    filter: drop-shadow(0 0 10px rgb(248, 181, 0));

  `}
      border-top-left-radius: 60px;
    border-top-right-radius: 60px;
    border-bottom-left-radius: 60px;
    border-bottom-right-radius: 60px;
  }


`;

export default PumpkinCSS;
