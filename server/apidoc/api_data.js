define({ "api": [
  {
    "type": "delete",
    "url": "/api/books/:id",
    "title": "Remove a book",
    "group": "Books",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>Book id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Book Successfully deleted",
          "content": "HTTP/1.1 200 OK No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Book doesnt exist",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/bookController.js",
    "groupTitle": "Books",
    "name": "DeleteApiBooksId"
  },
  {
    "type": "get",
    "url": "/api/books",
    "title": "List all books",
    "group": "Books",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "books",
            "description": "<p>Book's List</p>"
          },
          {
            "group": "Success 200",
            "type": "id",
            "optional": false,
            "field": "book.id",
            "description": "<p>Book id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "book.book_isbn_number",
            "description": "<p>Book's isbnnumber</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "book.book_name",
            "description": "<p>Book's name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "book.book_author",
            "description": "<p>book's author</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "book.category",
            "description": "<p>book's category</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "book.language",
            "description": "<p>book's language</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "book.quantity",
            "description": "<p>book's quantity</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "HTTP/1.1 200 OK\n[{\n  \"id\": 1,\n  \"book_isbn_number\": \"9783843718806\",\n  \"book_name\": \"Muttertag\",\n  \"book_author\": \"Nele Neuhaus\",\n  \"category\": \"Kriminalroman\",\n  \"language\": \"Deutsch\",\n  \"quantity\": 2\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/bookController.js",
    "groupTitle": "Books",
    "name": "GetApiBooks"
  },
  {
    "type": "get",
    "url": "/api/books/:id",
    "title": "find a book",
    "group": "Books",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>Book id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "book.id",
            "description": "<p>Book id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "book.book_isbn_number",
            "description": "<p>Book's isbnnumber</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "book.book_name",
            "description": "<p>Book's name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "book.book_author",
            "description": "<p>book's author</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "book.category",
            "description": "<p>book's category</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "book.language",
            "description": "<p>book's language</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "book.quantity",
            "description": "<p>book's quantity</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": 1,\n  \"book_isbn_number\": \"9783843718806\",\n  \"book_name\": \"Muttertag\",\n  \"book_author\": \"Nele Neuhaus\",\n  \"category\": \"Kriminalroman\",\n  \"language\": \"Deutsch\",\n  \"quantity\": 2\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Find error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/bookController.js",
    "groupTitle": "Books",
    "name": "GetApiBooksId"
  },
  {
    "type": "post",
    "url": "/api/books",
    "title": "Register a new book",
    "group": "Books",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "book.book_isbn_number",
            "description": "<p>Book's isbnnumber</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "book.book_name",
            "description": "<p>Book's name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "book.book_author",
            "description": "<p>book's author</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "book.category",
            "description": "<p>book's category</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "book.language",
            "description": "<p>book's language</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "book.quantity",
            "description": "<p>book's quantity</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"id\": 1,\n  \"book_isbn_number\": \"9783843718806\",\n  \"book_name\": \"Muttertag\",\n  \"book_author\": \"Nele Neuhaus\",\n  \"category\": \"Kriminalroman\",\n  \"language\": \"Deutsch\",\n  \"quantity\": 2\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "id",
            "optional": false,
            "field": "book.id",
            "description": "<p>Book id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "book.book_isbn_number",
            "description": "<p>Book's isbnnumber</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "book.book_name",
            "description": "<p>Book's name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "book.book_author",
            "description": "<p>book's author</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "book.category",
            "description": "<p>book's category</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "book.language",
            "description": "<p>book's language</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "book.quantity",
            "description": "<p>book's quantity</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Book succesfully added",
          "content": "HTTP/1.1 200 OK No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Book error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/bookController.js",
    "groupTitle": "Books",
    "name": "PostApiBooks"
  },
  {
    "type": "post",
    "url": "/api/lendings/",
    "title": "create a lend",
    "group": "Books",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lendings.book_name",
            "description": "<p>Book's name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lendings.firstname",
            "description": "<p>lender's firstname</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lendings.lastname.lender",
            "description": "<p>'s lastname</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lendings.email",
            "description": "<p>lender's email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lendings.returnDate",
            "description": "<p>lendings's return date</p>"
          },
          {
            "group": "Parameter",
            "type": "quantity",
            "optional": false,
            "field": "book.quantity",
            "description": "<p>book's quantity</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n   \"id\": 1,\n   \"book_name\": \"Muttertag\",\n   \"firstname\": \"Emmanuel\",\n   \"lastname\": \"Kontcheu\",\n   \"email\": \"inf2963@gmail.com\",\n   \"returnDate\": \"2019-03-22\"\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "lendings.id",
            "description": "<p>Lending id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lendings.book_name",
            "description": "<p>book book's name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lendings.firstname",
            "description": "<p>lender's firstname</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lendings.lastname.lender",
            "description": "<p>'s lastname</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lendings.email",
            "description": "<p>lender's email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lendings.returnDate",
            "description": "<p>lendings's return date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Lend succesfully added",
          "content": "HTTP/1.1 200 OK No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Lendings error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/LendingController.js",
    "groupTitle": "Books",
    "name": "PostApiLendings"
  },
  {
    "type": "put",
    "url": "/api/books/:id",
    "title": "Update a book",
    "group": "Books",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "book.book_isbn_number",
            "description": "<p>Book's isbnnumber</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "book.book_name",
            "description": "<p>Book's name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "book.book_author",
            "description": "<p>book's author</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "book.category",
            "description": "<p>book's category</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "book.language",
            "description": "<p>book's language</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "book.quantity",
            "description": "<p>book's quantity</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": 1,\n  \"book_isbn_number\": \"9783843718806\",\n  \"book_name\": \"Muttertag\",\n  \"book_author\": \"Nele Neuhaus\",\n  \"category\": \"Kriminalroman\",\n  \"language\": \"Deutsch\",\n  \"quantity\": 2\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Book Successfully updated",
          "content": "HTTP/1.1 200 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Book doesnt exist",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/bookController.js",
    "groupTitle": "Books",
    "name": "PutApiBooksId"
  },
  {
    "type": "delete",
    "url": "/api/lendings/:id",
    "title": "remove a lend",
    "group": "Lendings",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": ".id",
            "description": "<p>Lending id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "HTTP/1.1 200 OK No Content {json} Lend Successfully deleted",
          "content": "HTTP/1.1 200 OK No Content {json} Lend Successfully deleted",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Lendings error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/LendingController.js",
    "groupTitle": "Lendings",
    "name": "DeleteApiLendingsId"
  },
  {
    "type": "get",
    "url": "/api/lendings",
    "title": "List all lendings",
    "group": "Lendings",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "lendings",
            "description": "<p>Book's List</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "lendings.id",
            "description": "<p>Lending id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lendings.book_name",
            "description": "<p>book book's name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lendings.firstname",
            "description": "<p>lender's firstname</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lendings.lastname.lender",
            "description": "<p>'s lastname</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lendings.email",
            "description": "<p>lender's email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lendings.returnDate",
            "description": "<p>lendings's return date</p>"
          },
          {
            "group": "Success 200",
            "type": "quantity",
            "optional": false,
            "field": "book.quantity",
            "description": "<p>book's quantity</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "HTTP/1.1 200 OK\n[{\n  \"id\": 1,\n  \"book_name\": \"Muttertag\",\n  \"firstname\": \"Emmanuel\",\n  \"lastname\": \"Kontcheu\",\n  \"email\": \"inf2963@gmail.com\",\n  \"returnDate\": \"2019-03-22\"\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Lendings error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/LendingController.js",
    "groupTitle": "Lendings",
    "name": "GetApiLendings"
  },
  {
    "type": "get",
    "url": "/api/lendings/:id",
    "title": "find a lend",
    "group": "Lendings",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "lendings.id",
            "description": "<p>Lending id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lendings.book_name",
            "description": "<p>book book's name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lendings.firstname",
            "description": "<p>lender's firstname</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lendings.lastname.lender",
            "description": "<p>'s lastname</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lendings.email",
            "description": "<p>lender's email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lendings.returnDate",
            "description": "<p>lendings's return date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": 1,\n  \"book_name\": \"Muttertag\",\n  \"firstname\": \"Emmanuel\",\n  \"lastname\": \"Kontcheu\",\n  \"email\": \"inf2963@gmail.com\",\n  \"returnDate\": \"2019-03-22\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Lendings error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/LendingController.js",
    "groupTitle": "Lendings",
    "name": "GetApiLendingsId"
  },
  {
    "type": "put",
    "url": "/api/lendings/:id",
    "title": "update a lend",
    "group": "Lendings",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lendings.book_name",
            "description": "<p>Book's name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lendings.firstname",
            "description": "<p>lender's firstname</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lendings.lastname.lender",
            "description": "<p>'s lastname</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lendings.email",
            "description": "<p>lender's email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lendings.returnDate",
            "description": "<p>lendings's return date</p>"
          },
          {
            "group": "Parameter",
            "type": "quantity",
            "optional": false,
            "field": "book.quantity",
            "description": "<p>book's quantity</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n   \"id\": 1,\n   \"book_name\": \"Muttertag\",\n   \"firstname\": \"Emmanuel\",\n   \"lastname\": \"Kontcheu\",\n   \"email\": \"inf2963@gmail.com\",\n   \"returnDate\": \"2019-03-22\"\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Lend succesfully updated",
          "content": "HTTP/1.1 200 OK No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Lend doesnt exist",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/LendingController.js",
    "groupTitle": "Lendings",
    "name": "PutApiLendingsId"
  }
] });
