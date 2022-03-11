import Link from "next/link";
import { useFormik } from "formik";
import { Validate } from "./FormValidation";
import { Error } from "./Form.styles";
import { FormContainer, StyledLogo, StyledParagraph, StyledInput, FormButton } from "./Form.styles";
import { Logo } from "../../atoms/Logo/Logo";
import { useContext } from "react";
import NotificationContext from "../../../contexts/NotificationContext";
import axios from "axios";

const initialValues = {
    email: "",
    password: ""
};

function SignForm() {
    const notificationContext = useContext(NotificationContext);
    
    const onSubmit = (values) => {
        
        notificationContext.showNotification({
            title: "Signing up...",
            message: "Registering...",
            status: "pending"
        });
        
        axios.post("/api/signup", { email: values.email, password: values.password })
            .then(function () {
                notificationContext.showNotification({
                    title: "Success",
                    message: "Successfully registered",
                    status: "success"
                });
            })
            .catch(function () {
                notificationContext.showNotification({
                    title: "Error",
                    message: "Something went wrong!",
                    status: "error"
                });
            });

    };
    
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate: Validate,
    });
    
    return (
        <FormContainer onSubmit={ formik.handleSubmit }>
            <Link passHref href="/">
                <StyledLogo>
                    <Logo/>
                </StyledLogo>
            </Link>
            <StyledParagraph>Sign Up</StyledParagraph>
            <StyledInput
                name={ "email" }
                type={ "text" }
                placeholder={ "Business email" }
                onChange={ formik.handleChange }
                value={ formik.values.email }
                onBlur={ formik.handleBlur }
            />
            <Error>{ formik.touched.email && formik.errors.email }</Error>
            <StyledInput
                name={ "password" }
                type={ "password" }
                placeholder={ "Password" }
                onChange={ formik.handleChange }
                value={ formik.values.password }
                onBlur={ formik.handleBlur }
            />
            <Error>{ formik.touched.password && formik.errors.password }</Error>
            <FormButton type="submit">Sign up</FormButton>
        </FormContainer>
    );
}

export default SignForm;