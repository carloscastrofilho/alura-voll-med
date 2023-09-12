import { VStack , Text, ScrollView, Avatar,
    Divider , Image } from "native-base"

import { Titulo } from "../components/Titulo"
import Logo from '../assets/Logo.png'      
import { EntradaTexto } from "../components/EntradaTexto"
import { Botao } from "../components/Botao"
    
    export default function Principal(){
        return (
            <ScrollView flex={1}>
                <Image alignSelf="center" source={Logo} alt="logo Voll" />

                <Titulo>Boas Vindas!</Titulo>    
                <VStack flex={1} alignItems="center" justifyContent={"center"} p={5}>
                <EntradaTexto label="especialidade" placeholder="digite a especialidade" />
                <EntradaTexto label="localização" placeholder="Digite sua localização" />

                <Botao>Entrar</Botao>
                <Divider mt={5}/>
                <Titulo mt={5} mb={5} color="blue.800">Depoimentos</Titulo>
                <Text color="gray.500">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                </Text>
                <Titulo fontSize="md">Júlio, 40 anos, São Paulo/SP.</Titulo>
                <Divider mt={5}/>

                <Text color="gray.500">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                </Text>
                <Titulo fontSize="md">Júlio, 40 anos, São Paulo/SP.</Titulo>
                <Divider mt={5}/>


                <Text color="gray.500">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                </Text>
                <Titulo fontSize="md">Júlio, 40 anos, São Paulo/SP.</Titulo>
                <Divider mt={5}/>

                <Text color="gray.500">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                </Text>
                <Titulo fontSize="md">Júlio, 40 anos, São Paulo/SP.</Titulo>
                <Divider mt={5}/>
                </VStack>
            </ScrollView>
        )
    }