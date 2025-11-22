import { create } from "zustand";
import { getAssetPath } from "../utils/assetPath";

const useMacbookStore = create((set) => ({
  color: "#2e2c2e",
  setColor: (color) => set({ color }),

  scale: 0.08,
  setScale: (scale) => set({ scale }),

  texture: getAssetPath("/videos/feature-1.mp4"),
  setTexture: (texture) => set({ texture }),

  reset: () =>
    set({
      color: "#2e2c2e",
      scale: 0.08,
      texture: getAssetPath("/videos/feature-1.mp4"),
    }),
}));

export default useMacbookStore;
