import React, { FC, ReactNode, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { ParagraphLarge } from "../Typography";
import Card from "../Card";

export interface PanelsItems {
  title: string;
  content: ReactNode;
  disabled?: boolean;
}

export interface PanelProps {
  panelsItems: PanelsItems[];
  openedPanelIndex?: number | null;
  openedPanelIndexCb?: (index: number) => void;
}

const PanelContainer = styled(Card)<{ disabled: boolean }>`
  ${({ disabled, theme }) =>
    disabled &&
    css`
      background-color: ${theme.colors.neutral[100]};
      &,
      div {
        cursor: not-allowed;
        pointer-events: none;
      }
    `}

  & + div {
    margin-top: ${({ theme }) => theme.spacings.sm};
  }
`;

const PanelTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  cursor: pointer;

  svg {
    margin: ${({ theme }) => theme.icons.panel.spacing};

    color: ${({ theme }) => theme.icons.panel.color};
  }
`;

const Panel: FC<PanelProps> = ({
  panelsItems,
  openedPanelIndex,
  openedPanelIndexCb,
  ...props
}) => {
  const [expanded, setExpanded] = useState<number | null>();

  const handleToggle = (index: number) => {
    openedPanelIndexCb && openedPanelIndexCb(index);
    if (expanded === index) {
      setExpanded(null);
      return;
    }

    setExpanded(index);
  };

  useEffect(() => {
    if (expanded !== openedPanelIndex) {
      setExpanded(openedPanelIndex);
    }
  }, [openedPanelIndex]);

  return (
    <>
      {panelsItems.map(({ title, content, disabled = false }, index) => (
        <PanelContainer key={index} disabled={disabled} {...props}>
          <PanelTitle onClick={() => handleToggle(index)}>
            <ParagraphLarge weight="bolder">{title}</ParagraphLarge>
            {expanded === index ? <BsChevronUp /> : <BsChevronDown />}
          </PanelTitle>
          {expanded === index && content}
        </PanelContainer>
      ))}
    </>
  );
};

export default Panel;
