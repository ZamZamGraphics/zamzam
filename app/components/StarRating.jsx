import { IconStarFilled } from "@tabler/icons-react";

function StarRating({ rating }) {
  const ratingArray = new Array(rating).fill(0);

  return ratingArray.map((r, index) => (
    <IconStarFilled key={index} className="text-amber-400 size-4" />
  ));
}

export default StarRating;
