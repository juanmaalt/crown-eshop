import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectIsCollectionsLoaded } from "../../redux/shopData/shopData.selector";
import WithSpinner from "../../components/withSpinner/WithSpinner.component";
import CollectionPageComponent from "./CollectionPage.component";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state),
});

const CollectionPageContainer = connect(
  mapStateToProps,
  null
)(WithSpinner(CollectionPageComponent));

export default CollectionPageContainer;
