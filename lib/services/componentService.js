import dynamic from "next/dynamic";

export const components = {
  OverViewBlock: dynamic(() =>
    import("@/components/blocks/OverViewBlock").then((module) => module.default)
  ),
  MeetingPlacesBlock: dynamic(() =>
    import("@/components/blocks/MeetingPlacesBlock").then(
      (module) => module.default
    )
  ),
  Accomodation: dynamic(() =>
    import("@/components/blocks/Accomodation").then((module) => module.default)
  ),
  OffersBlock: dynamic(() =>
    import("@/components/blocks/OffersBlock").then((module) => module.default)
  ),
  LocationBlock: dynamic(() =>
    import("@/components/blocks/LocationBlock").then((module) => module.default)
  ),
  ExperienceBlock: dynamic(() =>
    import("@/components/blocks/ExperienceBlock").then(
      (module) => module.default
    )
  ),
};
