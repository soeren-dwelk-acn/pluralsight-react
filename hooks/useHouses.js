import { useEffect, useState } from "react";
import useGetRequest from "./useGetRequest";

// a custom hook is a function which can accept any parameters, and return anything
// when the returned state changes, the component using the hook will rerender
// for seperation of concerns, and reusability
// keep in mind that the state is isolated, each component has it's own state of the custom hook


const useHouses = () => {

    // Array destructuring is being done here, where we give custom names to a returned array
    const [houses, setHouses] = useState([]);
    const { get, loadingState } = useGetRequest("/api/houses");

    // useEffect is a hook to call an Effect (SideEffect), so everything that is not part of a pure function
    // like API Calls, timeouts, randomness etc.
    useEffect(() => {
        const fetchHouses = async () => {
            const houses = await get();
            setHouses(houses);
        }
        fetchHouses();
    }, [get]);  // this is the dependency array of the useEffect Hook, if it's not there,
    // the hook will be called everytime the component is rendered, if it has content,
    // the hook will be called when the state of the variables has changed

    return { houses, setHouses, loadingState };
};

export default useHouses;