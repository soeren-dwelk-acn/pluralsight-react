import { useContext } from "react";
import { navigationContext } from "./app";
import styles from "./banner.module.css";
import navValues from "@/helpers/navValues";

// styles is a javascript object with the css classes of the css module as properties
// this way, the modules can be attached to components exclusively

// use of the style attribute is discouraged
const subtitleStyle = {
    fontStyle: "italic",
    textTransform: "uppercase",
    fontSize: "x-large",
    color: "crimson"
}

/** Component Properties (or props) are READ ONLY
 * Components should never modify their own props
 * Since many props are also passed-by-reference to other components
 * Prop Data Flow goes one way, the components receiving props are not allowed to change them
 * To simulate the other way, use state variables and their setters, so the hook useState can trigger
 * rerender to all the components that need to know about the state change
 * the props name is a property on the props object (headerText is the props name, and a property on the propertyobject)
 * { children } is another props object property (either like this(destructed) or props.children like with the headertext)
 * of a component, that contains all the text and other <jsx tags/> inside the component
 * 
 * @param {*} props 
 * @returns 
 * 
 */
const Banner = (props) => {

    const { navigate } = useContext(navigationContext);

    const imagejsx = <img onClick={() => navigate(navValues.home)} className={styles.logo} src="./next.svg" alt="logo" />;
    
    return (
        <header className="row mb-4">
            <div className="col-5">
                {imagejsx}
            </div>
            <div style={subtitleStyle} className="col-7 mt-5 ">
                {props.headerText}
            </div>
        </header>
    );
};

export default Banner;