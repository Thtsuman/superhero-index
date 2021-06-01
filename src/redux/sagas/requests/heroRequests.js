import data from '../../../data/data.json'

export const fetchInitialHero = async () => {
    const heroPromise = new Promise(async (resolve, reject) => {
        await setTimeout(() => {
            resolve(data[0])
        }, 2000)
    })

    return await heroPromise.then(resp => {
        return resp
    })
}