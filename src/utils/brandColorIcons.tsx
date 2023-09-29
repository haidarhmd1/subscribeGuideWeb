import {
  TbBrandNetflix,
  TbBrandSpotify,
  TbBus,
  TbOctagon,
} from "react-icons/tb";
import { BRAND_TYPE } from "./constants";

export const brandColor = (type: string) => {
  switch (type) {
    case BRAND_TYPE.spotify:
      return "bg-green-400";
    case BRAND_TYPE.netflix:
      return "bg-red-400";
    case BRAND_TYPE.commune:
      return "bg-yellow-400";
    default:
      return "bg-gray-400";
  }
};

export const BrandIcon = (type: string) => {
  switch (type) {
    case BRAND_TYPE.spotify:
      return <TbBrandSpotify size={21} />;
    case BRAND_TYPE.netflix:
      return <TbBrandNetflix size={21} />;
    case BRAND_TYPE.commune:
      return <TbBus size={21} />;
    default:
      return <TbOctagon size={21} />;
  }
};
