
const nodemailer = require("nodemailer");
const DB_WRAPPER = require("../_helpers/dbHelper");
const validationHelper = require('../_helpers/validationHelper');
const db = new DB_WRAPPER();

const MailService = require("../_helpers/mailService");

const mailService = new MailService();
const validator = new validationHelper();

module.exports = function(app){

  /**
   * @api {get} /api/lendings List all lendings
   * @apiGroup Lendings
   * @apiSuccess {Object[]} lendings Book's List
   * @apiSuccess {Number} lendings.id Lending id
   * @apiSuccess {String} lendings.book_name book book's name
   * @apiSuccess {String} lendings.firstname lender's firstname
   * @apiSuccess {String} lendings.lastname.lender's lastname
   * @apiSuccess {String} lendings.email lender's email
   * @apiSuccess {String} lendings.returnDate lendings's return date
   * @apiSuccess {quantity} book.quantity book's quantity
   * @apiSuccessExample
   *    HTTP/1.1 200 OK
   *    [{
   *      "id": 1,
   *      "book_name": "Muttertag",
   *      "firstname": "Emmanuel",
   *      "lastname": "Kontcheu",
   *      "email": "inf2963@gmail.com",
   *      "returnDate": "2019-03-22"
   *    }]
   * @apiErrorExample {json} Lendings error
   *    HTTP/1.1 500 Internal Server Error
   */
  app.get("/api/lendings", async(req, res) => {
      const result = await db.getAll("SELECT * FROM lendings");
      res.status(200).send(result);
  });

  /**
   * @api {get} /api/lendings/:id find a lend
   * @apiGroup Lendings
   * @apiSuccess {Number} lendings.id Lending id
   * @apiSuccess {String} lendings.book_name book book's name
   * @apiSuccess {String} lendings.firstname lender's firstname
   * @apiSuccess {String} lendings.lastname.lender's lastname
   * @apiSuccess {String} lendings.email lender's email
   * @apiSuccess {String} lendings.returnDate lendings's return date
   * @apiSuccessExample
   *    HTTP/1.1 200 OK
   *    {
   *      "id": 1,
   *      "book_name": "Muttertag",
   *      "firstname": "Emmanuel",
   *      "lastname": "Kontcheu",
   *      "email": "inf2963@gmail.com",
   *      "returnDate": "2019-03-22"
   *    }
   * @apiErrorExample {json} Lendings error
   *    HTTP/1.1 500 Internal Server Error
   */
  app.get("/api/lendings/:id", validator.validateId, async(req, res) => {
      const id = req.params.id;
      const result = await db.getOne(`SELECT * FROM lendings WHERE id = "${id}"`);
      res.status(200).send(result); //TODO
  });

  /**
   * @api {post} /api/lendings/ create a lend
   * @apiGroup Books
   * @apiParam {String} lendings.book_name Book's name
   * @apiParam {String} lendings.firstname lender's firstname
   * @apiParam {String} lendings.lastname.lender's lastname
   * @apiParam {String} lendings.email lender's email
   * @apiParam {String} lendings.returnDate lendings's return date
   * @apiParam {quantity} book.quantity book's quantity
   * @apiParamExample {json} Input
   *   {
   *      "id": 1,
   *      "book_name": "Muttertag",
   *      "firstname": "Emmanuel",
   *      "lastname": "Kontcheu",
   *      "email": "inf2963@gmail.com",
   *      "returnDate": "2019-03-22"
   *    }
   * @apiSuccess {Number} lendings.id Lending id
   * @apiSuccess {String} lendings.book_name book book's name
   * @apiSuccess {String} lendings.firstname lender's firstname
   * @apiSuccess {String} lendings.lastname.lender's lastname
   * @apiSuccess {String} lendings.email lender's email
   * @apiSuccess {String} lendings.returnDate lendings's return date
   * @apiSuccessExample {json} Lend succesfully added
   *    HTTP/1.1 200 OK No Content
   * @apiErrorExample {json} Lendings error
   *    HTTP/1.1 500 Internal Server Error
   */
  app.post("/api/lendings", validator.validateLend, async(req, res) => {
      const body = req.body;
      try {
          await db.cmd(`INSERT INTO lendings (book_name, firstname, lastname, email, returnDate)
       VALUES ('${body.book_name}','${body.firstname}','${body.lastname}','${
        body.email
      }','${body.returnDate}')`);
      } catch (e) {
          res.status(500).json({
              error: e.toString()
          });
      }
      res.status(200).send({
          message: "Lend succesfully added"
      });
      mailService.sendMailToLender(body.book_name, body.email, body.returnDate);
      await db.cmd(
          `UPDATE books SET quantity = quantity-1 WHERE book_name = "${
        body.book_name
      }"`
      );
  });

  /**
   * @api {delete} /api/lendings/:id remove a lend
   * @apiGroup Lendings
   * @apiParam {id} .id Lending id
   * @apiSuccessExample
   *    HTTP/1.1 200 OK No Content {json} Lend Successfully deleted
   * @apiErrorExample {json} Lendings error
   *    HTTP/1.1 500 Internal Server Error
   */
  app.delete("/api/lendings/:id", validator.validateId, async(req, res) => {
      const id = req.params.id;
      try {
          db.cmd(`DELETE FROM lendings WHERE id = "${id}"`);
      } catch (e) {
          res.status(500).json({
              error: e.toString()
          });
      }
      res.status(200).send({
          message: "Lend Successfully deleted"
      });
  });

  /**
   * @api {put} /api/lendings/:id update a lend
   * @apiGroup Lendings
   * @apiParam {String} lendings.book_name Book's name
   * @apiParam {String} lendings.firstname lender's firstname
   * @apiParam {String} lendings.lastname.lender's lastname
   * @apiParam {String} lendings.email lender's email
   * @apiParam {String} lendings.returnDate lendings's return date
   * @apiParam {quantity} book.quantity book's quantity
   * @apiParamExample {json} Input
   *   {
   *      "id": 1,
   *      "book_name": "Muttertag",
   *      "firstname": "Emmanuel",
   *      "lastname": "Kontcheu",
   *      "email": "inf2963@gmail.com",
   *      "returnDate": "2019-03-22"
   *    }
   * @apiSuccessExample {json} Lend succesfully updated
   *    HTTP/1.1 200 OK No Content
   * @apiErrorExample {json} Lend doesnt exist
   *    HTTP/1.1 500 Internal Server Error
   */
  app.put("/api/lendings/:id", validator.validateId, validator.validateLend, async(req, res) => {
      const id = req.params.id;
      const body = req.body;

      try {
      await db.cmd(`UPDATE lendings SET book_name =
      "${body.book_name}", firstname = "${body.firstname}",
      lastname = "${body.lastname}", email = "${body.email}",
      returnDate = "${body.returnDate}" WHERE id = "${id}"`);
      } catch (e) {
          res.status(500).json({
              message: "Lend doesnt exist"
          });
      }
      res.status(200).send({
          message: "Lend Successfully updated"
      });
      mailService.sendMailToLender(body.book_name, body.email, body.returnDate);
  });

}
