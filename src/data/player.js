class Player {
    static searchPlayer(keyword) {
        return fetch(
            `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${keyword}`
        )
            .then((response) => {
                return response.json();
            })
            .then((responseJson) => {
                return new Promise((resolve, reject) => {
                    if (responseJson.player) {
                        resolve(responseJson.player);
                    } else {
                        reject(`${keyword} is not found`);
                    }
                });
            });
    }
}

export default Player;
