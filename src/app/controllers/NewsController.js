const connection = require('../dbConfig/db')
class NewsController {
    //GET new
    index(req, res) {
        res.render("news");
        connection.query('SELECT * FROM news',(err, result, fields)=>{
            if(err) throw err;
            res.json(result)
        })
    }
    detail(req, res) {
        res.render("detail");
    }
}

module.exports = new NewsController();
