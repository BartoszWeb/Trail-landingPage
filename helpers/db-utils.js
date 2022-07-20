import { MongoClient } from "mongodb";

const connectionString = `mongodb+srv://${ process.env.mongodb_username }:${ process.env.mongodb_password }@${ process.env.mongodb_clusterName }.acqlq.mongodb.net/${ process.env.mongodb_dataBase }?retryWrites=true&w=majority`;

export async function connectDatabase() {
    const client = await MongoClient.connect(connectionString);
    return client;
}

export async function insertDocument(client, collection, document) {
    const db = client.db();
    const result = await db.collection(collection).insertOne(document);
    return result;
}