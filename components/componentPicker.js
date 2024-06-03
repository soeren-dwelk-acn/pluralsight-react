import navValues from "@/helpers/navValues";

const { default: House } = require("./house");
const { default: HouseList } = require("./houseList");

const ComponentPicker = ({currentNavLocation}) => {
    switch (currentNavLocation) {
        case navValues.home:
            return <HouseList />;
        case navValues.house:
            return <House />;
        default:
            return (
                <h3>
                    No component for navigation value {currentNavLocation} found.
                </h3>
            );
    }
};

export default ComponentPicker;