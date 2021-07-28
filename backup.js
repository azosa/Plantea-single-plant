import React from "react";
import { Dimensions,StyleSheet, Text, View,Image, SafeAreaView,StatusBar, Platform,Button,TouchableOpacity,ScrollView} from "react-native";

export default function App() {  
  const windowHeight = Dimensions.get('window').height;
  const { height } = Dimensions.get("screen");
   function _onPressButton(){
        alert('You tapped the button!')
      }
      function _onPressFav(){
        alert('You tapped the button!')
      }
    return ( 

       <View style={[styles.container,{ flexGrow: 1,}]}> 
     
        {/* name image section */}
        <View style={{position:'relative',height:'40%',flex:3}}>

        <Image style={styles.img} source={{uri: 'https://image.freepik.com/free-vector/isometric-hiring-process_52683-44138.jpg'}} />

        <View style={styles.box}>

        <Text style={{...padding(5, 10, 5, 10),textAlign:'center',fontWeight:'bold', fontSize:50,color:'#6C7741',flex:3}}>Areka</Text>


        <View style={{
               ...padding(5, 10, 5, 10),...margin(5, 10, 5, 10),
               width:'85%',
            
               alignItems:'center',
               justifyContent:'center',
               backgroundColor:'#FCFFEF',
            borderRadius:32,  
            alignSelf: "center",
    shadowColor: '#202020',
            shadowOffset: {width: 0, height: 0},
            shadowRadius: 5,backgroundColor:'#E1EBB4', height:56,flex:3,borderRadius:12, }}>
        <Text style={{ ...padding(0,10),fontSize:18,color:'#6C7741', fontStyle:'italic',textAlign:'center'}}>Areca - Chrysalidocarpus Lutescens</Text>
        </View>

       <Image source={{uri:'https://picsum.photos/200/200'}} style={{   ...margin(5, 'auto', 3, 'auto'),flex:1,width:10,height:10}}></Image>
        
        </View>
        
        </View> 
{/* END name image  section */}
{/* button section */}
   <View style = {[styles.buttonContainer,{}]}>  
   <View style={{height:20,width:47}}>
          <Text style={{alignSelf:'center'}}></Text>
        </View>
         <TouchableOpacity onPress={_onPressButton}>
            <Text style = {styles.buttonText}>
             dodaj do ogródka
            </Text>
         </TouchableOpacity>

           <TouchableOpacity onPress={_onPressFav}>
            <Text style = {styles.buttonFav}>
            serce
            </Text>
         </TouchableOpacity>
      </View>
{/* END button section */}
{/* 3 boxes section */}
<View style={[styles.flexCenter,{}]}>
<View style={{display:'flex',flexDirection:"row", justifyContent:'space-around',width:'95%',flex:2}}>


    <View style={[styles.box,{position:'relative',bottom:'auto',backgroundColor:'#FFFFFF',width:'30%',borderRadius:14,}]}>
    <Image source={{uri:'https://picsum.photos/200/200'}} style={{   ...margin(5, 'auto', 3, 'auto'),flex:2,width:'70%',maxHeight:'50%'}}></Image>
    
    <Text style={{...padding(5, 10, 5, 10),textAlign:'center',fontWeight:'bold', fontSize:12,color:'#6C7741',}}>STANOWISKO</Text>

<View style={{
    alignItems:'center',
       justifyContent:'center',
    alignSelf: "center",
     shadowColor: '#202020',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 5,backgroundColor:'#E1EBB4', height:27,borderRadius:12, }}>
<Text style={{ ...padding(0,10),fontSize:10,color:'#6C7741', fontWeight:'bold', textAlign:'center'}}>słoneczne</Text>
    </View>

</View>




<View style={[styles.box,{position:'relative',bottom:'auto',backgroundColor:'#FFFFFF',width:'30%',borderRadius:14,}]}>
    <Image source={{uri:'https://picsum.photos/200/200'}} style={{   ...margin(5, 'auto', 3, 'auto'),flex:2,width:'70%',maxHeight:'50%'}}></Image>
      
    <Text style={{...padding(5, 10, 5, 10),textAlign:'center',fontWeight:'bold', fontSize:12,color:'#6C7741'}}>PODLEWANIE</Text>

<View style={{
    alignItems:'center',
       justifyContent:'center',
    borderRadius:32,  
    alignSelf: "center",
     shadowColor: '#202020',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 5,backgroundColor:'#E1EBB4', height:27,borderRadius:12, }}>
<Text style={{ ...padding(0,10),fontSize:10,color:'#6C7741', fontWeight:'bold', textAlign:'center'}}>2-3 razy w tygodniu</Text>
    </View>

</View>

  <View style={[styles.box,{position:'relative',bottom:'auto',backgroundColor:'#FFFFFF',width:'30%',borderRadius:14, }]}>
  <Image source={{uri:'https://picsum.photos/200/200'}} style={{   ...margin(5, 'auto', 3, 'auto'),flex:2,width:'70%',maxHeight:'50%'}}></Image>
      
    <Text style={{...padding(5, 10, 5, 10),textAlign:'center',fontWeight:'bold', fontSize:12,color:'#6C7741'}}>BEZPIECZNE</Text>

<View style={{
    alignItems:'center',
       justifyContent:'center',
    borderRadius:32,  
    alignSelf: "center",
     shadowColor: '#202020',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 5,backgroundColor:'#E1EBB4', height:27,borderRadius:12, }}>
<Text style={{ ...padding(0,10),fontSize:10,color:'#6C7741', fontWeight:'bold', textAlign:'center'}}>słoneczne</Text>
    </View>

</View>
</View>

  </View>
{/* END 3 boxes section */}

<View style={[styles.flexCenter,{}]}>
  <Text style={styles.title}>WYMAGANIA</Text>
</View>
<View style={[styles.box,{flex:2}]}>

<Text style={{...padding(5, 10, 5, 10),textAlign:'center',fontWeight:'bold', fontSize:50,color:'#6C7741',flex:3}}>Areka</Text>


<View style={{
       ...padding(5, 10, 5, 10),...margin(5, 10, 5, 10),
       width:'85%',
    
       alignItems:'center',
       justifyContent:'center',
       backgroundColor:'#FCFFEF',
    borderRadius:32,  
    alignSelf: "center",

     shadowColor: '#202020',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 5,backgroundColor:'#E1EBB4', height:56,flex:3,borderRadius:12, }}>
<Text style={{ ...padding(0,10),fontSize:18,color:'#6C7741', fontStyle:'italic',textAlign:'center'}}>Areca - Chrysalidocarpus Lutescens</Text>
</View>

<Image source={{uri:'https://picsum.photos/200/200'}} style={{   ...margin(5, 'auto', 3, 'auto'),flex:1,width:10,height:10}}></Image>

</View>  

  
</View> 

   
    );
}


function padding(a, b, c, d) {
    return {
      paddingTop: a,
      paddingRight: b ? b : a,
      paddingBottom: c ? c : a,
      paddingLeft: d ? d : (b ? b : a)
    }
  }
  function margin(a, b, c, d) {
    return {
      marginTop: a,
      marginRight: b ? b : a,
      marginBottom: c ? c : a,
      marginLeft: d ? d : (b ? b : a)
    }
  }
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'stretch',
      position:'relative',
    },
    flexCenter:{
      alignItems:'center',flex:1
    },
    img: {
      height: '90%',
      width:'150%',
      alignItems:'center',
      justifyContent:'center',
      position:'absolute',
      top:0,
      left:'-25%',
      resizeMode: 'cover',
      borderBottomLeftRadius: 360,
      borderBottomRightRadius: 360,
      shadowColor: '#202020',
      shadowOffset: {width: 0, height: 0},
      shadowRadius: 5,
      overflow: "visible",
    
    },
    box:{
   width:'85%',
   height:'45%',
   alignItems:'center',
   justifyContent:'center',
   backgroundColor:'#FCFFEF',
borderRadius:32,  
alignSelf: "center",
position:'absolute',
bottom:0,
elevation: 2,
 shadowColor: '#202020',
shadowOffset: {width: 0, height: 0},
shadowRadius: 5,
    },
 title:{
  fontSize:22,
  fontWeight:'bold',
  color:'#6C7741', 

 },
      buttonContainer:{
          alignItems: 'center',
          flexDirection:'row',
          justifyContent:'space-between',
          width:'100%',
        marginTop:20,

      },
      buttonText:{borderRadius:21,  
          ...padding(12,20,12,20),
          fontSize:14,
          fontWeight:'bold',
          color:'#fff', 
           backgroundColor:'#BBCD71',
          textTransform:"uppercase",
      },
      buttonFav:{
alignSelf:'center',
width:47,
height:47,
elevation: 2,
 shadowColor: '#202020',
shadowOffset: {width: 0, height: 0},
shadowRadius: 50,
borderRadius:50,  
position:'relative',
right:25 , 
backgroundColor:'#FFFFFF'
      }
  })