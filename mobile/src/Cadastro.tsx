import {
    Text, Image,  Box, Checkbox, ScrollView
} from "native-base";

import Logo from './assets/Logo.png';
import { Titulo } from "./components/Titulo";
import { Botao } from "./components/Botao";
import { EntradaTexto } from "./components/EntradaTexto";
import { useState } from "react";
import { secoes } from "./utils/CadastroEntradaTexto";

export default function Cadastro() {
    const [numSecao, setnumSecao] = useState(0) ;


    function avancarSecao(){
        if ( numSecao < secoes.length-1) {
            setnumSecao(numSecao+1);
        }        
    }

    function voltaSecao(){
        if ( numSecao > 0 ) {
          setnumSecao(numSecao-1);
        }
    }
    return (
        <ScrollView flex={0} p={5} >

            <Image alignSelf="center" source={Logo} alt="logo Voll" />

            <Titulo>{secoes[numSecao].titulo} </Titulo>    
            <Box>
                {
                    secoes[numSecao]?.inputTexto.map(entrada => {
                        return <EntradaTexto label={entrada.label}
                            placeholder={entrada.placeholder} key={entrada.id} />;
                      })
                }
            </Box>
            <Box>
            secoes[numSecao].inputCheck ? <Text color="blue.800" fontWeight="bold" 
                fontSize="md" mt={2} mb={4}>Selecione o plano:</Text>
                {
                    secoes[numSecao]?.inputCheck.map(entrada => {
                        return <Checkbox key={entrada.id} value={entrada.value}>
                            {entrada.value}

                        </Checkbox>
                      })
                }
            </Box>            
            { numSecao > 0 && <Botao backgroundColor="gray.400" mt={4} onPress={()=>voltaSecao()}>voltar</Botao>}

            <Botao marginBottom={20} onPress={()=>avancarSecao()}>avançar</Botao>
            
        </ScrollView>
    );
}