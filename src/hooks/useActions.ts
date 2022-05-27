import {bindActionCreators} from "@reduxjs/toolkit";
import {cityActions} from "../redux/slices/citySlice";
import {useTypedDispatch} from "../redux/typedReduxHooks";

const allActions = {
    ...cityActions,
}

const UseActions = () => {
    const dispatch = useTypedDispatch();

    return bindActionCreators(allActions, dispatch)
}

export default UseActions;