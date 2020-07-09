import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import CollectionItem from "../../components/collectionItem/CollectionItem.component";
import { selectCollection } from "../../redux/shopData/shopData.selector";

import "./CollectionPage.styles.scss";

const CollectionPage = ({ collection }) => {
  const { items, title } = collection;

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

CollectionPage.propTypes = {
  collection: PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps, null)(CollectionPage);
