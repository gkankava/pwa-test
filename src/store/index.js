import create from "zustand";

import { languageSlice, appLoadingSlice, triggerProfileSlice } from "./app";
import { filterModalSlice, privateModalSlice } from "./modal";
import { userLocationSlice } from "./userLocation";
import { currentUserSlice } from "./user";
import { currentTabScene } from "./scene";
import { viewModeSlice } from "./settings";
import { filtersSlice } from "./filters";

import {
  locationsSlice,
  eventsSlice,
  newsSlice,
  locationItemsSlice,
  eventItemsSlice,
  newsItemsSlice,
  offersSlice,
  subscribeSlice,
  likeEventSlice,
  likeNewsSlice,
  couponsSlice,
  categoriesSlice,
  byKewordsSlise,
  favouriteEventsSlice,
  favouriteLocationsSlice,
  favouriteNewsSlice,
  gallerySlice,
} from "./api";
import { devtools } from "zustand/middleware";

export const useStore = create(
  devtools((set, get) => ({
    ...languageSlice(set, get),
    ...appLoadingSlice(set, get),
    ...triggerProfileSlice(set, get),
    ...userLocationSlice(set, get),
    ...currentUserSlice(set, get),
    ...currentTabScene(set, get),
    ...filterModalSlice(set, get),
    ...privateModalSlice(set, get),
    ...filtersSlice(set, get),
    ...viewModeSlice(set, get),
    //api lvl
    //  lists
    ...locationsSlice(set, get),
    ...eventsSlice(set, get),
    ...newsSlice(set, get),
    // byId
    ...locationItemsSlice(set, get),
    ...eventItemsSlice(set, get),
    ...newsItemsSlice(set, get),
    //offers
    ...offersSlice(set, get),
    //subscribe/like
    ...subscribeSlice(set, get),
    ...likeEventSlice(set, get),
    ...likeNewsSlice(set, get),
    //coupons
    ...couponsSlice(set, get),
    //categories
    ...categoriesSlice(set, get),
    //dataByKewords
    ...byKewordsSlise(set, get),
    //favourites
    ...favouriteLocationsSlice(set, get),
    ...favouriteEventsSlice(set, get),
    ...favouriteNewsSlice(set, get),
    //pinnedGallery
    ...gallerySlice(set, get),
  }))
);
