// This file is used for server side data fetch

import HomePage from "@/models/homePage";
import { connectToDB } from "@/utils/database";

export const getHomePage = async () => {
  try {
    await connectToDB();
    const homePages = await HomePage.find({}).lean();
    // Remember: Only one home-page object will be saved in DB.
    return homePages.length
      ? homePages[0]
      : {
          carouselImageList: [],
          galleryImageList: [],
        };
  } catch (error) {
    console.log("Error: ", error);
  }
};
