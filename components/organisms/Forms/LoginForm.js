import Link from "next/link";
import { useFormik } from "formik";
import { Validate } from "./FormValidation";
import { Error } from "./Form.styles";
import { FormContainer, StyledLogo, StyledParagraph, StyledInput, FormButton } from "./Form.styles";
import { Logo } from "../../atoms/Logo/Logo";

const initialValues = {
    email: "",
    password: ""
};

const onSubmit = (values) => {
    console.log(values);
};


export const LoginForm = () => {
    
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
                <StyledParagraph>Log in</StyledParagraph>
                <StyledInput
                    name={ "email" }
                    type={ "text" }
                    placeholder={ "Email" }
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
                <FormButton type="submit">Log in</FormButton>
            </FormContainer>
        );
    }
;