const pool = require('../db'); // Import the MySQL pool

// GET all forms
exports.getForms = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM forms');
        return res.json({ errors: false, data: rows });
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message });
    }
};


// POST a new form
// POST a new form
exports.postForms = async (req, res) => {
    try {
        const {Name, Email, Country, PostCode, Phoneno, companyname, joblevel, jobtitle, revenue, industry, empsize} = req.body;
        
        const query = `
            INSERT INTO forms 
                (Name, Email, Country, PostCode, Phoneno, companyname, joblevel, jobtitle, revenue, industry, empsize) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        const values = [Name, Email, Country, PostCode, Phoneno, companyname, joblevel, jobtitle, revenue, industry, empsize];
        
        const [result] = await pool.query(query, values);
         return res.json({ errors: false, data: result });
        
       
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message });
    }
};



