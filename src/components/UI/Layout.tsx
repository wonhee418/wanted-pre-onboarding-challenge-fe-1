import { componentsProps } from "../../types/ComponentsType";

const Layout = (props: componentsProps) => {
  return <div className="flex justify-center">{props.children}</div>;
};

export default Layout;
