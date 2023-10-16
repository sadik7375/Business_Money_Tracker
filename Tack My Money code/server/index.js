const express = require('express');
const signupModel = require('./model/signup')
const feeModel = require('./model/addfee')
const expenseModel = require('./model/expense')

const cors = require('cors'); //cors help to connect and res req proccess two diiferent server
const port = 8000;

const app = express(); //express() is a function that comes from the Express.js framework. When you call this function, it creates an instance of an Express application, which is essentially a web server that you can configure to handle HTTP requests and responses

app.use(cors()); //enbale cors
app.use(express.json());

const db = require('./databaseconnect/dbconnection');


//signup api
app.post("/signup", (req, res) => {

    signupModel.create(req.body)
        .then(users => {
            console.log("user create:", users);
            res.status(200).send(users);
        })
        .catch(err => {
            if (err.code === 11000) {
                console.log("dublicate key error:", err);
                res.status(400).json({ err: "user with same key data" });

            } else {
                res.status(500).json({ err: "Failed to create user" });
            }

        });

});


// Login API
app.post("/login", (req, res) => {
    const { email, password } = req.body;
    signupModel.findOne({ email: email })
        .then(user => {
            if (!user) {
                res.status(404).json({ error: "User not found" });
            } else {
                // Compare the hashed password using bcrypt (you need to add bcrypt to your project)
                bcrypt.compare(password, user.password, (err, result) => {
                    if (err) {
                        res.status(500).json({ error: "Internal Server Error1" });
                    } else if (result) {
                        res.json({ success: "Login successful" });
                    } else {
                        res.status(401).json({ error: "Password is incorrect" });
                    }
                });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: "Internal Server Error" });
        });
});

//add fee

app.post('/addfee', (req, res) => {

    const { name, phonenumber, payment, additionalpayment, paymentdate, duedate } = req.body;
    const parsedpaymentdate = new Date(paymentdate);
    const parsedduedate = new Date(duedate);
    const addfee = new feeModel({
        name: name,
        phonenumber: phonenumber,
        payment: payment,
        additionalpayment: additionalpayment,
        paymentdate: parsedpaymentdate,
        duedate: parsedduedate,





    })

    addfee
        .save()
        .then((expense) => {
            console.log(expense);
            res.status(200).json({ success: 'fee add' });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ err: 'internal server error' });
        });
});

//add expense
app.post('/addexpense', (req, res) => {
    const { description, expenseAmount, date } = req.body;

    // Parse the date string to a Date object
    const parsedDate = new Date(date);

    // Create the expense document with the parsed date
    const newExpense = new expenseModel({
        description,
        expenseAmount,
        date: parsedDate,
    });

    newExpense
        .save()
        .then((expense) => {
            console.log(expense);
            res.status(200).json({ success: 'expense add' });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ err: 'internal server error' });
        });
});

app.get('/addfee', (req, res) => {
    feeModel.find({})
        .then(users => res.json(users))
        .catch(err => res.json(err))

})





app.listen(port, () => {
    console.log(`server listening on port ${port}`);
})