import currencyFormatter from "@/helpers/currencyFormatter";
import React, { useContext } from "react";
import { navigationContext } from "./app";
import navValues from "@/helpers/navValues";

const HouseRow = ({house}) => {
    const { navigate } = useContext(navigationContext);

    return (
        <tr onClick={() => navigate(navValues.house, house)}>
            <td>{house.address}</td>
            <td>{house.country}</td>
            {house.price && (
            <td className={`${house.price >= 500000 ? "text-primary":"" }`} >{currencyFormatter.format(house.price)}</td>
            )}
        </tr>
    );
};

// To Memoize (Cache) the House Rows so they don't rerender when the houselists state changes,
// Since that will trigger a rerender of all its children, but the houserows didn't change: 
const HouseRowMem = React.memo(HouseRow);

// only use React.memo() when it's a pure functional component, that rerenders often with the same prop values
// also only when the returned jsx is not trivial, like this house row component
// that's why houseList uses houseRow and not houserowmen
// also React.memo() only shallowly compares the passed props to it's already cached ones, so if they look the same
// but are different objects, it will use the cached component and not render a new one

export default HouseRow;
export { HouseRowMem };