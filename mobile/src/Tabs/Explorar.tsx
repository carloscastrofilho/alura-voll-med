import { VStack , Text, ScrollView, Box } from "native-base"
import { EntradaTexto } from "../components/EntradaTexto"
import { Botao } from "../components/Botao"
import { Titulo } from "../components/Titulo"
import { CardConsulta } from "../components/CardConsultas"

export default function Explorar(){
    return (
        <ScrollView flex={1} bgColor="white" paddingLeft={2} paddingRight={2}>
            <VStack flex={1} alignItems="flex-start">
            <Box p="3" mt={5} w="100%" borderColor="black" 
                borderRadius="lg" shadow={1} borderRightRadius="md">
                <EntradaTexto placeholder="Digite a especialidade" />
                <EntradaTexto placeholder="Digite a sua localização" />
                <Botao>Buscar</Botao>
            </Box>
            <Titulo alignSelf="center" color="blue.500">Resultado da Busca</Titulo>
            {[1,2,3,4,5].map( ( _,index )=>(
                <VStack flex={1} w="100%" alignItems="flex-start"
                 bgColor="white" key={index}>
             <CardConsulta  
                 nome= "Dr. fula de tal "
                 especialidade = "Cardiopata"              
                 />
              </VStack>
            ) )} 
            
                 
           </VStack>  
        </ScrollView>
    )
}