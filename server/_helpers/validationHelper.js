const BaseJoi = require("joi");
const Extension = require("joi-date-extensions");
const Joi = BaseJoi.extend(Extension);

// Joi Schema to Validate the Id's
const schema_id = Joi.object().keys({
    id: Joi.number().required()
});

// Joi Schema to validate Bokks
const schema_book = Joi.object().keys({
    book_isbn_number: Joi.string().required(),
    book_name: Joi.string().required(),
    book_author: Joi.string().required(),
    category: Joi.string().required(),
    language: Joi.string().required().valid(['Deutsch', 'English', 'Französich']),
    quantity: Joi.number().integer().required()
});

// Joi Schema to validate Lendings
const schema_lend = Joi.object().keys({
    book_name: Joi.string().required(),
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    email: Joi.string().email().required(),
    returnDate: Joi.date().format("YYYY-MM-DD")
});

class validationHelper {

    //Middleware functions for the Validations
    validateBook(req, res, next) {
        schema_book.validate(req.body, (err, value) => {
            if (err) {
                console.log(err);
                return res.status(400).send("Bad Request");
            }
            return next();
        });
    };

    validateLend(req, res, next) {
        schema_lend.validate(req.body, (err, value) => {
            if (err) {
                console.log(err);
                return res.status(400).send("Bad Request");
            }
            return next();
        });
    };

    validateId(req, res, next) {
        console.log(req.params.id);
        let data = {
            id: req.params.id
        };
        schema_id.validate(data, (err, value) => {
            if (err) {
                console.log(err);
                return res.status(400).send("Bad Request");
            }
            return next();
        });
    };
}
module.exports = validationHelper;
