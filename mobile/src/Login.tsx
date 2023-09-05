import { TouchableOpacity } from "react-native"
import {
    VStack, Image, Text, Box, FormControl,
    Input, Button, Link
} from "native-base";

import Logo from './assets/Logo.png';
import { Titulo } from "./components/Titulo";
import { Botao } from "./components/Botao";
import { EntradaTexto } from "./components/EntradaTexto";

export default function Login() {
    return (
        <VStack flex={1} alignItems="center" p={5} justifyContent="center" >

            <Image source={Logo} alt="logo Voll" />
            <Titulo>Faça logina na sua conta</Titulo>
            <Box>
                <EntradaTexto label="email" placeholder="Insira seu endereço de email" />
                <EntradaTexto label="senha" placeholder="Insira sua senha de acesso" />
            </Box>
            <Botao>Entrar</Botao>
            <Link href='http://www.fatectq.edu.br' marginTop={10}> Esqueceu a senha? </Link>
            <Box w="100%" flexDirection="row" justifyContent="center" mt={10}>
                <Text> Ainda não tem cadastro? </Text>
                <TouchableOpacity>
                    <Text color="blue.500">Faça seu cadastro</Text>
                </TouchableOpacity>
            </Box>
        </VStack>
    );
}