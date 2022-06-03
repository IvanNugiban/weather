import {bindActionCreators} from "@reduxjs/toolkit";
import {cityActions} from "../redux/slices/citySlice";
import {useTypedDispatch} from "../redux/typedReduxHooks";
import {weatherActions} from "../redux/slices/weatherSlice";

const allActions = {
    ...cityActions,
    ...weatherActions,
}

const UseActions = () => {
    const dispatch = useTypedDispatch();

    return bindActionCreators(allActions, dispatch)
}

export default UseActions;