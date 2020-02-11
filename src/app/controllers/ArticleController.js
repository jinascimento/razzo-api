
import Article from '../schemas/Article';


class ArticleController {
  async index(req, res) {
    const articles = await Article.find({});
    return res.json(articles);
  }

  async store(req, res) {
    try {
      const { author, title, description, category } = req.body;
      const article = await Article.create({author, title, description, category});
      return res.status(201).json(article);

    } catch (e) {
      return res.status(400).json(e)
    }
  }

  async update(req, res){
    try {
      const article = await Article
        .findOneAndUpdate({
          _id:req.params.id
        }, req.body, {new: true});

      return res.status(200).json(article);
    } catch (e) {
      return res.status(400).json(e);
    }
  }
}

export default new ArticleController();
