import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableHighlight, ActionSheetIOS, Button, AsyncStorage } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function _storeData(key, output) {
  try {
      AsyncStorage.setItem(
      key,
      output
    );
    return output;
  } catch (error) {
    // Error saving data
  }
};

function _retrieveData(key) {
  try {
    const value = AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
  } catch (error) {
    // Error retrieving data
  }
};

// homescreen
function HomeScreen({ navigation, route }) {
  React.useEffect(() => {

  }, [route.params?.post]);;

  return (
      <View style={styles.container}>
        <View>
          <Text style={{marginLeft:30, marginTop:30, fontSize:40, fontWeight:"bold", color:"#d3d3d3"}}>Alex's Mood</Text>
          <Text style={{marginLeft:30, marginBottom:30, fontSize:35, color:"#d3d3d3"}}>July 2022</Text>
        </View>
        <StatusBar style="auto" />
        <View style={{flexDirection:"row"}}>
          <Day dayNum={-1} nav={navigation}/>
          <Day dayNum={-1} nav={navigation}/>
          <Day dayNum={-1} nav={navigation}/>
          <Day dayNum={-1} nav={navigation}/>
          <Day dayNum={-1} nav={navigation}/>
          <Day dayNum={1} nav={navigation}/>
          <Day dayNum={2} nav={navigation}/>
        </View>
        <View style={{flexDirection:"row"}}>
          <Day dayNum={3} nav={navigation}/>
          <Day dayNum={4} nav={navigation}/>
          <Day dayNum={5} nav={navigation}/>
          <Day dayNum={6} nav={navigation}/>
          <Day dayNum={7} nav={navigation}/>
          <Day dayNum={8} nav={navigation}/>
          <Day dayNum={9} nav={navigation}/>
        </View>
        <View style={{flexDirection:"row"}}>
          <Day dayNum={10} nav={navigation}/>
          <Day dayNum={11} nav={navigation}/>
          <Day dayNum={12} nav={navigation}/>
          <Day dayNum={13} nav={navigation}/>
          <Day dayNum={14} nav={navigation}/>
          <Day dayNum={15} nav={navigation}/>
          <Day dayNum={16} nav={navigation}/>
        </View>
        <View style={{flexDirection:"row"}}>
          <Day dayNum={17} nav={navigation}/>
          <Day dayNum={18} nav={navigation}/>
          <Day dayNum={19} nav={navigation}/>
          <Day dayNum={20} nav={navigation}/>
          <Day dayNum={21} nav={navigation}/>
          <Day dayNum={22} nav={navigation}/>
          <Day dayNum={23} nav={navigation}/>
        </View>
        <View style={{flexDirection:"row"}}>
          <Day dayNum={24} nav={navigation}/>
          <Day dayNum={25} nav={navigation}/>
          <Day dayNum={26} nav={navigation}/>
          <Day dayNum={27} nav={navigation}/>
          <Day dayNum={28} nav={navigation}/>
          <Day dayNum={29} nav={navigation}/>
          <Day dayNum={30} nav={navigation}/>
        </View>
        <View style={{flexDirection:"row"}}>
          <Day dayNum={31} nav={navigation}/>
          <Day dayNum={-1} nav={navigation}/>
          <Day dayNum={-1} nav={navigation}/>
          <Day dayNum={-1} nav={navigation}/>
          <Day dayNum={-1} nav={navigation}/>
          <Day dayNum={-1} nav={navigation}/>
          <Day dayNum={-1} nav={navigation}/>
        </View>
      </View>
  );
}

function DetailsScreen({route, navigation }) {
  const {dayNum, moodState} = route.params;
  const[returnMoodState, setReturnMoodState] = useState(moodState);
  const[detailsBackgroundColor, setDetailsBackgroundColor] = useState(getStyleColor(dayNum, returnMoodState));

  return (
    <View style={[styles.container, {backgroundColor:detailsBackgroundColor}]}>
      <View>
        <Text style={{marginLeft:30, marginTop:30, fontSize:33, fontWeight:"bold", color:"#d3d3d3"}}>How are you feeling today?</Text>
        <Text style={{marginLeft:30, marginBottom:0, fontSize:33, color:"#d3d3d3"}}>July {dayNum}, 2022</Text>
      </View>
      <View>
        <Text style={{marginTop:200, fontSize:30, marginLeft:155, color:"#d3d3d3"}}>{getMoodStateText(returnMoodState)}</Text>
      </View>
      <View style={{flexDirection:"row", marginLeft:18, marginTop:150}}>
        <TouchableHighlight onPress={() => [setReturnMoodState(0),setDetailsBackgroundColor("#C20018")]}>
          <View style={{width:33, height:33, backgroundColor:"#d3d3d3", marginLeft:15}}></View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => [setReturnMoodState(1),setDetailsBackgroundColor("#DC3B37")]}>
          <View style={{width:33, height:33, backgroundColor:"#d3d3d3", marginLeft:15}}></View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => [setReturnMoodState(2),setDetailsBackgroundColor("#F57656")]}>
          <View style={{width:33, height:33, backgroundColor:"#d3d3d3", marginLeft:15}}></View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => [setReturnMoodState(3),setDetailsBackgroundColor('#586f7c')]}>
          <View style={{width:33, height:33, backgroundColor:"#d3d3d3", marginLeft:15}}></View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => [setReturnMoodState(4),setDetailsBackgroundColor("#80DD91")]}>
          <View style={{width:33, height:33, backgroundColor:"#d3d3d3", marginLeft:15}}></View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => [setReturnMoodState(5),setDetailsBackgroundColor("#40BB75")]}>
          <View style={{width:33, height:33, backgroundColor:"#d3d3d3", marginLeft:15}}></View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => [setReturnMoodState(6),setDetailsBackgroundColor("#28A264")]}>
          <View style={{width:33, height:33, backgroundColor:"#d3d3d3", marginLeft:15}}></View>
        </TouchableHighlight>
      </View>
      <Button
        title="Done"
        onPress={() => {
          navigation.goBack({
            dayNum: dayNum,
            moodState: returnMoodState,
            merge: true,
          })
        }}/>

    </View>
  );
}

function getStyleColor(dayInt, moodInt){
  if(parseInt(dayInt) == -1){
    return '#586f7c';
  }
  else{
    switch(parseInt(moodInt)){
      case 0:
        return "#C20018";
      case 1:
        return "#DC3B37";
      case 2:
        return "#F57656";
      case 3:
        return '#586f7c';
      case 4:
        return "#80DD91";
      case 5:
        return "#40BB75";
      case 6:
        return "#28A264";
      default:
        return 'white'
    }
  } 
}

const CustomButton = (props) => {
  const onPress = () => setReturnMoodState(props.moodVal);
  //const onPress = () => getMoodStateText(props.moodVal);
  return(
    <TouchableHighlight onPress={onPress}>
      <View style={{width:33, height:33, backgroundColor:"#d3d3d3", marginLeft:15}}></View>
    </TouchableHighlight>
  );
}

function getMoodStateText(moodState){
  switch(parseInt(moodState)){
    case 0:
      return "Terrible";
    case 1:
      return "Bad";
    case 2:
      return "Eh";
    case 3:
      return "Neutral";
    case 4:
      return "Okay";
    case 5:
      return "Pretty Good";
    case 6:
      return "Amazing";
    default:
      return 'bruh moment';
  }
}

const Stack = createNativeStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Mood" 
          component={HomeScreen}
          options ={{
            headerStyle: {
              backgroundColor:'#586f7c',
            },
            headerTintColor: "#d3d3d3",
          }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
} 

const Day = (props) => {
  //const random = Math.random() * 6;
  const[isEnabled, setIsEnabled] = useState(getEnabled(props.dayNum)); // checks if the dayNum is -1, is enabled if not -1
  const[moodState, setMoodState] = useState(3); // mood value, 0 is bad day, 6 is good, 3 is middle
  const[bColor, setBColor] = useState(getColor(props.dayNum, moodState)); // background color of tile
  const[numString, setNumString] = useState(getNumString(isEnabled,props.dayNum)) // 
  const[lMargin, setLMargin] = useState(getLeftMargin(props.dayNum));
  const onPress = () => props.nav.navigate('Details', {
    dayNum: props.dayNum,
    moodState: moodState,
  });

  if(!isEnabled){
    return(
      <View style={styles.dayHidden}></View>
    )
  }
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={[styles.day, {backgroundColor:bColor}]}>
        <Text style={[{marginLeft:lMargin},styles.dayText]}>{numString}</Text>
      </View>
    </TouchableHighlight>
  )
}

function getNumString(isEnabled, dayNum){
  if(isEnabled){
    return dayNum;
  }
  else{
    return "";
  }
}

function getEnabled(DayNum){
  if(DayNum == -1){
    return false;
  }
  else{
    return true;
  }
}

function getLeftMargin(dayInt){
  // if digit is 10 or bigger
  if(parseInt(dayInt) >= 10){
    return 8;
  }
  else{
    return 15;
  }
}

function getColor(dayInt, moodInt){
  if(parseInt(dayInt) == -1){
    return '#d3d3d3';
  }
  else{
    switch(parseInt(moodInt)){
      case 0:
        return "#C20018";
      case 1:
        return "#DC3B37";
      case 2:
        return "#F57656";
      case 3:
        return '#d3d3d3';
      case 4:
        return "#80DD91";
      case 5:
        return "#40BB75";
      case 6:
        return "#28A264";
      default:
        return 'white'
    }
  } 
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#586f7c',
  },
  day:{
    width:56,
    height:56,
    //backgroundColor:'#d3d3d3',
  },
  dayHidden:{
    width:56,
    height:56,
    backgroundColor:'#586f7c',
  },
  dayText:{
    color: 'white',
    fontSize:37,
    fontWeight:'bold',
    fontFamily:'Verdana',
    marginTop:6,
  }
});
