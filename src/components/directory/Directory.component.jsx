import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import PropTypes from "prop-types";

import MenuItem from "../menuItem/MenuItem.component";
import { selectSections } from "../../redux/directory/directory.selector";

import { DirectoryMenu } from "./Directory.styles";

const Directory = ({ sections }) => {
  return (
    <DirectoryMenu>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </DirectoryMenu>
  );
};

Directory.propTypes = {
  sections: PropTypes.array.isRequired,
};

const mapStateToProps = createStructuredSelector({
  sections: selectSections,
});

export default connect(mapStateToProps, null)(Directory);
