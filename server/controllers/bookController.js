const DB_WRAPPER = require("../_helpers/dbHelper");
const validationHelper = require('../_helpers/validationHelper')
const db = new DB_WRAPPER();
const validator = new validationHelper();

module.exports = function(app) {
    /**
     * @api {get} /api/books List all books
     * @apiGroup Books
     * @apiSuccess {Object[]} books Book's List
     * @apiSuccess {id} book.id Book id
     * @apiSuccess {String} book.book_isbn_number Book's isbnnumber
     * @apiSuccess {String} book.book_name Book's name
     * @apiSuccess {String} book.book_author book's author
     * @apiSuccess {String} book.category book's category
     * @apiSuccess {String} book.language book's language
     * @apiSuccess {number} book.quantity book's quantity
     * @apiSuccessExample
     *    HTTP/1.1 200 OK
     *    [{
     *      "id": 1,
     *      "book_isbn_number": "9783843718806",
     *      "book_name": "Muttertag",
     *      "book_author": "Nele Neuhaus",
     *      "category": "Kriminalroman",
     *      "language": "Deutsch",
     *      "quantity": 2
     *    }]
     * @apiErrorExample
     *    HTTP/1.1 500 Internal Server Error
     */
    app.get("/api/books", async(req, res) => {
        const result = await db.getAll("SELECT * FROM books");
        res.status(200).send(result);
    });

    /**
     * @api {get} /api/books/:id find a book
     * @apiGroup Books
     * @apiParam {id} id Book id
     * @apiSuccess {Number} book.id Book id
     * @apiSuccess {String} book.book_isbn_number Book's isbnnumber
     * @apiSuccess {String} book.book_name Book's name
     * @apiSuccess {String} book.book_author book's author
     * @apiSuccess {String} book.category book's category
     * @apiSuccess {String} book.language book's language
     * @apiSuccess {number} book.quantity book's quantity
     * @apiSuccessExample
     *    HTTP/1.1 200 OK
     *    {
     *      "id": 1,
     *      "book_isbn_number": "9783843718806",
     *      "book_name": "Muttertag",
     *      "book_author": "Nele Neuhaus",
     *      "category": "Kriminalroman",
     *      "language": "Deutsch",
     *      "quantity": 2
     *    }
     * @apiErrorExample {json} Find error
     *    HTTP/1.1 500 Internal Server Error
     */
    app.get("/api/books/:id", validator.validateId, async(req, res) => {
        const id = req.params.id;
        const result = await db.getOne(`SELECT * FROM books WHERE id = "${id}"`);
        res.status(200).send(result);
    });

    /**
     * @api {post} /api/books Register a new book
     * @apiGroup Books
     * @apiParam {String} book.book_isbn_number Book's isbnnumber
     * @apiParam {String} book.book_name Book's name
     * @apiParam {String} book.book_author book's author
     * @apiParam {String} book.category book's category
     * @apiParam {String} book.language book's language
     * @apiParam {number} book.quantity book's quantity
     * @apiParamExample {json} Input
     *    {
     *      "id": 1,
     *      "book_isbn_number": "9783843718806",
     *      "book_name": "Muttertag",
     *      "book_author": "Nele Neuhaus",
     *      "category": "Kriminalroman",
     *      "language": "Deutsch",
     *      "quantity": 2
     *    }
     * @apiSuccess {id} book.id Book id
     * @apiSuccess {String} book.book_isbn_number Book's isbnnumber
     * @apiSuccess {String} book.book_name Book's name
     * @apiSuccess {String} book.book_author book's author
     * @apiSuccess {String} book.category book's category
     * @apiSuccess {String} book.language book's language
     * @apiSuccess {number} book.quantity book's quantity
     * @apiSuccessExample {json} Book succesfully added
     *    HTTP/1.1 200 OK No Content
     * @apiErrorExample {json} Book error
     *    HTTP/1.1 500 Internal Server Error
     */
    app.post("/api/books", validator.validateBook, async(req, res) => {
        const body = req.body;

        try {
            await db.cmd(`INSERT INTO books
        (book_isbn_number,book_name, book_author, category, language, quantity)
        VALUES ('${body.book_isbn_number}','${body.book_name}','${
        body.book_author
      }',
        '${body.category}','${body.language}','${body.quantity}')`);
        } catch (e) {
            res.status(500).json({
                error: e.toString()
            });
        }
        res.status(200).send({
            message: "Book succesfully added"
        });
    });

    /**
     * @api {delete} /api/books/:id Remove a book
     * @apiGroup Books
     * @apiParam {id} id Book id
     * @apiSuccessExample {json} Book Successfully deleted
     *    HTTP/1.1 200 OK No Content
     * @apiErrorExample {json} Book doesnt exist
     *    HTTP/1.1 500 Internal Server Error
     */
    app.delete("/api/books/:id", validator.validateId, async(req, res) => {
        const id = req.params.id;
        try {
            await db.cmd(`DELETE FROM books WHERE id = "${id}"`);
        } catch (error) {
            res.status(500).json({
                message: "Book doesnt exist"
            });
        }
        res.status(200).send({
            message: "Book Successfully deleted"
        });
    });

    /**
     * @api {put} /api/books/:id Update a book
     * @apiGroup Books
     * @apiParam {id} book.book_isbn_number Book's isbnnumber
     * @apiParam {String} book.book_isbn_number Book's isbnnumber
     * @apiParam {String} book.book_name Book's name
     * @apiParam {String} book.book_author book's author
     * @apiParam {String} book.category book's category
     * @apiParam {String} book.language book's language
     * @apiParam {number} book.quantity book's quantity
     * @apiParamExample {json} Input
     *    HTTP/1.1 200 OK
     *    {
     *      "id": 1,
     *      "book_isbn_number": "9783843718806",
     *      "book_name": "Muttertag",
     *      "book_author": "Nele Neuhaus",
     *      "category": "Kriminalroman",
     *      "language": "Deutsch",
     *      "quantity": 2
     *    }
     * @apiSuccessExample {json} Book Successfully updated
     *    HTTP/1.1 200 No Content
     * @apiErrorExample {json} Book doesnt exist
     *    HTTP/1.1 500 Internal Server Error
     */
    app.put("/api/books/:id", validator.validateId, validator.validateBook, async(req, res) => {
        const id = req.params.id;
        const body = req.body;

        try {
        await db.cmd(`UPDATE books SET
        book_isbn_number = "${body.book_isbn_number}",
        book_name = "${body.book_name}",book_author = "${body.book_author}",
        category = "${body.category}",language = "${body.language}",quantity = "${
        body.quantity
      }" WHERE id = "${id}"`);
        } catch (e) {
            res.status(500).json({
                message: "Book doesnt exist"
            });
        }
        res.status(200).send({
            message: "Book Successfully updated"
        });
    });
}
