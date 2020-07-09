import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsCollectionFetching } from "../../redux/shopData/shopData.selector";
import WithSpinner from "../withSpinner/WithSpinner.component";
import CollectionsOverviewComponent from "./CollectionsOverview.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps, null),
  WithSpinner
)(CollectionsOverviewComponent);

export default CollectionsOverviewContainer;
