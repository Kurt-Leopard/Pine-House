import dynamic from "next/dynamic";

export const components = {
  TestComponent1: dynamic(() =>
    import("@/components/blocks/TestComponent1").then(
      (module) => module.default
    )
  ),
  TestComponent2: dynamic(() =>
    import("@/components/blocks/TestComponent2").then(
      (module) => module.default
    )
  ),
  Contact: dynamic(() =>
    import("@/components/blocks/Contact").then((module) => module.default)
  ),
  TaxonomyCollection: dynamic(() =>
    import("@/components/blocks/TaxonomyCollection").then(
      (module) => module.default
    )
  ),
  Slider: dynamic(() =>
    import("@/components/blocks/Slider").then((module) => module.default)
  ),
  Gallery: dynamic(() =>
    import("@/components/blocks/Gallery").then((module) => module.default)
  ),
  Accomodation: dynamic(() =>
    import("@/components/blocks/Accomodation").then((module) => module.default)
  ),
  OverViewBlock: dynamic(() =>
    import("@/components/blocks/OverViewBlock").then((module) => module.default)
  ),
  MeetingPlacesBlock: dynamic(() =>
    import("@/components/blocks/MeetingPlacesBlock").then(
      (module) => module.default
    )
  ),
  OffersBlock: dynamic(() =>
    import("@/components/blocks/OffersBlock").then((module) => module.default)
  ),
  LocationBlock: dynamic(() =>
    import("@/components/blocks/LocationBlock").then((module) => module.default)
  ),
};
