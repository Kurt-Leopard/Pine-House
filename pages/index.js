// import ParentPage from "@/components/page/ParentPage";
// import { props } from "@/lib/props/page";
// export const getStaticProps = props;
import HomePage from "@/components/page/HomePage";
export default function Homepage ({page, slices}) {
  // return <>Page</>
  // return <ParentPage page={page} slices={slices} />
  return <HomePage page={page} slices={slices} />
};
