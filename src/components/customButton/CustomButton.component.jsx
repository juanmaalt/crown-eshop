import React from "react";

import {CustomButtonContainer} from "./CustomButton.styles";

export const CustomButton = ({children, ...props}) => (
  <CustomButtonContainer className="custom-button" {...props}>{children}</CustomButtonContainer>
);
