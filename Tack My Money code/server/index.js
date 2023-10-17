const express = require('express');
const signupModel = require('./model/signup')
const feeModel = require('./model/addfee')
const expenseModel = require('./model/expense')
const jwt = require('jsonwebtoken');
const env = require('dotenv').config();

// process.env

const cors = require('cors'); //cors help to connect and res req proccess two diiferent server
const port = 8000;

const app = express(); //express() is a function that comes from the Express.js framework. When you call this function, it creates an instance of an Express application, which is essentially a web server that you can configure to handle HTTP requests and responses

app.use(cors()); //enbale cors
app.use(express.json());

const db = require('./databaseconnect/dbconnection');


//signup api
const bcrypt = require('bcrypt');


// const createToken = () => {

//     return jwt.sign({ _id }, 'sadikwahid', { expiresIn: '3d' })



// }


//fee charts data api
app.get('/fee', async(req, res) => {
    try {
        const fees = await feeModel.find();
        res.json(fees);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

//expense charts data api

app.get('/expense', async(req, res) => {
    try {
        const expenses = await expenseModel.find();
        res.json(expenses);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});








app.post("/signup", (req, res) => {
    const { name, email, password, phonenumber } = req.body;

    // Hash the password
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
            res.status(500).json({ error: "Internal Server Error1" });
        } else {
            // Create a new user with the hashed password
            const newUser = new signupModel({
                name: name,
                email: email,
                password: hash,
                phonenumber: phonenumber // Store the hashed password in the database
            });

            // Save the user to the database
            newUser.save()
                .then(() => {
                    res.json({ success: "User registered successfully" });
                })
                .catch((err) => {
                    console.log(err);
                    res.status(500).json({ error: "Internal Server Error" });
                });
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

                        //generate jwt token

                        // const token = jwt.sign({ userId: user._id, email: user.email }, 'sadikwahid', {
                        //     expiresIn: '1h' // Set the token expiration time (e.g., 1 hour)
                        // });

                        res.json({ token: "ok login" });
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


//////////////////////////////////////////////////////////////






// const verifyToken = (req, res, next) => {
//     const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
//     if (!token) {
//         return res.status(401).json({ error: "Unauthorized" });
//     }

//     jwt.verify(token, 'your_secret_key', (err, decoded) => {
//         if (err) {
//             return res.status(401).json({ error: "Unauthorized" });
//         }
//         req.user = decoded; // You can access user data in protected routes via 'req.user'
//         next();
//     });
// };

// app.get("/protected-resource", verifyToken, (req, res) => {
//     // This route is protected, and you can access user data via 'req.user'
//     res.json({ message: "Protected resource accessed" });
// });






///////////////////////////////////////////////////////////////













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
    const { description, expense, date } = req.body;

    // Parse the date string to a Date object
    const parsedDate = new Date(date);

    // Create the expense document with the parsed date
    const newExpense = new expenseModel({
        description,
        expense,
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


app.get("/logout", (req, res) => {
    // Clear the user's session or remove authentication tokens here
    // For example, if you're using sessions, you can destroy the session.
    req.session.destroy((err) => {
        if (err) {
            console.error("Error destroying session:", err);
        }
        res.redirect("/login"); // Redirect to the login page or any other desired page
    });
});


app.listen(port, () => {
    console.log(`server listening on port ${port}`);
})