import styled from '@emotion/styled';
import { colors } from '@/styles/colorPalette';

export const Label = styled.div<{ isFocus: boolean }>`
  color: ${(props) => (props.isFocus ? `${colors.yellow}` : `${colors.gray100}`)};
`;

export const Input = styled.input<{ isFocus: boolean }>`
  width: 100%;
  padding: 15px;
  margin: 10px 0;
  box-sizing: border-box;
  border-radius: 2em;
  border: 1px solid
    ${(props) => (props.isFocus ? `${colors.yellow}` : `${colors.gray100}`)};
  outline: none;

  ::placeholder {
    color: ${colors.gray100};
  }
`;

export const Error = styled.div`
  position: absolute;
  color: ${colors.red};
  padding: 0 10px 0 10px;
`;
