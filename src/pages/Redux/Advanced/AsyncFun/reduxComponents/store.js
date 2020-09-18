import thunk from "redux-thunk";

const { createStore, applyMiddleware } = require("redux");
const { timeTool } = require("./reducer");

let store = createStore(timeTool, applyMiddleware(thunk));

export default store;