import React, {useState} from "react";
import {Dimensions,StyleSheet, Text, View,Image,Alert, Platform,TouchableOpacity,ScrollView,Modal,Button} from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import CheckBox from '@react-native-community/checkbox';

export default function App() {  
  
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(true);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const windowHeight = Dimensions.get('window').height;
  const { height } = Dimensions.get("screen");
  function _onAddButton(){
   Alert.alert('Wybierz grupę','',[
{text:"Dom"},
{text:"Praca"}
   ])
  }
   function _onPressButton(){
        alert('You tapped the button!')
      }
      function _onSelectButton(){
        alert('You tapped the button!')
      }
      function _onPressFav(){
        alert('You tapped the button!')
      }
     function openModal1(id) {
        this.refs.modal1.open();
      }
    return ( 
  <View style={{}}>
      <View 
      style={{position:'absolute',zIndex: 1,elevation: 3,top:0,bottom:0,left:0,right:0, 
      flex:1,height:380,
    }}>

      <Image style={[styles.img,{position:'absolute',top:0}]} source={require('./img/Chrysalidocarpus-lutescens-Areca-Palm.png')} />

      <View style={[styles.box,{position:'absolute',bottom:0}]}>

      <Text style={{...padding(5, 10, 5, 10),textAlign:'center',fontWeight:'bold', fontSize:47,color:'#6C7741',flex:3}}>Areka</Text>


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

     <Image source={require('./img/Icon_down.png')} style={{   ...margin(5, 'auto', 3, 'auto'),flex:1,width:20,height:10,resizeMode: 'contain'}}></Image>
      
      </View>
      </View>

<ScrollView style={{}}>
       <View style={[styles.container,{ flexGrow: 1, height:'100%',marginTop:380}]}> 
     
     
{/* button section */}
   <View style = {[styles.buttonContainer,{height:70}]}>  
   <View style={{height:20,width:47}}>
          <Text style={{alignSelf:'center'}}></Text>
        </View>
         <TouchableOpacity onPress={_onAddButton}>
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
<View style={[styles.flexCenter,{height:200,marginTop:40}]}>
<View style={{display:'flex',flexDirection:"row", justifyContent:'space-around',width:'95%',flex:1,}}>


    <View style={[styles.box,{position:'relative',backgroundColor:'#FFFFFF',width:'30%',height:'100%',borderRadius:14,}]}>
    <Image source={require('./img/Icon_sun.png')} style={{...margin(5, 'auto', 3, 'auto'),flex:2,width:'70%',maxWidth:'100%',maxHeight:'40%',resizeMode: 'contain'}}></Image>
    
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




<View style={[styles.box,{position:'relative',bottom:'auto',backgroundColor:'#FFFFFF',width:'30%',height:'100%',borderRadius:14,}]}>
    <Image source={require('./img/Icon_water.png')} style={{...margin(5, 'auto', 3, 'auto'),flex:2,width:'70%',maxWidth:'100%',maxHeight:'40%',resizeMode: 'contain'}}></Image>
     
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

  <View style={[styles.box,{position:'relative',bottom:'auto',backgroundColor:'#FFFFFF',width:'30%',height:'100%',borderRadius:14, }]}>
  <Image source={require('./img/Icon_cat.png')} style={{...margin(5, 'auto', 3, 'auto'),flex:2,width:'70%',maxWidth:'100%',maxHeight:'40%',resizeMode: 'contain'}}></Image>
      
    <Text style={{...padding(5, 10, 5, 10),textAlign:'center',fontWeight:'bold', fontSize:12,color:'#6C7741'}}>BEZPIECZNE</Text>


  <Image source={require('./img/Icon_check.png')} style={{   ...margin(5, 'auto', 3, 'auto'),maxHeight:'10%',resizeMode: 'contain'}}></Image>
      
 

</View>
</View>

  </View>
{/* END 3 boxes section */}

<View style={[styles.flexCenter,{flex:1,marginTop:40}]}>
  <Text style={styles.title}>WYMAGANIA</Text>
</View>
<View style={[styles.box,{flex:2, ...padding(20, 20),}]}>

<View style={{
     alignItems:'center',
       justifyContent:'center',
       backgroundColor:'#E8EFC9',
    borderRadius:32,  
    alignSelf: "center",
     shadowColor: '#202020',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 5,backgroundColor:'#E1EBB4', flex:3,borderRadius:12, }}>
<Text style={{ ...padding(20,20),fontSize:18,color:'#6C7741',textAlign:'center'}}>Zaleca się podlewać 2-3 razy w tygodniu Podłoże w doniczce powinno być cały czas wilgotne. Aby zachować dobrą formę palmy, zaleca się stosowanie nawozu raz w miesiącu, w okresie letnim.</Text>
</View>

</View>  

  {/* button section */}
  <View style={[styles.flexCenter,{flex:1,marginTop:20}]}>
  <TouchableOpacity onPress={_onPressButton} style = {[styles.buttonContainer,{flex:1,height:47, width:'85%',backgroundColor:'#fff',justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:'#6C7741',borderRadius:50,  }]}>  
  
            <Text style = {[{width:200,fontSize:20,color:'#6C7741',textAlign:'center'}]}>
           Nawożenie
            </Text>  
     
         </TouchableOpacity>

    
      </View>
{/* END button section */}
  {/* button section */}
  <View style={[styles.flexCenter,{flex:1}]}>
  <TouchableOpacity onPress={_onPressButton} style = {[styles.buttonContainer,{flex:1,height:47, width:'85%',backgroundColor:'#fff',justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:'#6C7741',borderRadius:50,  }]}>  
 
            <Text style = {[{width:200,fontSize:20,color:'#6C7741',textAlign:'center'}]}>
       Zraszanie
            </Text>
         </TouchableOpacity>

  
      </View>
{/* END button section */}
  {/* button section */}
  <View style={[styles.flexCenter,{flex:1}]}>
  <TouchableOpacity onPress={_onPressButton} style = {[styles.buttonContainer,{flex:1,height:47, width:'85%',backgroundColor:'#fff',justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:'#6C7741',borderRadius:50,  }]}>  
   
            <Text style = {[{width:200,fontSize:20,color:'#6C7741',textAlign:'center'}]}>
      Szkodniki
            </Text>
         </TouchableOpacity>

      
      </View>
{/* END button section */}
</View> 
<View style={[styles.flexCenter,{flex:1,marginTop:40}]}>
  <Text style={styles.title}>PLANOWANIE PIELĘGNACJI</Text>
</View>

<View style={[{marginLeft:20,flex:1,marginTop:20}]}>
  <Text style={[styles.title,{fontWeight:'400',fontSize:20,textAlign:'left'}]}>PODLEWANIE</Text>
  <Text style={[styles.title,{fontWeight:'400',fontSize:12,textAlign:'left'}]}>zaznacz kiedy chcesz podlewać swoją roślinę</Text>
</View>


{/* BTNS */}
<View style={[styles.flexCenter,{flex:1,flexDirection:'row',marginLeft:20,}]}>
<TouchableOpacity style = {styles.daysButtons}>  
   
   <Text style = {styles.daysButtonsText}>
PON
   </Text>
</TouchableOpacity>
<TouchableOpacity style = {styles.daysButtons}>  
   
   <Text style = {styles.daysButtonsText}>
WT
   </Text>
</TouchableOpacity>
<TouchableOpacity style = {styles.daysButtons}>  
   
   <Text style = {styles.daysButtonsText}>
ŚR
   </Text>
</TouchableOpacity>
<TouchableOpacity style = {styles.daysButtons}>  
   <Text style = {styles.daysButtonsText}>
CZW
   </Text>
</TouchableOpacity>
<TouchableOpacity style = {styles.daysButtons}>  
   
   <Text style = {styles.daysButtonsText}>
PT
   </Text>
</TouchableOpacity>
<TouchableOpacity style = {styles.daysButtons}>  
   
   <Text style = {styles.daysButtonsText}>
SB
   </Text>
</TouchableOpacity>
<TouchableOpacity style = {styles.daysButtons}>  
   
   <Text style = {styles.daysButtonsText}>
ND
   </Text>
</TouchableOpacity>

<View  style = {[styles.daysButtons,{width:100}]}>  
   
   <TouchableOpacity onPress={showTimepicker} style={[styles.daysButtonsText,{width:100,fontSize:10}]}>
   <Text style={[styles.daysButtonsText,{width:100,fontSize:10}]}>18:00   </Text>
{show && (     
        <DateTimePicker
        style={[styles.daysButtonsText,{width:100,fontSize:10}]}
          value={date}
          mode={mode}
          onChange={onChange}
        />
      )}
  
</TouchableOpacity>
</View>
</View>
{/* END BTNS */}

<View style={[{marginLeft:20,flex:1,marginTop:20}]}>
  <Text style={[styles.title,{fontWeight:'400',fontSize:20,textAlign:'left'}]}>ZRASZANIE</Text>
  <Text style={[styles.title,{fontWeight:'400',fontSize:12,textAlign:'left'}]}>zaznacz kiedy zraszać swoją roślinę</Text>
</View>


{/* BTNS */}
<View style={[styles.flexCenter,{flex:1,flexDirection:'row',marginLeft:20,}]}>
<TouchableOpacity style = {styles.daysButtons}>  
   
   <Text style = {styles.daysButtonsText}>
PON
   </Text>
</TouchableOpacity>
<TouchableOpacity style = {styles.daysButtons}>  
   
   <Text style = {styles.daysButtonsText}>
WT
   </Text>
</TouchableOpacity>
<TouchableOpacity style = {styles.daysButtons}>  
   
   <Text style = {styles.daysButtonsText}>
ŚR
   </Text>
</TouchableOpacity>
<TouchableOpacity style = {styles.daysButtons}>  
   <Text style = {styles.daysButtonsText}>
CZW
   </Text>
</TouchableOpacity>
<TouchableOpacity style = {styles.daysButtons}>  
   
   <Text style = {styles.daysButtonsText}>
PT
   </Text>
</TouchableOpacity>
<TouchableOpacity style = {styles.daysButtons}>  
   
   <Text style = {styles.daysButtonsText}>
SB
   </Text>
</TouchableOpacity>
<TouchableOpacity style = {styles.daysButtons}>  
   
   <Text style = {styles.daysButtonsText}>
ND
   </Text>
</TouchableOpacity>

<View  style = {[styles.daysButtons,{width:100}]}>  
   
   <TouchableOpacity onPress={showTimepicker} style={[styles.daysButtonsText,{width:100,fontSize:10}]}>
   <Text style={[styles.daysButtonsText,{width:100,fontSize:10}]}>18:00   </Text>
{show && (     
        <DateTimePicker
        style={[styles.daysButtonsText,{width:100,fontSize:10}]}
          value={date}
          mode={mode}
          onChange={onChange}
        />
      )}
  
</TouchableOpacity>
</View>
</View>
{/* END BTNS */}





<View style={[{marginLeft:20,flex:1,marginTop:20}]}>
  <Text style={[styles.title,{fontWeight:'400',fontSize:20,textAlign:'left'}]}>NAWOŻENIE</Text>
  <Text style={[styles.title,{fontWeight:'400',fontSize:12,textAlign:'left'}]}>Wybierz datę najbliższego nawożenia. Tego dnia aplikacja przypomni Ci o tej czynności oraz będziesz miał możliwość ustawić datę kolejnego nawożenia.</Text>
</View>

<View style={[styles.flexCenter,{flex:1,flexDirection:'row',marginLeft:20,}]}>
<TouchableOpacity  onPress={showDatepicker}  style = {[styles.daysButtons,{width:150}]}>  
   
   <Text style = {[styles.daysButtonsText,{width:150,fontSize:12}]}>
DD-MM-YYYY
   </Text>{show && (     
        <DateTimePicker
        style={[styles.daysButtonsText,{width:100,fontSize:10}]}
          value={date}
          mode={mode}
          onChange={onChange}
        />
      )}
  
</TouchableOpacity>
</View>




<View style={[styles.flexCenter,{marginTop:40}]}>
  <Text style={styles.title}>GALERIA</Text>
</View>
<View style={{alignItems:'center',width:'100%'}}>
<View style={{ flexDirection:'row', flexWrap:'wrap',justifyContent:'center',alignContent:'center'}}>
<Image source={require('./img/Areca1.jpg')}  style={styles.galleryImage}></Image>
<Image source={require('./img/Areca3.png')} style={styles.galleryImage}></Image>
<Image source={require('./img/Areca4.png')}  style={styles.galleryImage}></Image>
<Image source={require('./img/Areca2.jpg')}  style={styles.galleryImage}></Image>   
</View>
</View>



   </ScrollView></View>
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

elevation: 2,
 shadowColor: '#202020',
shadowOffset: {width: 0, height: 0},
shadowRadius: 5,
    },
 title:{
  fontSize:22,height:50,
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
      },
      daysButtons:{
        height:40, width:33,backgroundColor: '#fff',justifyContent:'center',alignItems:'center',
        borderRadius:13, elevation: 2,
        shadowColor: '#202020',
        shadowOffset: {width: 0, height: 0},
        shadowRadius: 5, marginLeft:10
      },
      daysButtonsText:{
        width:33,fontSize:8,color:'#6C7741',textAlign:'center'
      },
      galleryImage:{
        ...margin(10),
        height:200,
        width:'45%'
      }
  })


