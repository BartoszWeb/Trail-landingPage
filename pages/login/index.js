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

export async function getServerSideProps(context) {
    const session = await getSession({ req: context.req });

    if (!session) return{
        props: {}
    };
    return {
        redirect: {
            destination: "/app",
            permanent: false
        }
    };
}