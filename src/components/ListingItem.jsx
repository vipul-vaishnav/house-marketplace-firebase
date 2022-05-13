import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as DeleteIcon } from '../assets/svg/deleteIcon.svg';
import BedIcon from '../assets/svg/bedIcon.svg';
import BathtubIcon from '../assets/svg/bathtubIcon.svg';

const ListingItem = ({ listing, id, onDelete }) => {
  const formatPrice = (x) => {
    return new Intl.NumberFormat('en-In', { style: 'currency', currency: 'USD' }).format(x);
  };

  return (
    <li className="categoryListing">
      <Link to={`/category/${listing.type}/${id}`} className="categoryListingLink">
        <img src={listing.imageUrls[0]} alt={listing.name} className="categoryListingImg" />
        <div className="categoryListingDetails">
          <p className="categoryListingLocation">{listing.location}</p>
          <p className="categoryListingName">{listing.name}</p>
          <p className="categoryListingPrice">
            {listing.offer
              ? formatPrice(listing.discountedPrice)
              : formatPrice(listing.regularPrice)}
            {listing.type === 'rent' && '/Month'}
          </p>
          <div className="categoryListingInfoDiv">
            <img src={BedIcon} alt="bed" />
            <p className="categoryListingInfoText">
              {listing.bedrooms > 1 ? `${listing.bedrooms} Bedrooms` : '1 Bedroom'}
            </p>
            <img src={BathtubIcon} alt="bath" />
            <p className="categoryListingInfoText">
              {listing.bathrooms > 1 ? `${listing.bathrooms} Bathrooms` : '1 Bathroom'}
            </p>
          </div>
        </div>
      </Link>

      {onDelete && (
        <DeleteIcon
          className="removeIcon"
          fill="rgb(231, 76, 60)"
          onClick={onDelete(listing.id, listing.name)}
        />
      )}
    </li>
  );
};

export default ListingItem;
