import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-onlbvpd-shard-00-00.vrsql7w.mongodb.net:27017,ac-onlbvpd-shard-00-01.vrsql7w.mongodb.net:27017,ac-onlbvpd-shard-00-02.vrsql7w.mongodb.net:27017/?ssl=true&replicaSet=atlas-v84iww-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;