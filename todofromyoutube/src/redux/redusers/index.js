import { combineReducers } from "redux";
import tasks from "./tasks";



const rootReduser = () => combineReducers({
  tasks
});



export default rootReduser
