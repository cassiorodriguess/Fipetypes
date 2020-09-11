import React, { Component } from 'react';
import { View, Text,Dimensions,StyleSheet,BackHandler,ScrollView,Image} from 'react-native';
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
this.props.navigation.navigate('Marcas');
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

    const {veiculos} = this.props.route.params;

    console.log(veiculos);     

    
    return (
      <View style={{flex:1,backgroundColor:'#fff',paddingBottom:width * 0.05}}>
        <View style={styles.ViewTextTitle}>
           <Text style={styles.textTitle}>TABELA FIPE</Text>
        </View>
    
        <View style={{marginBottom:width * 0.01,marginTop:-width * 0.05,
          marginLeft:width * 0.025,alignSelf:'flex-start',flexDirection:'row',alignItems:'center'}}>
            <View style={{width:width * 0.2,height:width * 0.1,backgroundColor:'#fdca01',borderRadius:width * 0.05,
            justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontFamily:'OpenSans-Light'}}>MARCA</Text>
            </View>
            <Text style={{fontSize:width * 0.050,marginLeft:width * 0.02,fontFamily:'OpenSans-SemiBold'}}>{veiculos[0].marca}</Text>
        </View>


         

       <View style={{alignSelf:'center',marginBottom:width * 0.02}}>
          
          
        {
        
        veiculos[0].marca=="AUDI"?
          
        <Image source={require('../../imgs/audi.png')} 
        style={{width:width * 0.25,height:width * 0.25,borderRadius:width * 0.02,resizeMode:'contain'}} /> 
        
        :

        veiculos[0].marca=="BMW"?
        
        <Image source={require('../../imgs/bmw.png')} 
        style={{width:width * 0.25,height:width * 0.25,borderRadius:width * 0.02,resizeMode:'contain'}} /> 
        
        :
        
        veiculos[0].marca=="CHEVROLET"?
        
        <Image source={require('../../imgs/chevrolet.png')} 
        style={{width:width * 0.25,height:width * 0.25,borderRadius:width * 0.02,resizeMode:'contain'}} /> 
        
        :  
        
        veiculos[0].marca=="CHRYSLER"?
        
        <Image source={require('../../imgs/chrysler.png')} 
        style={{width:width * 0.25,height:width * 0.25,borderRadius:width * 0.02,resizeMode:'contain'}} /> 
        
        :
        
        veiculos[0].marca=="CITROEN"?
        
        <Image source={require('../../imgs/citroen.png')} 
        style={{width:width * 0.25,height:width * 0.25,borderRadius:width * 0.02,resizeMode:'contain'}} /> 
        
        :
        
        veiculos[0].marca=="DODGE"?
        
        <Image source={require('../../imgs/dodge.png')} 
        style={{width:width * 0.25,height:width * 0.25,borderRadius:width * 0.02,resizeMode:'contain'}} /> 
         
        :
        
        veiculos[0].marca=="FERRARI"?
        
        <Image source={require('../../imgs/ferrari.png')} 
        style={{width:width * 0.25,height:width * 0.25,borderRadius:width * 0.02,resizeMode:'contain'}} /> 
        
        :
         
        veiculos[0].marca=="FIAT"?
        
        <Image source={require('../../imgs/fiat.png')} 
        style={{width:width * 0.25,height:width * 0.25,borderRadius:width * 0.02,resizeMode:'contain'}} /> 
        
        :

        veiculos[0].marca=="FORD"?
        
        <Image source={require('../../imgs/ford.png')} 
        style={{width:width * 0.25,height:width * 0.25,borderRadius:width * 0.02,resizeMode:'contain'}} /> 
        
        :

        veiculos[0].marca=="HONDA"?
        
        <Image source={require('../../imgs/honda.png')} 
        style={{width:width * 0.25,height:width * 0.25,borderRadius:width * 0.02,resizeMode:'contain'}} /> 
        
        :

        veiculos[0].marca=="HYUNDAI"?
        
        <Image source={require('../../imgs/hyundai.png')} 
        style={{width:width * 0.25,height:width * 0.25,borderRadius:width * 0.02,resizeMode:'contain'}} /> 
        
        :

        veiculos[0].marca=="JEEP"?
        
        <Image source={require('../../imgs/jeep.jpg')} 
        style={{width:width * 0.25,height:width * 0.25,borderRadius:width * 0.02,resizeMode:'contain'}} /> 
        
        :

        veiculos[0].marca=="KIA"?
        
        <Image source={require('../../imgs/kia.jpg')} 
        style={{width:width * 0.25,height:width * 0.25,borderRadius:width * 0.02,resizeMode:'contain'}} /> 
        
        :
        
        veiculos[0].marca=="LAND-ROVER"?
        
        <Image source={require('../../imgs/land-rover.png')} 
        style={{width:width * 0.25,height:width * 0.25,borderRadius:width * 0.02,resizeMode:'contain'}} /> 
        
        :
        
        veiculos[0].marca=="MAZDA"?
        
        <Image source={require('../../imgs/mazda.png')} 
        style={{width:width * 0.25,height:width * 0.25,borderRadius:width * 0.02,resizeMode:'contain'}} /> 
        
        :

        veiculos[0].marca=="MERCEDES-BENZ"?
        
        <Image source={require('../../imgs/mercedes.png')} 
        style={{width:width * 0.25,height:width * 0.25,borderRadius:width * 0.02,resizeMode:'contain'}} /> 
        
        :
        
        veiculos[0].marca=="MITSUBISH"?
        
        <Image source={require('../../imgs/mitsubishi.png')} 
        style={{width:width * 0.25,height:width * 0.25,borderRadius:width * 0.02,resizeMode:'contain'}} /> 
        
        :

        veiculos[0].marca=="NISSAN"?
        
        <Image source={require('../../imgs/nissan.png')} 
        style={{width:width * 0.25,height:width * 0.25,borderRadius:width * 0.02,resizeMode:'contain'}} /> 
        
        :

        veiculos[0].marca=="PEUGEOT"?
        
        <Image source={require('../../imgs/peugeot.png')} 
        style={{width:width * 0.25,height:width * 0.25,borderRadius:width * 0.02,resizeMode:'contain'}} /> 
        
        :

        veiculos[0].marca=="RENAULT"?
        
        <Image source={require('../../imgs/renault.png')} 
        style={{width:width * 0.25,height:width * 0.25,borderRadius:width * 0.02,resizeMode:'contain'}} /> 
        
        :

        veiculos[0].marca=="SUBARU"?
        
        <Image source={require('../../imgs/subaru.png')} 
        style={{width:width * 0.25,height:width * 0.25,borderRadius:width * 0.02,resizeMode:'contain'}} /> 
        
        :

        
        veiculos[0].marca=="FERRARI"?
        
        <Image source={require('../../imgs/ferrari.png')} 
        style={{width:width * 0.25,height:width * 0.25,borderRadius:width * 0.02,resizeMode:'contain'}} /> 
        
        :
       
        veiculos[0].marca=="SUZUKI"?
        
        <Image source={require('../../imgs/suzuki.png')} 
        style={{width:width * 0.25,height:width * 0.25,borderRadius:width * 0.02,resizeMode:'contain'}} /> 
        
        :
        
        veiculos[0].marca=="TOYOTA"?
        
        <Image source={require('../../imgs/toyota.png')} 
        style={{width:width * 0.25,height:width * 0.25,borderRadius:width * 0.02,resizeMode:'contain'}} /> 
        
        :
        
        veiculos[0].marca=="VOLKSWAGEN"?
        
        <Image source={require('../../imgs/volkswagen.png')} 
        style={{width:width * 0.25,height:width * 0.25,borderRadius:width * 0.02,resizeMode:'contain'}} /> 
        
        :
        
        veiculos[0].marca=="VOLVO"?
        
        <Image source={require('../../imgs/volvo.jpg')} 
        style={{width:width * 0.25,height:width * 0.25,borderRadius:width * 0.02,resizeMode:'contain'}} /> 
        
        :

        console.log()

        }
     
      </View> 

        <View style={styles.carro}>  
      
          <Icon name="car" size={width * 0.1} color="orange" style={{marginLeft:width * 0.02}} /> 
            <View style={{flexWrap:'wrap',flexDirection:'row',width:width * 0.55}}>
              <Text style={{fontSize:width * 0.05,marginLeft:width * 0.02,fontFamily:'OpenSans-Light'}}>{veiculos[0].veiculo}</Text>
            </View>
       
        </View> 


      
        <ScrollView style={{flex:1}}>

        {veiculos.map((value,i)=>{
          
          return(
            
            <View key={i} style={{flexDirection:'row',
            alignItems:'center',padding:width * 0.01,marginLeft:width * 0.025}}>

            <TouchableHighlight  underlayColor="transparent" 
             style={{borderBottomWidth:1,borderBottomColor:'#bbb',width:width * 0.86,padding:width * 0.035,paddingLeft:width * 0.02}}>

              <View>

                  <Text style={{fontSize:width * 0.045,fontFamily:'OpenSans-Light'}}>{value.veiculo}</Text>
                  
                  <Text style={{fontSize:width * 0.045,fontFamily:'OpenSans-Light'}}>Ano : {value.name}</Text>
        
                  <Text style={{fontSize:width * 0.045,fontFamily:'OpenSans-Bold'}}>{value.marca}</Text>
                  <TouchableHighlight underlayColor="#1c970f" 
                  onPress={()=>this.consultar(value)} style={{backgroundColor:'#1ca70e',alignSelf:'flex-end',padding:width * 0.015,borderRadius:width * 0.05}}>
                    <Text style={{fontSize:width * 0.035,textAlign:'right',color:'#fff',fontFamily:'OpenSans-Bold'}}>Consultar</Text>
                  </TouchableHighlight>
              </View>

            </TouchableHighlight>

            <TouchableHighlight underlayColor="transparent" onPress={()=>false}>

                <View style={{width:width * 0.067,height:width * 0.067,borderRadius:width/2,
                alignItems:'center',justifyContent:'center'}}>
                </View>

            </TouchableHighlight>
           
            </View>
              
          );  

        })}

        </ScrollView>

      </View>
    );
  }
}



const styles = StyleSheet.create({
textTitle:{
fontWeight:'bold',
fontFamily:'OpenSans-Bold',
textAlign:'center',
fontSize:width * 0.06,
color:'#fff'
},
carro:{
flexDirection:'row',
alignItems:'center',
padding:20,
paddingLeft:width * 0.01,
borderWidth:0.55,
backgroundColor:'#f5f5f5',
borderColor:'#ccc',
width:width * 0.95,
borderTopRightRadius:width/2,
borderBottomRightRadius:width/2,
marginBottom:width * 0.02,
},
ViewTextTitle:{
padding:15,
backgroundColor:'#fdca01',
marginBottom:width * 0.1
}
  
});

export default Veiculos;
