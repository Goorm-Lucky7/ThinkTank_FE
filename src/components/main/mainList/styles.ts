import styled from "@emotion/styled";
import { colors } from "../../../styles/colorPalette";

export const MlContainer = styled.div`
    flex-grow : 1;
    padding : 20px 50px;
    box-sizing : border-box;
    display : flex;
    flex-direction : column;
    align-items : center;
    border-left : 1px solid ${colors.gray50};
    border-right : 1px solid ${colors.gray50};

    @media (max-width : 1300px) {
        border : none;
        width : 95vw;
        overflow-x : hidden;
    }
`;