const DataLoader = require('dataloader');

const fetchFromDb = async (keys) => {
    console.log('Fetching user:', keys);
    return keys.map(key => ({
        id: key,
        name: `User ${key}`,
        value: Math.random()    
    }));
}

const myBatchGetUsers = async (keys) => {
    console.log('Batching users:', keys);
    const data = await fetchFromDb(keys);


    console.log(data);

    return keys.map(key => data.find(user => user.id === key));
}

const workplaceLoader = new DataLoader(keys => myBatchGetUsers(keys));

module.exports = { workplaceLoader }