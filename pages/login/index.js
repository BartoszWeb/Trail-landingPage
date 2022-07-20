import { LoginForm } from "../../components/organisms/Forms/LoginForm";
import { getSession } from "next-auth/react";


function Login() {
    
    return (
        <>
            <LoginForm/>
        </>
    );
}

export default Login;