import { call, put } from '@redux-saga/core/effects'
import { setInitialHero, setPublishers, setSearchListByString } from '../../states/Hero/heroActions'
import { fetchHeroById, fetchInitialHero, fetchPublishers, fetchSearchList } from '../requests/heroRequests'

export function* handleGetInitialHero() {
    const response = yield call(fetchInitialHero)

    yield put(setInitialHero(response))
}

export function* handleGetSearchListByString(action) {
    const response = yield call(() => fetchSearchList(action.payload))

    yield put(setSearchListByString(response))
}

export function* handleGetHeroById(action) {
    const response = yield call(() => fetchHeroById(action.payload))

    yield put(setInitialHero(response))
}

export function* handleGetPublisher() {
    const response = yield call(fetchPublishers)

    yield put(setPublishers(response))
}




