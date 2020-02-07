import mongoose from 'mongoose';

const ArticleSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
}, { timestamps: true, versionKey: false });

export default mongoose.model('Article', ArticleSchema);
