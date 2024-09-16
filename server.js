const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

app.use(cors({
  origin: 'https://kabu03.github.io',
  methods: 'GET,POST',
  credentials: true
}));

require('dotenv').config();

const app = express();
const port = 3000;
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, {
    tls: true, // Ensure TLS/SSL is enabled
    serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds if the server is not reachable
  });
  
  async function connectDB() {
    try {
      await client.connect();
      console.log("Connected to MongoDB");
    } catch (err) {
      console.error("Failed to connect to MongoDB:", err);
    }
  }

connectDB();

app.use(express.static('public'));
app.use(express.json()); // To parse incoming JSON requests

app.get('/api/blogs', async (req, res) => {
    try {
        const database = client.db("blog-db");
        const blogs = database.collection("blogs");
        const blogList = await blogs.find().sort({ createdAt: -1 }).toArray();
        res.json(blogList);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch blogs' });
    }
});


app.post('/api/blogs', async (req, res) => {
    try {
      const database = client.db("blog-db");
      const blogs = database.collection("blogs");

      const slug = req.body.title
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, ""); // Replace non-alphanumeric characters

      const newBlog = {
        title: req.body.title ? req.body.title.trim() : null,
        slug: slug,
        body: req.body.body ? req.body.body.trim() : null,
        image: req.body.image || null,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      if (!newBlog.title || !newBlog.body) {
        return res
          .status(400)
          .json({ error: "Title and body are required fields" });
      }

      await blogs.insertOne(newBlog);
      res.status(201).json({ message: "Blog added successfully", slug: slug });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to add blog' });
    }
});

app.get('/api/blogs/:slug', async (req, res) => {
    try {
        const database = client.db("blog-db");
        const blogs = database.collection("blogs");
        const blog = await blogs.findOne({ slug: req.params.slug });

        if (!blog) {
            return res.status(404).json({ error: 'Blog not found' });
        }

        res.json(blog);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch blog' });
    }
});




app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
