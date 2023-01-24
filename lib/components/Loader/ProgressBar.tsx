import React from "react";
import styled from "styled-components";

import { ProgressBarProps } from "./Loader.types";

const Bar = styled.div<Pick<ProgressBarProps, "size">>`
  position: relative;
  width: 100%;
  height: ${({ theme, size }) => theme.progressBar.sizes[size || "medium"]};
  overflow: hidden;

  border-radius: ${({ theme, size }) =>
    theme.progressBar.borderRadius[size || "medium"]};

  background-color: ${({ theme }) => theme.progressBar.bgColor};
`;

const InnerBar = styled.div`
  position: absolute;
  width: ${(props: ProgressBarProps) => `${props.percentage}%` || "0%"};
  height: ${({ theme, size }) => theme.progressBar.sizes[size || "medium"]};

  border-radius: ${({ theme, size }) =>
    theme.progressBar.borderRadius[size || "medium"]};

  background-color: ${({ theme, variant }) =>
    theme.progressBar.barColor[variant || "primary"]};
`;

const ProgressBar = ({ variant = "primary", ...props }: ProgressBarProps) => {
  return (
    <Bar
      role="progressbar"
      aria-label="progressbar"
      aria-valuenow={props.percentage}
      {...props}
    >
      <InnerBar variant={variant} {...props} />
    </Bar>
  );
};

export default ProgressBar;
