import data from "../../../data/data.json";
import getRandomFromArr from "../../../utils/getRandomFromArr";

export const fetchInitialHero = async () => {
    const heroPromise = new Promise(async (resolve, reject) => {
        await setTimeout(() => {
            resolve(data[0]);
        }, 2000);
    });

    return await heroPromise.then((resp) => {
        return resp;
    });
};

export const fetchSearchList = async (string) => {
    const heroPromise = new Promise(async (resolve, reject) => {
        await setTimeout(() => {
            let searchList = [];

            searchList = data
                .filter(
                    (hero) =>
                        hero?.name?.toLowerCase().includes(string?.toLowerCase()) ||
                        hero?.biography?.publisher
                            ?.toLowerCase()
                            .includes(string?.toLowerCase()) ||
                        (hero?.name + hero?.biography?.publisher)
                            .toLowerCase()
                            .includes(string?.toLowerCase())
                )
                ?.map((hero) => {
                    return {
                        name: hero.name,
                        id: hero.id,
                        publisher: hero.biography?.publisher,
                        img: hero.images?.sm,
                    };
                })
                .slice(0, 10);
            resolve(searchList);
        }, 1000);
    });

    return await heroPromise.then((resp) => {
        return resp;
    });
};

export const fetchHeroById = async (id) => {
    const heroPromise = new Promise(async (resolve, reject) => {
        await setTimeout(() => {
            const currentHero = data.find((hero) => hero.id === id);
            resolve(currentHero);
        }, 2000);
    });

    return await heroPromise.then((resp) => {
        return resp;
    });
};

export const fetchChosenOne = async () => {
    const heroPromise = new Promise(async (resolve, reject) => {
        await setTimeout(() => {
            const heroId = data
                .filter(
                    (hero) =>
                        hero.biography?.publisher === "Marvel Comics" ||
                        hero.biography?.publisher === "DC Comics"
                )
                ?.map((hero) => {
                    return hero.id;
                });

            const chosenOneHeroId = getRandomFromArr(heroId);
            resolve(chosenOneHeroId);
        }, 500);
    });

    return await heroPromise.then((resp) => {
        return resp;
    });
};

export const fetchRandomOne = async () => {
    const heroPromise = new Promise(async (resolve, reject) => {
        await setTimeout(() => {
            const heroId = data?.map((hero) => {
                return hero.id;
            });

            const randomId = getRandomFromArr(heroId);
            resolve(randomId);
        }, 500);
    });

    return await heroPromise.then((resp) => {
        return resp;
    });
};

export const fetchPublishers = async () => {
    const heroPromise = new Promise(async (resolve, reject) => {
        await setTimeout(() => {
            resolve(
                [...new Set(data.map((item) => item.biography?.publisher))]?.sort()
            );
        }, 500);
    });

    return await heroPromise.then((resp) => {
        return resp;
    });
};

export const fetchHeroWithPublisher = async (string) => {
    const heroPromise = new Promise(async (resolve, reject) => {
        await setTimeout(() => {
            const heroId = data?.find((hero) => {
                return hero.biography?.publisher === string
            })?.id;
            resolve(heroId);
        }, 500);
    });

    return await heroPromise.then((resp) => {
        return resp;
    });
};
