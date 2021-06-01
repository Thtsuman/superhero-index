import { call, put } from '@redux-saga/core/effects'
import { setInitialHero } from '../../states/Hero/heroActions'
import { fetchInitialHero } from '../requests/heroRequests'

export function* handleGetInitialHero() {
    const response = yield call(fetchInitialHero)

    yield put(setInitialHero(response))
}