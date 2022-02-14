const Blog_texts = require('../models/Blog_texts');

exports.postBlogTexts = (req, res, next) => {
    (async () => {
        try {
            const texts = Blog_texts.create({
                title: req.body.title,
                desc: req.body.desc,
                author: req.body.author,
            });
            res.send(texts)
            console.log(texts)
        } catch (error) {
            console.error(error)
        }
    })()
};

exports.getAllBlogTexts = (req, res, next) => {
    (async () => {
        try {
            const texts = await Blog_texts.findAll();
            res.send(texts)
            console.log(texts.every(text => text instanceof Blog_texts)); // true
            console.log("All texts:", JSON.stringify(texts, null, 2));
            } catch (error) {
            console.error(error)
        }
    })()
};

exports.getOneBlogTexts = (req, res, next) => {
    (async () => {
        try {
            const text = await Blog_texts.findAll({
                where: {
                    id: req.params.id,
                }
            });
            res.send(text)
            console.log(text.every(text => text instanceof Blog_texts)); // true
            console.log("One text:", JSON.stringify(text, null, 2));
            } catch (error) {
            console.error(error)
        }
    })()
};

exports.updateBlogTexts = (req, res, next) => {
    (async () => {
        try {
            const texts = await Blog_texts.update(
                {
                    title: req.body.title,
                    desc: req.body.desc,
                    author: req.body.author,
                },
                {
                    where: {
                        id: req.params.id,
                    }
                }
            );
            res.send('update success')
            console.log(texts)
            } catch (error) {
            console.error(error)
        }
    })()
};

exports.deleteBlogTexts = (req, res, next) => {
    (async () => {
        try {
            const texts = await Blog_texts.destroy({
                where: {
                    id: req.params.id,
                }
            });
            res.send('delete success')
            console.log(texts)
            } catch (error) {
            console.error(error)
        }
    })()
};


