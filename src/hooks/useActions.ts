import {bindActionCreators} from "redux";
import * as UserActionsCreators from "../store/action-creators/products";
import {useDispatch} from "react-redux";


export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(UserActionsCreators, dispatch)
}