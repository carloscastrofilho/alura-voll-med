import { VStack , Text, Divider , ScrollView} from "native-base"
import { CardConsulta } from "../components/CardConsultas"
import { Titulo } from "../components/Titulo"
import { Botao } from "../components/Botao"

export default function Consultas(){
    return (
        <ScrollView p="5">
           <Titulo color="blue.500" mb="1"> Minhas Consultas</Titulo>
           <Botao mb="2">Agendar nova Consulta</Botao>
           <Titulo color="blue.500" fontSize="lg" alignSelf="flex-start">Próximas Consultas</Titulo>
           <CardConsulta  
            nome= "Dr. fula de tal 1"
            especialidade = "Cardiopata"
            data = " 30/09/2023"
            foto = "https://github.com/carloscastrofilho.png"
            foiAgendado
             />
             <Titulo color="blue.500" fontSize="lg" alignSelf="flex-start">Consultas Passadas</Titulo>
            <Divider mt="5"/>
            <CardConsulta  
            nome= "Dr. fula de tal 2"
            especialidade = "Cardiopata"
            data = " 30/09/2023"
            foiAtendido
             />
            <Divider mt="5"/>
            <CardConsulta  
            nome= "Dr. fula de tal 2"
            especialidade = "Cardiopata"
            data = " 30/09/2023"
            foiAtendido
             />
        </ScrollView>

        
    )
}