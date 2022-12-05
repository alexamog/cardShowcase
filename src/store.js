import create from "zustand";
import produce from "immer";

export const useStore = create((set) => ({
  profileInformation: {},
  setProfile: (profileInfo) =>
    set(
      produce((state) => {
        state.profileInformation = profileInfo;
        //parse github url
        profileInfo.githubURL.slice(-1) == "/"
          ? (state.profileInformation.pfp = `${profileInfo.githubURL.slice(
              0,
              profileInfo.githubURL.length - 1
            )}.png`)
          : (state.profileInformation.pfp = `${profileInfo.githubURL}.png`);

        //books into an Array
        state.profileInformation.favouriteBooks =
          profileInfo.favouriteBooks.split(",");
      })
    ),
}));
