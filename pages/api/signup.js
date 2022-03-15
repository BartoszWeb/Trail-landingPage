import { connectDatabase, insertDocument } from "../../helpers/db-util";
import { validationEmail } from "../../components/organisms/Forms/FormValidation";
import { validationPassword } from "../../components/organisms/Forms/FormValidation";

async function handler(req, res) {
    if (req.method === "POST") {
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
            await insertDocument(client, "users", { email: userEmail, password: userPassword });
            client.close();
        } catch (error) {
            res.status(500).json({ message: "Inserting data failed!" });
            return;
        }
        
        res.status(201).json({ message: "Signed up!" });
    }
}

export default handler;