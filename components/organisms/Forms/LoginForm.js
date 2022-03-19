import Link from "next/link";
import { useFormik } from "formik";
import { Validate } from "./FormValidation";
import { Error, FormLabel, InputWrapper } from "./Form.styles";
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
            <InputWrapper>
                <StyledInput
                    id="email"
                    name={ "email" }
                    type={ "text" }
                    onChange={ formik.handleChange }
                    value={ formik.values.email }
                    onBlur={ formik.handleBlur }
                    required
                />
                <FormLabel className="label" htmlFor="email">Email</FormLabel>
                <Error>{ formik.touched.email && formik.errors.email }</Error>
            </InputWrapper>
            <InputWrapper>
                <StyledInput
                    name={ "password" }
                    type={ "password" }
                    onChange={ formik.handleChange }
                    value={ formik.values.password }
                    onBlur={ formik.handleBlur }
                    required
                />
                <FormLabel htmlFor="email">Password</FormLabel>
                <Error>{ formik.touched.password && formik.errors.password }</Error>
            </InputWrapper>
            <FormButton type="submit">Log in</FormButton>
        </FormContainer>
    )
    }
;