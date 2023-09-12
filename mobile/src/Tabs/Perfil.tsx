import { VStack , Text, ScrollView, Avatar,
Divider } from "native-base"
import { Titulo } from "../components/Titulo"

export default function Perfil(){
    return (
        <ScrollView flex={1}>
            <VStack flex={1} alignItems="center" justifyContent={"center"} p={5}>
                <Titulo color="blue.500">Meu Perfil </Titulo>
                <Avatar size="xl" source={{uri:"https://github.com/carloscastrofilho.png"}} mt={5}/>
                <Titulo color="blue.500" >Informações Pessoais</Titulo>    
                <Titulo fontSize="lg">Carlos Filho</Titulo>
                <Text>07/XX/19XX</Text>
                <Text>Taquaritinga/SP</Text>
                <Divider mt={5}/>
                <Titulo color="blue.500" mb={2}>Histórico Médico </Titulo>
                <Text>Bronquite</Text>
                <Text>Sinuzite</Text>
            </VStack>
        </ScrollView>
    )
}