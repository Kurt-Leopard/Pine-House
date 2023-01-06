import Menu from "@/components/partials/Menu";
import Footer from "@/components/partials/Footer";

const DefaultLayout = (props) => {
  return (
    <>
      <div>
        <Menu />
      </div>
      <div className="h-screen">
        {props.children}
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default DefaultLayout;
