import React, { useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';

import Logo from '../../assets/logo.svg';

import Input from '../../Components/Input';
import Button from '../../Components/Button';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    const handelSubmit = useCallback(async data => {
        try {
            formRef.current?.setErrors({});

            const schema = Yup.object().shape({
                email: Yup.string()
                    .required('E-mail obrigatório')
                    .email('Digite um e-mail válido'),
                password: Yup.string().required('Senha obrigatória'),
            });
            await schema.validate(data, {
                abortEarly: false,
            });
        } catch (err) {
            const errors = getValidationErrors(err);

            formRef.current?.setErrors(errors);
        }
    }, []);

    return (
        <Container>
            <Content>
                <img src={Logo} alt="GoBarber" />

                <Form ref={formRef} onSubmit={handelSubmit}>
                    <h1>Faça seu logon</h1>

                    <Input name="email" icon={FiMail} placeholder="E-mail" />
                    <Input
                        name="password"
                        icon={FiLock}
                        type="password"
                        placeholder="Senha"
                    />

                    <Button type="submit">Entrar</Button>

                    <a href="forgot">Esqueci minha senha</a>
                </Form>

                <Link to="sign_up">
                    <FiLogIn />
                    Criar Conta
                </Link>
            </Content>
            <Background />
        </Container>
    );
};

export default SignIn;
