import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import LoginImg from '../../assets/login-image.svg'
import Logo from '../../assets/logo.svg'
import { Button, ErrorMessage } from '../../components'
import paths from '../../constants/paths'
import { useUser } from '../../hooks/UserContext'
import api from '../../services/api'
import {
    Container,
    LoginImage,
    ContainerItens,
    Label,
    Input,
    SignInLink
} from './styles'

export function Login() {
    const history = useHistory()
    const { putUserData } = useUser()

    const schema = Yup.object().shape({
        email: Yup.string()
            .email('Digite um e-mail válido')
            .required('O e-mail é obrigatório'),
        password: Yup.string()
            .required('A senha é obrigatório')
            .min(6, 'A senha deve ter pelo menos 6 digítos')
    })

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = async clientData => {
        const { data } = await toast.promise(
            api.post('sessions', {
                email: clientData.email,
                password: clientData.password
            }),
            {
                pending: 'Verificando seus dados',
                success: 'Seja bem-vindo(a)',
                error: 'Verifique seu e-mail e senha🤯'
            }
        )

        putUserData(data)

        setTimeout(() => {
            if (data.admin) {
                history.push(paths.Order)
            } else {
                history.push(paths.Home)
            }
        }, 1000)
    }

    return (
        <Container>
            <LoginImage src={LoginImg} alt="Login-Image" />
            <ContainerItens>
                <img src={Logo} alt="Logo" />
                <h1>Login</h1>

                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <Label>Email</Label>
                    <Input
                        type="email"
                        {...register('email')}
                        error={errors.email?.message}
                    />
                    <ErrorMessage>{errors.email?.message}</ErrorMessage>

                    <Label>Senha</Label>
                    <Input
                        type="password"
                        {...register('password')}
                        error={errors.password?.message}
                    />
                    <ErrorMessage>{errors.password?.message}</ErrorMessage>

                    <Button
                        type="submit"
                        style={{ marginTop: 75, marginBottom: 25 }}
                    >
                        Entrar
                    </Button>
                </form>
                <SignInLink>
                    Não possui conta ?{' '}
                    <Link style={{ color: 'white' }} to={paths.Registration}>
                        Cadastre-se
                    </Link>
                </SignInLink>
            </ContainerItens>
        </Container>
    )
}
