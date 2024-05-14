import styled from '@emotion/styled';
import { HTMLAttributes } from 'react';
import { IconValues } from '.';
import { css } from '@emotion/react';
import { Colors, colors } from '@/styles/colorPalette';

interface IconContainerProps extends HTMLAttributes<HTMLDivElement> {
  $rotate?: boolean;
  size?: number;
  color?: Colors;
  $active?: boolean;
  value: IconValues;
}

export const Container = styled.div<IconContainerProps>`
  width: ${({ size }) => (size ? `${size}px` : 'fit-content')};
  height: ${({ size }) => (size ? `${size}px` : 'fit-content')};
  ${({ color = 'black' }) => css`
    fill: ${colors[color]};
    stroke: ${colors[color]};
  `};
  ${({ $rotate }) =>
    $rotate
      ? css`
          transform: rotate(180deg);
        `
      : css`
          transform: rotate(0deg);
        `};
  transition: all 0.3s ease;
  ${({ $active }) =>
    $active
      ? css`
          &:hover {
            transform: scale(1.1);
          }
          &:active {
            transform: scale(0.9);
          }
        `
      : null}

  cursor: pointer;
  svg {
    width: 100%;
    height: 100%;
    object-fit: contain;
    stroke: ${({ color }) => (color ? color : '')};
  }
`;
