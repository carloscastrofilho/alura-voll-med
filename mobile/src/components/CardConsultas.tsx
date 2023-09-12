import { Text, Avatar , VStack} from 'native-base'
import { Botao } from './Botao'

interface CardProps {
    nome: string;
    foto?: string ;
    especialidade : string ;
    data?: string;
    foiAtendido?: boolean ;
    foiAgendado?: boolean ;
}

export function CardConsulta({ nome,foto,data, 
    especialidade, foiAgendado, foiAtendido }:CardProps){
    return (
        <VStack mb="5" w="100%" bg={ foiAtendido ? 'blue.100':"green.400" } 
            p="5" borderRadius="lg" shadow={1} >
            <VStack flexDirection="row">
            <Avatar size="lg" source={{uri:foto}}/>
            <VStack pl="4">
            <Text fontSize="md" fontWeight="bold">{nome} </Text>
            <Text> {especialidade} </Text>
            <Text> {data} </Text>
            </VStack>
            </VStack>
            <Botao mt={4}> 
                {foiAgendado ? 'Cancelar' : 'Agendar Consulta' } 
             </Botao>
        </VStack>
    )
}