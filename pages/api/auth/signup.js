import { connectDatabase } from "../../../helpers/db-utils";
import { validationEmail } from "../../../components/organisms/Forms/FormValidation";
import { validationPassword } from "../../../components/organisms/Forms/FormValidation";
import { hashPassword } from "../../../helpers/auth";

async function handler(req, res) {
    if (req.method !== "POST") return;
    
    const userEmail = req.body.email;
    const userPassword = req.body.password;
    
    if (!validationEmail(userEmail)) {
        res.status(422).json({ message: "Invalid email address." });
        return;
    }
    if (!validationPassword(userPassword)) {
        res.status(422).json({ message: "Password is incorrect. Password should contain at least one number. One lowercase, one uppercase letter and also at least six characters." });
        return;
    }
    
    let client;
    try {
        client = await connectDatabase();
    } catch (error) {
        res.status(500).json({ message: "Connecting to the database failed!" });
        return;
    }
    
    try {
        const existingUser = await client.db().collection("users").findOne({ email: userEmail });
        if (existingUser) {
            res.status(422).json({ message: "User already exists!" });
            client.close();
            return;
        }
        
    } catch (err) {
        res.status(500).json({ message: "Finding user failed" });
        client.close();
        return;
    }
    try {
        const hashedPassword = await hashPassword(userPassword);
        await client.db().collection("users").insertOne({ email: userEmail, password: hashedPassword });
        client.close();
    } catch (error) {
        res.status(500).json({ message: "Inserting data failed!" });
        client.close();
        return;
    }
    
    res.status(201).json({ message: "Signed up!" });
    
}

export default handler;