const express = require('express');
const signupModel = require('./model/signup')
const feeModel = require('./model/addfee')
const expenseModel = require('./model/expense')
const jwt = require('jsonwebtoken');
const env = require('dotenv').config();
const cookieParser = require('cookie-parser');
const session = require('express-session');
const router = express.Router();
// const cron = require('node-cron');


// process.env

const cors = require('cors'); //cors help to connect and res req proccess two diiferent server
const port = 8000;

const app = express(); //express() is a function that comes from the Express.js framework. When you call this function, it creates an instance of an Express application, which is essentially a web server that you can configure to handle HTTP requests and responses

app.use(cors({

    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
})); //enbale cors

app.use(express.json());
app.use(cookieParser());









const db = require('./databaseconnect/dbconnection');


//signup api
const bcrypt = require('bcrypt');


// const createToken = () => {

//     return jwt.sign({ _id }, 'sadikwahid', { expiresIn: '3d' })



// }

//authencation

const requireAuth = (req, res, next) => {

    const token = req.cookies.token;

    if (token) {
        jwt.verify(token, "jwt-secret-key", (err, decodedToken) => {

            if (err) {
                console.log(err.message);
                res.redirect('/login');

            } else {
                next();


            }

        })

    } else {
        res.redirect('/login');

    }




}


router.use(requireAuth);

router.get('/', (req, res) => {
    res.json({ message: 'router protected' });
});








//Delete memberinfo

app.delete('/deletememberinfo/:id', (req, res) => {
    const id = req.params.id;
    feeModel.findByIdAndDelete(id)
        .then(deletememberinfo => {
            if (deletememberinfo) {
                return res.status(200).json({ message: "user not found" });
            }

        })
        .catch(err => {
            res.status(500).json({ error: "Failed to delete " });
        })

});

//update memberinfomation

app.put('/updatememberinfo/:id', (req, res) => {

    const id = req.params.id;

    feeModel.findByIdAndUpdate({ _id: id }, { name: req.body.name, phonenumber: req.body.phonenumber, payment: req.body.payment, additionalpayment: req.body.additionalpayment, paymentdate: req.body.paymentdate, duedate: req.body.duedate })
        .then((updatememberinfo) => {
            res.status(200).json(updatememberinfo)


        })
        .catch(err => {
            res.status(500).json({ error: "failed to update use" });
        });

});

app.get('/getmember/:id', (req, res) => {
    const id = req.params.id;
    feeModel.findById({ _id: id })
        .then(users => res.json(users))
        .catch(err => res.json(err))
})





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
            if (user) {
                bcrypt.compare(password, user.password, (err, result) => {
                    if (err) {
                        console.error(err); // Log the error
                        res.status(500).json({ error: "Internal Server Error: " + err.message });
                    } else if (result) {
                        // Generate and set a JWT token as a cookie

                        const token = jwt.sign({ email: user.email }, "jwt-secret-key", { expiresIn: "1d" });

                        res.cookie("token", token, {
                            secure: true, // Set to true for HTTPS
                            httpOnly: true, // Ensure that the cookie is accessible only from the server
                            expires: new Date(Date.now() + 24 * 3600000), // 1 day
                            // path: '/', // Specify a path if needed
                            // domain: '', // Specify a domain if needed
                        });



                        res.json({ result: "login ok" });
                    } else {
                        res.status(401).json({ error: "Password is incorrect" });
                    }
                });

            } else {
                res.status(404).json({ error: "User not found" });

            }
        })
        .catch(err => {
            console.error(err); // Log the error
            res.status(500).json({ error: "Internal Server Error: " + err.message });
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


    const formatDateToMonth = (date) => {

        return new Intl.DateTimeFormat('en-US', 'id').format(date);
    };



    const { name, phonenumber, payment, additionalpayment, paymentdate, duedate, status } = req.body;
    const parsedpaymentdate = formatDateToMonth(new Date(paymentdate));
    const parsedduedate = formatDateToMonth(new Date(duedate));
    const addfee = new feeModel({
        name: name,
        phonenumber: phonenumber,
        payment: payment,
        additionalpayment: additionalpayment,
        paymentdate: parsedpaymentdate,
        duedate: parsedduedate,
        stattus: 'Paid'





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