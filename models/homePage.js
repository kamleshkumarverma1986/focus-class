// Remember: Only one home-page object will be saved in DB.
import { Schema, model, models } from "mongoose";

const imageList = {
  _id: false,
  asset_id: String,
  resource_type: String,
  secure_url: String,
  url: String,
};

const HomePageSchema = new Schema(
  {
    carouselImageList: {
      type: [imageList],
      default: [],
    },
    galleryImageList: {
      type: [imageList],
      default: [],
    },
  },
  { versionKey: false }
);

const HomePage = models?.HomePage || model("HomePage", HomePageSchema);

export default HomePage;