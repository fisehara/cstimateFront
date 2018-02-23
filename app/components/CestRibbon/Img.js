import styled from "styled-components";

import NormalImg from "components/Img";

const Img = styled(NormalImg)`
padding: 16px 100px;
width: 25%;
  -moz-transform: scaleX(${props=>props.mirror?'-1':'1'});    /* Gecko */
  -o-transform: scaleX(${props=>props.mirror?'-1':'1'});      /* Opera */
  -webkit-transform: scaleX(${props=>props.mirror?'-1':'1'}); /* Webkit */
  transform: scaleX(${props=>props.mirror?'-1':'1'});         /* Standard */
  filter: ${props=>props.mirror?'FlipH':''};                 /* IE 6/7/8 */
`;

export default Img;
