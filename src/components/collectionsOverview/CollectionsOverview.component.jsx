import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import PropTypes from "prop-types";

import CollectionPreview from "../collectionPreview/CollectionPreview.component";
import { selectCollectionsForPreview } from "../../redux/shopData/shopData.selector";

import { CollectionOverview } from "./CollectionsOverview.styles";

const CollectionsOverview = ({ collections }) => (
  <CollectionOverview>
    {collections.map(({ id, ...otherProps }) => (
      <CollectionPreview key={id} {...otherProps} />
    ))}
  </CollectionOverview>
);

CollectionsOverview.propTypes = {
  collections: PropTypes.array.isRequired,
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps, null)(CollectionsOverview);
