import { css } from '@emotion/react';

export const typographyMap = {
  t1: css`
    font-size: 36px;
  `,
  t2: css`
    font-size: 32px;
  `,
  t3: css`
    font-size: 28px;
  `,
  t4: css`
    font-size: 24px;
  `,
  t5: css`
    font-size: 20px;
  `,
  t6: css`
    font-size: 16px;
  `,

  regular: css`
    font-weight: 400;
  `,
  medium: css`
    font-weight: 500;
  `,
  semibold: css`
    font-weight: 600;
  `,
  bold: css`
    font-weight: 700;
  `,
};

export type Typograph = keyof typeof typographyMap;
