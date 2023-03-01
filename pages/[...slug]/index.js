import ParentPage from "@/components/page/ParentPage";
import { paths, props } from "@/lib/props/page";
export const getStaticPaths = paths;
export const getStaticProps = props;
export default function DynamicPage ({ page, slices }) {
  return <ParentPage page={page} slices={slices} bottomComponent="BottomComponent" />
};

