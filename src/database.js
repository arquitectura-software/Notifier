import MongoClient from "mongodb";

export async function connect() {
  try {
    const client = await MongoClient.connect("mongodb://notifications-db:27017", {
      useNewUrlParser: true
    });
    const db = client.db("notifications");
    console.log("DB is connected");
    return db;
  } catch (e) {
    console.log(e);
  }
}