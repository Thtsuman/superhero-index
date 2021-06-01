import { takeLatest } from 'redux-saga/effects'
import types from '../types'
import { handleGetInitialHero } from './handlers/heroHandlers'

export function* watcherSaga() {
    yield takeLatest(types.hero.GET_INITIAL_HERO, handleGetInitialHero)
}

export default watcherSaga