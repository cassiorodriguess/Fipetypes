import React, { Component } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from  '@react-navigation/stack';
import Marcas from './src/Componentes/Marcas/Marcas.js';
import Veiculos from './src/Componentes/Veiculos/Veiculos.js';
import Consulta from './src/Componentes/Consulta/Consulta.js';


const Stack = createStackNavigator();

export default class App extends Component {


  render() {

    return(

    <NavigationContainer>

        <Stack.Navigator headerMode="none" initialRouteName="Marcas"> 

          <Stack.Screen name="Marcas"   component={Marcas} />

          <Stack.Screen name="Veiculos" component={Veiculos}/>

          <Stack.Screen name="Consulta" component={Consulta}/>

        </Stack.Navigator>      

    </NavigationContainer>
    
    );


  }
}

