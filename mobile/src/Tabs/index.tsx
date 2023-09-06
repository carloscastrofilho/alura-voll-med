import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons' ;

import Principal from "../Principal"; 
import Consultas from "./Consultas";

const Tab = createBottomTabNavigator() ;
const screnOptions = {
    tabBarStyle: {
        backgroundColor: "#002851",
    },
    tabBarActiveTintColor: "#339cff",
    tabBarInactiveTintColor: "#FFF",
}

const tabs = [
    { name: "Principal",
        component: Principal,
        icon: 'home'
    },
    { name: "Consultas",
        component: Consultas,
        icon: 'calendar'
    },
    { name: "Explorar",
        component: Consultas,
        icon: 'search'
    },
    { name: "Perfil",
        component: Consultas,
        icon: 'person'
    },
]

export default function Tabs(){
    return (
        <Tab.Navigator screenOptions={screnOptions}>
            {tabs.map((tab)=>(
                <Tab.Screen 
                    key={tab.name}
                    name={tab.name}
                    component={tab.component} 
                    options={{headerShow: false,
                    tabBarIcon:({color, size})=> (
                        <Ionicons name={tab.icon}  color={color} size={size} />)
                }}/>
            ))
            
            }
            {/* <Tab.Screen name="Consultas" component={Consultas} options={{headerShow: false,
            tabBarIcon:({color, size})=> (
                <Ionicons name="calendar"  color={color} size={size} />)
            }}/>
            <Tab.Screen name="Explorar" component={Consultas} options={{headerShow: false,
            tabBarIcon:({color, size})=> (
                <Ionicons name="search"  color={color} size={size}/>)
            }}/>
            <Tab.Screen name="Perfil" component={Consultas} options={{headerShow: false,
            tabBarIcon:({color, size})=> (
                <Ionicons name="person"  color={color} size={size} />)
            }}/> */}
        </Tab.Navigator>
    )
}


