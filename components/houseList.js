import loadingStatus from "@/helpers/loadingStatus";
import HouseRow, { HouseRowMem } from "./houseRow";
import LoadingIndicator from "./loadingIndicator";
import useHouses from "@/hooks/useHouses";

/**
 * REACT HOOKS
 * 
 * 1. Rule of Hooks:
 * Hooks should always be called at the top level
 *  leading to -> if you declare a hook, it will always be called,
 *  since it's forbidden to wrap it inside an if statement
 *  leading to -> multiple hooks will always be called in the same order
 * 
 * 2. Rule of Hooks:
 * Hooks should only be called in a function component
 *  with the only exception being custom hooks
 * 
 * Most Important Hook:
 * const [value, setValue] = useState('optionalInitializationValue');
 * used to trigger a rerender or update of the UI when the state of
 * a value changes
 * 
 * Other Hooks include the useEffect Hook for SideEffects (see below)
 * 
 * Also there is a useMemo() Hook that looks similar to useEffect and is used
 * to Memoize the result of a timeConsuming Operation (only running this operation
 * when the state of the variables in the dependency array has changed, otherwise
 * returning the old result) 
 * 
 * Then theres the Ref Hook, that persists values to survive re-renders,
 * just like useState() but Ref doesn't cause a rerender itself
 * useRef() returns an Object, that has a 'current' property,
 * which holds the current value, this value can be modified directly
 * without causing rerender
 * 
 */


const HouseList = () => {

    const { houses, setHouses, loadingState } = useHouses();

    if(loadingState !== loadingStatus.loaded) return (<LoadingIndicator loadingState={loadingState}/>);
    // this conditional return must always be under any hook calls! (first rule of hooks)

    const addHouse = () => {
        setHouses([
            ...houses,
            {
                id: 3,
                address: "32 Valley Way, New York",
                country: "USA",
                price: 1000000
            },
        ]);
    };

    return (
        <> {/* Shorthand Syntax for <React.Fragment><React.Fragment/> */}
            <div className="row mb-2">
                <h5 className="themeFontColor text-center">
                    Houses currently on the market
                </h5>
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Address</th>
                        <th>Country</th>
                        <th>Asking Price</th>
                    </tr>
                </thead>
                <tbody>
                    {houses.map(h => <HouseRow key={h.id} house={h} />)}
                </tbody>
            </table>
            <button onClick={addHouse} className="btn btn-primary">
                Add
            </button>
        </>
    );
};

export default HouseList;