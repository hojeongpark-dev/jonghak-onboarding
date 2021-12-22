import styled from "styled-components";
import {
  flexbox, FlexboxProps, space, SpaceProps, layout, LayoutProps
} from "styled-system";

const Flex = styled.div<FlexboxProps & SpaceProps & LayoutProps>`
  display: flex;
  ${flexbox};
  ${space};
  ${layout};
`;

export default Flex;
