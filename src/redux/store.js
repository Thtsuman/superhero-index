import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import createSagaMiddleware  from 'redux-saga'
import watcherSaga from "./sagas/watcherSaga";

const sagaMiddleWare = createSagaMiddleware()

const initMiddleWare = [sagaMiddleWare]

const composeEnhancer = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose


const middleWare = composeEnhancer(applyMiddleware(...initMiddleWare))

const Store = createStore(rootReducer, middleWare)

sagaMiddleWare.run(watcherSaga)

export default Store