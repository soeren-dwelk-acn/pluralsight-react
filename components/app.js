import React, { useCallback, useState } from "react";
import Banner from "./banner";
import ComponentPicker from "./componentPicker";
import navValues from "@/helpers/navValues";

const navigationContext = React.createContext(navValues.home);

const App = () => {
    // const [selectedHouse, setSelectedHouse] = useState();
    // const setSelectedHouseWrapper = (house) => {
    //     // checks to do before the setter is called, like it it is really a house that is set
    //     setSelectedHouse(house);
    //     // now this state setter is still in this component, and the component is in full control of its own state
    // }

    const navigate = useCallback(
        (navTo, param) => setNav({current : navTo, param, navigate}),
        []);
    const [nav, setNav] = useState({ current : navValues.home, navigate});


    return (
        <navigationContext.Provider value={nav}>
            <Banner headerText="providing houses world wide" />
            {/* {selectedHouse ? <House house={selectedHouse} /> : <HouseList selectHouse={setSelectedHouseWrapper}/>} */}
            <ComponentPicker currentNavLocation={nav.current} />
        </navigationContext.Provider>
    );
};

export { navigationContext };
export default App;