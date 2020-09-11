import React, { Component } from 'react';
import { View, Text,Dimensions,StyleSheet,BackHandler,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import { TouchableHighlight } from 'react-native-gesture-handler';
import axios from 'axios';

const {width} = Dimensions.get("screen");
 
class Veiculos extends Component {

constructor(props){
super(props);
console.log(props); 
}

componentDidMount(){  
BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
}
 
componentWillUnmount() {
BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
}

handleBackButton = () =>  {  
this.props.navigation.navigate('Veiculos');
return true;   
}

consultar(value){
  
const {marca_id,veiculo_id} = this.props.route.params;

const{navigation} = this.props;

axios.get('http://fipeapi.appspot.com/api/1/carros/veiculo/'+marca_id+'/'+veiculo_id+'/'+value.id+'.json')
.then(response=>{
  if(response.data.id){

   navigation.navigate("Consulta",{dados:response.data}); 

  }
}).catch(er=>{
console.log(er);
});

}

  render() {
    
    const {dados} = this.props.route.params;

    return (
      <View style={{flex:1,backgroundColor:'#fff',paddingBottom:width * 0.05}}>
        <View style={styles.ViewTextTitle}>
           <Text style={styles.textTitle}>TABELA FIPE</Text>
        </View>
  
        <View style={{marginBottom:width * 0.046,marginTop:width * 0.02,
          marginLeft:width * 0.025,alignSelf:'flex-start',flexDirection:'row',alignItems:'center'}}>
            <View style={{width:width * 0.2,height:width * 0.1,backgroundColor:'#fdca01',borderRadius:width * 0.05,
            justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontFamily:'OpenSans-Light'}}>MARCA</Text>
            </View>
            <Text style={{fontSize:width * 0.050,marginLeft:width * 0.02,fontFamily:'OpenSans-Light'}}>{dados.marca}</Text>
        </View>

        <View style={styles.carro}>  
      
          <Icon name="key" size={width * 0.1} color="orange" style={{marginLeft:width * 0.02}} /> 
            <View style={{flexWrap:'wrap',flexDirection:'row',width:width * 0.55}}>
              <Text style={{fontSize:width * 0.05,marginLeft:width * 0.02,fontFamily:'OpenSans-Light'}}>{dados.veiculo}</Text>
            </View>
       
        </View> 

        <View style={{marginTop:width * 0.1}}> 

            <View style={{flexDirection:'row',justifyContent:'space-around'}}>

                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Icon2 name="car-alt" size={width * 0.05}/>
                    <Text style={{fontSize:width * 0.045,marginLeft:width * 0.025,fontFamily:'OpenSans-Light'}}>Ano/modelo: {dados.ano_modelo}</Text>    
                </View>                    

                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Icon2 name="gas-pump" size={width * 0.05}/>
                    <Text style={{fontSize:width * 0.045,marginLeft:width * 0.025,fontFamily:'OpenSans-Light'}}>{dados.combustivel}</Text>    
                </View>                    

            </View>   

            <View style={{alignItems:'flex-end',marginRight:width * 0.08,marginTop:width * 0.1}}>
                <Text style={{fontSize:width * 0.085,fontFamily:'OpenSans-Regular'}}>{dados.preco}</Text>
            </View>

            <TouchableHighlight underlayColor="transparent"
             style={{alignSelf:'flex-end',marginRight:width * 0.1,marginTop:width * 0.085}} 
             onPress={()=>this.props.navigation.navigate("Marcas")}>

            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}} >

                <Icon2 name="arrow-right"/>
                <Text style={{fontSize:width * 0.035,fontFamily:'OpenSans-Light'}}> VER OUTRO</Text>

            </View>

            </TouchableHighlight>

          {/*   <View style={{flexDirection:'row',justifyContent:'space-around'}}>

                <Text>Marca:{dados.marca}</Text>    

                <Text>Preço:{dados.preco}</Text>    

            </View> */}

        </View>

      </View>
    );
  }
}



const styles = StyleSheet.create({
textTitle:{
fontWeight:'bold',
fontSize:width * 0.02,
textAlign:'center',
fontSize:width * 0.06,
color:'#fff'
},
carro:{
flexDirection:'row',
alignItems:'center',
padding:width * 0.1,
paddingLeft:width * 0.01,
backgroundColor:'#f5f5f5',
width:width,
marginBottom:width * 0.02,
},
ViewTextTitle:{
padding:15,
backgroundColor:'#fdca01',
marginBottom:width * 0.1
}
  
});

export default Veiculos;
