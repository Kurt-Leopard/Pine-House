import { Fragment } from "react";

import SecondaryPageHeader from "@/components/slices/SecondaryBanner";
import ArticleFilter from "@/components/partials/ArticleFilter";
import ArticlesList from "@/components/slices/StoriesList";

export default function SuccessStoriesPage({ slices }) {
  const renderSwitch = (slice) => {
    let renderComponent = <></>;
    switch (slice.sliceType) {
      case "secondary-page-header":
        renderComponent = <SecondaryPageHeader slice={slice} />;
        break;
      case "section-filter":
        renderComponent = <ArticleFilter slice={slice} />;
        break;
      case "section-events":
        renderComponent = <ArticlesList slice={slice} />;
        break;
      default:
        <></>;
        break;
    }

    return renderComponent;
  };

  return (
    <>
      {slices.map((slice, i) => (
        <Fragment key={i}>{renderSwitch(slice)}</Fragment>
      ))}
    </>
  );
}
