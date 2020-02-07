
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

      return res.json(article).status(201);
    } catch (e) {
      return res.json(e).status(400);
    }
  }

  async update(req, res){
    try {
      const article = await Article
        .findOneAndUpdate({
          _id:req.params.id
        }, req.body, {new: true});

      return res.json(article).status(200);
    } catch (e) {
      return res.json(e).status(400);
    }
  }
}

export default new ArticleController();
