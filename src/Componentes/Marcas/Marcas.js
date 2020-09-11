
import React,{Component} from 'react';
import {StyleSheet,View,Text,Dimensions,ScrollView,
    Picker,ToastAndroid,TouchableHighlight,TextInput} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Value } from 'react-native-reanimated';


const{width} = Dimensions.get("screen");

class Marcas extends Component{

constructor(props){
super(props);
console.log(props);  
}

state = {
  veiculos:[],
  marcas:[],
  selectedValue:'',
  value:''  
}

setSelectedValue(value){
this.setState({value:''});  
this.setState({veiculos:[]});
this.setState({selectedValue:value});
this.busca(value);
}

busca(id){

var id = id+".json";  
         
axios.get('http://fipeapi.appspot.com/api/1/carros/veiculos/'+id+'',{
})
.then(response=>{

console.log(response.data);  

if(response.data.length > 0){
this.setState({veiculos:response.data});  
}

}).catch(err=>{

ToastAndroid.show("Ocorreu um erro ao tentar buscar essa marca.");

});    

}



buscaveiculo(value){

let veiculos = this.state.veiculos;  

let aux = [];

if(value.length > 0 && this.state.veiculos.length > 0){

for(var i = 0; i < veiculos.length;i++){

if(veiculos[i].name.indexOf(value) > -1){

aux.push(veiculos[i]);

}

}  

}else{


}

if(aux.length != 0){

this.setState({veiculos:aux});

}

}

componentDidMount(){
 
axios.get("http://fipeapi.appspot.com/api/1/carros/marcas.json")
.then(response=>{

if(response.data.length > 0){
this.setState({marcas:response.data});  
}

}).catch(err=>{

console.log(err);

});  

}

show_veiculo(veiculo){

const {navigation} = this.props; 
 
axios.get('http://fipeapi.appspot.com/api/1/carros/veiculo/'+this.state.selectedValue+'/'+veiculo.id+'.json')
.then(response=>{

if(response.data.length > 0){

navigation.navigate('Veiculos',{veiculos:response.data,marca_id:this.state.selectedValue,veiculo_id:veiculo.id});

}

}).catch(err=>{

console.log(err);

});  

/* 
const {navigation} = this.props; 

navigation.navigate('Veiculos',{veiculo}); */

}

render(){

  console.disableYellowBox = true;

  console.log(this.state.veiculos);

  return (



  <View style={{flex:1,backgroundColor:'#fff'}}>
    <View style={styles.ViewTextTitle}>
    <Text style={styles.textTitle}>TABELA FIPE</Text>
  </View>

    <View style={{flex:1,padding:20,backgroundColor:'#fff'}}>

      <View style={{alignSelf:'flex-end',marginRight:width * 0.12,marginTop:width * 0.02}}>
          <Text style={{fontSize:width * 0.040,fontFamily:'OpenSans-SemiBold'}}>Qual a marca ?</Text> 
      </View>    
  
      <View style={styles.selectCar}> 
        
        <Picker
            selectedValue={this.state.  selectedValue}
            onValueChange={(itemValue, itemIndex) => this.setSelectedValue(itemValue)}>
            {this.state.marcas.map((value,i)=>{
              return(
                <Picker.Item key={i} style={{fontFamily:'OpenSans-Light'}} color="#000" label={value.name} value={value.id}/>       
              )
            })}            
        </Picker>
      
      </View>
  

      <View style={{alignItems:'flex-end',justifyContent:'flex-end',alignSelf:'center',
         marginTop:width * 0.05,flexDirection:'row',backgroundColor:'#f5f5f5',
         width:width * 0.75,borderRadius:width * 0.065}}> 

         <TextInput
         style={{width:width * 0.60,backgroundColor:'#f5f5f5',textAlign:'right',
         height:width * 0.12
         ,paddingRight:width * 0.035,borderRadius:width * 0.065,fontSize:width * 0.035,fontFamily:'OpenSans-SemiBold'}}
         placeholder="Encontre seu carro"
         onChangeText = {(value)=>this.buscaveiculo(value)}
         onFocus={()=>this.setState({up:true})}
         onBlur={()=>this.setState({up:false})}
         value = {this.state.selectedValue}
         onTouchEnd={()=>this.setState({up:false})}
       
         />     
         <TouchableHighlight underlayColor="transparent" 
         onPress={()=>this.busca_src()}>
         <View style={{paddingBottom:width * 0.02,alignSelf:'flex-end',marginRight:width * 0.05}}>
               <Icon name="search" color="orange" size={width * 0.055}/>
         </View>  
         </TouchableHighlight>   
        
         </View>    
    
     
    
    <ScrollView style={styles.container}>
{/* 
    <View style={styles.car}>  
          <Icon name="car" size={35} color="orange"/> 
            <View style={{flexWrap:'wrap',flexDirection:'row',width:width * 0.55}}>
              <Text style={styles.textoName}>teste</Text>
            </View>
          <View>
           <Icon name="arrow-right" color="#000"/> 
          </View>
        </View> 
 */}

      {this.state.veiculos.length > 0?

      this.state.veiculos.map((value,i)=>{

      return (
        <TouchableHighlight key={i} onPress={()=>this.show_veiculo(value)} underlayColor="transparent">
        <View key={i} style={styles.car}>  
          <Icon name="car" size={35} color="orange"/> 
            <View style={{flexWrap:'wrap',flexDirection:'row',width:width * 0.55}}>
              <Text style={styles.textoName}>{value.name}</Text>
            </View>
          <View>
           <Icon name="arrow-right" color="#000"/> 
          </View>
        </View> 

        </TouchableHighlight>
      );  

      })
      
     
      :

      <View style={{alignSelf:'center',justifyContent:'center',flex:1}}>
        <Text style={{fontSize:width * 0.035,color:'#aaa',fontFamily:'OpenSans-Light'}}>CARREGANDO...</Text>
     </View>
      
    }

    </ScrollView>
  
    </View>
    
    </View>
  );


}

}


const styles = StyleSheet.create({
container:{
backgroundColor:Colors.orange,
flex:1,
marginTop:width * 0.05
},
selectCar:{
marginTop:width * 0.035,
backgroundColor:'#f5f5f5',
width:width * 0.45,
alignSelf:'flex-end',
marginRight:width * 0.09,
paddingLeft:width * 0.05,
paddingTop:width * 0.01,
paddingBottom:width * 0.01,
borderRadius:50,
},
car:{
flexDirection:'row',
alignItems:'center',
padding:20,
justifyContent:'space-between',
backgroundColor:'#f5f5f5',
width:width * 0.75,
marginTop:width * 0.05,
marginLeft:width * 0.1,
borderRadius:10
},
getcar:{
alignSelf:'flex-end'
},
carro:{
flexDirection:'row-reverse',
alignItems:'center',
padding:20,
borderWidth:0.55,
backgroundColor:'#4c4cff',
borderColor:'#ccc',
width:width * 0.85,
borderTopRightRadius:50,
borderBottomRightRadius:50,
marginLeft:20,
marginTop:width * 0.1,
},
textoName:{
fontSize:width * 0.040,
marginLeft:10,
color:'#000',
fontFamily:'OpenSans-Regular'
},
textTitle:{
fontWeight:'bold',
fontSize:width * 0.02,
textAlign:'center',
fontSize:width * 0.06,
color:'#fff',
fontFamily: 'OpenSans-Bold'
},
ViewTextTitle:{
padding:15,
backgroundColor:'#fdca01'
}


  
});

export default Marcas;
