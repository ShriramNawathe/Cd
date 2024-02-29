const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB Connection
mongoose.connect('mongodb://localhost/blog_app', {
  useNewUrlParser: true,
    useUnifiedTopology: true
    });
    const db = mongoose.connection;

    // Post Model
    const Post = mongoose.model('Post', new mongoose.Schema({
      title: { type: String, required: true },
        content: { type: String, required: true }
        }));

        // Middleware
        app.use(bodyParser.json());

        // Routes
        app.get('/api/posts', async (req, res) => {
          try {
              const posts = await Post.find();
                  res.json(posts);
                    } catch (error) {
                        res.status(500).json({ message: 'Server error' });
                          }
                          });

                          // Server
                          app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
                          
