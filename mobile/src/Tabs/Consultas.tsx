import { VStack , Text } from "native-base"
import { CardConsulta } from "../components/CardConsultas"

export default function Consultas(){
    return (
        <VStack p="5">
            <Text> Consultas </Text>
            <CardConsulta  
            nome= "Dr. fula de tal 1"
            especialidade = "Cardiopata"
            data = " 30/09/2023"
            foto = "https://github.com/carloscastrofilho.png"
             />

            <CardConsulta  
            nome= "Dr. fula de tal 2"
            especialidade = "Cardiopata"
            data = " 30/09/2023"
            foiAtendido
             />
        </VStack>

        
    )
}