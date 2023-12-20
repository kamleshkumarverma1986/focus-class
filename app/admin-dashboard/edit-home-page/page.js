"use client";

import Loading from "@/app/loading";
import CarouselWidget from "@/components/CarouselWidget";
import Gallery from "@/components/Gallery";
import MediaEditContainer from "@/components/MediaEditContainer";
import WidgetContainer from "@/components/WidgetContainer";
import { useFetch } from "@/hooks/useFetch";
import { useEffect, useState } from "react";
import DialogBox from "@/components/DialogBox";
import MediaUploadDialog from "@/components/MediaUploadDialog";
import { Box, Button } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import AlertBox from "@/components/AlertBox";
import { useRouter } from "next/navigation";

const initialMediaSet = {
  key: "",
  imageList: [],
};

export default function EditHomePage() {
  const router = useRouter();
  const [homePage, setHomePage] = useState({});
  const [getHomePage, isLoading, homePageData] = useFetch("/api/home-page");
  const [postHomePage, isHomePageSaving, savedHomePageData] =
    useFetch("/api/home-page");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentMediaSet, setCurrentMediaSet] = useState(initialMediaSet);

  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [alertProps, setAlertProps] = useState(null);

  const saveHomePage = async () => {
    await postHomePage({
      method: "POST",
      body: JSON.stringify(homePage),
    });
  };

  useEffect(() => {
    (async () => {
      await getHomePage({});
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (homePageData) {
      setHomePage(homePageData.homePage);
    }
  }, [homePageData]);

  useEffect(() => {
    if (savedHomePageData) {
      setHomePage(savedHomePageData.homePage);
      setAlertProps({
        ...savedHomePageData,
        isSuccess: true,
      });
      setIsAlertOpen(true);
    }
  }, [savedHomePageData]);

  if (isLoading || !homePageData) {
    return <Loading />;
  }

  const mediaEditClickHandler = (key) => {
    setCurrentMediaSet({ key, imageList: homePage[key] });
    setIsDialogOpen(true);
  };

  const updateHomePage = (currMediaSet) => {
    const tempHomePage = {
      ...homePage,
      [currMediaSet.key]: currMediaSet.imageList,
    };
    setHomePage(tempHomePage);
  };

  const onDeleteMediaHandler = (asset_id) => {
    const tempCurrentMediaSet = {
      ...currentMediaSet,
      imageList: currentMediaSet.imageList.filter((img) => {
        return img.asset_id !== asset_id;
      }),
    };
    setCurrentMediaSet(tempCurrentMediaSet);
    updateHomePage(tempCurrentMediaSet);
  };

  const onAddMediaHandler = (uploadedImages) => {
    const tempCurrentMediaSet = {
      ...currentMediaSet,
      imageList: [...currentMediaSet.imageList, ...uploadedImages],
    };
    setCurrentMediaSet(tempCurrentMediaSet);
    updateHomePage(tempCurrentMediaSet);
  };

  return (
    <main>
      <MediaEditContainer
        onUpload={() => {
          mediaEditClickHandler("carouselImageList");
        }}
      >
        <CarouselWidget
          imageList={homePage.carouselImageList}
          autoPlay={false}
        />
      </MediaEditContainer>

      <WidgetContainer>
        <MediaEditContainer
          onUpload={() => {
            mediaEditClickHandler("galleryImageList");
          }}
        >
          <Gallery title="Our Gallery" imageList={homePage.galleryImageList} />
        </MediaEditContainer>
      </WidgetContainer>
      <DialogBox
        isOpen={isDialogOpen}
        handleClose={() => {
          setIsDialogOpen(false);
          setCurrentMediaSet(initialMediaSet);
        }}
      >
        <MediaUploadDialog
          title="Upload Images"
          imageList={currentMediaSet.imageList}
          onDelete={onDeleteMediaHandler}
          onAdd={onAddMediaHandler}
        />
      </DialogBox>
      <Box
        sx={{
          textAlign: "center",
          mt: "100px",
        }}
      >
        <Button
          onClick={() => router.back()}
          loading={isHomePageSaving}
          size="large"
          variant="contained"
          sx={{ mr: "10px" }}
        >
          Cancel
        </Button>
        <LoadingButton
          onClick={saveHomePage}
          loading={isHomePageSaving}
          size="large"
          variant="contained"
          sx={{ mr: "10px" }}
        >
          Save Home Page
        </LoadingButton>
      </Box>
      <AlertBox
        isOpen={isAlertOpen}
        handleClose={() => setIsAlertOpen(false)}
        {...alertProps}
      />
    </main>
  );
}
