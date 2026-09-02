const express = require ("express");
const { MongoClient, ObjectId } = require ("mongodb");
const app = express();
app.use(express.json());
const client = new MongoClient(process.env.MONGO_URL);
async function start () {
    await client.connect();
    const db = client.db("notes-api");
    const notesCollection = db.collection("notes");
    // GET NOTES
    app.get("/notes", async (req,res) => {
        const notes = await notesCollection.find().toArray();
        res.json(notes);
    });
    // CREATE NOTES
    app.post("/notes", async (req,res) => {
        const note = {
            title: req.body.title,
            completed: req.body.completed
        };
        const result = await notesCollection.insertOne(note);
        res.status(201).json(result);
    });
    // UPDATE NOTES
    app.patch("/notes/:id", async (req,res) => {
        const id = new ObjectId(req.params.id);
        const note = await notesCollection.updateOne(
            { _id: id },
            { $set: req.body }
        );
        res.json(result);
    });
    // DELETE NOTES
    app.delete("/notes/:id", async (req,res) => {
        const id = new ObjectId(req.params.id);
        const result = await notesCollection.deleteOne({
            _id: id },
        );
        res.json(result);
    });
    // START SERVER AND CONFIGURE PORTS
    app.listen(3000, () => {
        console.log("app listening on port 3000");
    });
}   
start();

    