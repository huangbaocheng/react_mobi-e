


//1新建管理员 在src/store仓库/reducer 管理员/index.js

//引入要合并的管理员
import cartReducer from "./cartReducer.js";
//负责合并管理员的
import {combineReducers} from 'redux';


export default combineReducers({ cartReducer });