// server.js
const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const port = 3000;

const uri = hidden;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectDB() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error(err);
    }
}

connectDB();

app.use(express.static('public'));

// Blog API routes
app.get('/api/blogs', async (req, res) => {
    try {
        const database = client.db("sample_mflix");
        const blogs = database.collection("movies");
        const blogList = await blogs.find().toArray();
        res.json(blogList);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch blogs' });
    }
});

app.post('/api/blogs', async (req, res) => {
    try {
        const database = client.db("myDatabase");
        const blogs = database.collection("blogs");
        const newBlog = req.body;
        await blogs.insertOne(newBlog);
        res.status(201).json({ message: 'Blog added successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to add blog' });
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
