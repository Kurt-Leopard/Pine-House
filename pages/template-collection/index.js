// import { props } from "@/lib/props/_collectionTemplate";
// export const getStaticProps = props;
export default function CollectionTemplate ({page}) {
  // console.log(page, 'Collection')
  return <>{page?.name || 'Collection Title'}</>
};
