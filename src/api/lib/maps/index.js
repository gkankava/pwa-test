import { mapsApi } from "api";

const API_KEY = "AIzaSyBRzKZl0UlHl7cA4JfxmxKwBmW-koFqKnk";

export function getRoute(origin, destination) {
  return mapsApi.get(
    `/directions/json?origin=${origin.latitude},${origin.latitude}&destination=${destination.latitude},${destination.latitude}&key=${API_KEY}`
  );
}
