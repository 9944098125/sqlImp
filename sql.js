const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const sql_qa = [
  {
    id: 1,
    question: "What is database ?",
    answer:
      "Database is an organized collection of data, stored, retrieved from remote or local computer. Databases can be vast and complex. Those type of databases are created using fixed design and modeling approaches.",
  },
  {
    id: 2,
    question: "What is DBMS ?",
    answer:
      "DBMS stands for Database Management System. DBMS is a system software responsible for the creation, retrieval, updation, and management of the database. It ensures that our data is consistent, organized, and is easily accessible by serving as an interface between the database and its end-users or application software.",
  },
  {
    id: 3,
    question: "What is RDBMS and how is it different from DBMS ?",
    answer:
      "RDBMS stands for Relational Database Management System. The key difference here, compared to DBMS, is that RDBMS stores data in the form of a collection of tables, and relations can be defined between the common fields of these tables. Most modern database management systems like MySQL, Microsoft SQL Server, Oracle, IBM DB2, and Amazon Redshift are based on RDBMS.",
  },
  {
    id: 4,
    question: "What is SQL ?",
    answer:
      "SQL stands for Structured Query Language. It is the standard language for relational database management systems. It is especially useful in handling organized data comprised of entities (variables) and relations between different entities of the data",
  },
  {
    id: 5,
    question: "What are TABLES  and FIELDS ?",
    answer:
      "A table is an organized collection of data stored in the form of rows and columns. Columns can be categorized as vertical and rows as horizontal. The columns in a table are called fields while the rows can be referred to as records.",
  },
  {
    id: 6,
    question: "What is PRIMARY KEY ?",
    answer:
      "The PRIMARY KEY constraint uniquely identifies each row in a table. It must contain UNIQUE values and has an implicit NOT NULL constraint. A table in SQL is strictly restricted to have one and only one primary key, which is comprised of single or multiple fields (columns).",
  },
  {
    id: 7,
    question: "What is a FOREIGN KEY ?",
    answer:
      "A FOREIGN KEY comprises of single or collection of fields in a table that essentially refers to the PRIMARY KEY in another table. Foreign key constraint ensures referential integrity in the relation between two tables. The table with the foreign key constraint is labeled as the child table, and the table containing the candidate key is labeled as the referenced or parent table",
  },
  {
    id: 8,
    question: "What is a self-join ?",
    answer:
      "A self JOIN is a case of regular join where a table is joined to itself based on some relation between its own column(s). Self-join uses the INNER JOIN or LEFT JOIN clause and a table alias is used to assign different names to the table within the query",
  },
  {
    id: 9,
    question: "What is a query ?",
    answer:
      "A query is a request for data or information from a database table or combination of tables. A database query can be either a select query or an action query.",
  },
  {
    id: 10,
    question: "What is a sub-query ?",
    answer:
      "A subquery is a query within another query, also known as a nested query or inner query. It is used to restrict or enhance the data to be queried by the main query, thus restricting or enhancing the output of the main query respectively.",
  },
  {
    id: 11,
    question: "What is a SELECT statement ?",
    answer:
      "SELECT operator in SQL is used to select data from a database. The data returned is stored in a result table, called the result-set",
  },
];




app.get('/sql', (request, response) => {
    response.send(sql_qa)
});

const port = process.env.PORT || 8005;
app.listen(port, () => console.log(`App is listening to ${port}`));