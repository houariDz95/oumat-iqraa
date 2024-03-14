// Book.js
import mongoose from 'mongoose';

const contributorSchema = new mongoose.Schema({
  authorId: String,
  name: String,
  img: String,
  description: String,
  books: [
    {
      id: String,
      img: String,
      title: String,
    },
  ],
});

const Contributor = mongoose.models.Contributor || mongoose.model('Contributor', contributorSchema);

export default Contributor;