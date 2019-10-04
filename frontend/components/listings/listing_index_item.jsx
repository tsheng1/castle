import React from 'react';

const ListingIndexItem = props => {
  return(
    <li className="list-box">
      {props.listing.home_type}
      {props.listing.num_bed}
      {props.listing.title}
      {props.listing.max_guests}
      {props.listing.num_bed}
      {props.listing.num_bath}
      {props.listing.price}
    </li>
  )
}

export default ListingIndexItem;