import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';

import Snackbar from 'react-native-snackbar';

import {
  Container,
  Header,
  Body,
  Button,
  Card,
  H1,
} from "native-base";

import Icons from "./components/Icons"
const itemArray = new Array(9).fill("empty");
var c = 0;
const App = () => {
  const [ren ,setRen] = useState(false);
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");
  const [gray, setGray] = useState(true);
  const reloadGame = () => { 
    setIsCross(false);
    setWinMessage("");
    itemArray.fill("empty", 0, 9);
    c = 0;
    setRen(false);
    setGray(true);
  }
  const isWinner = (item) => {

    c += item;
    if(itemArray[0] === itemArray[1]
      && itemArray[0] === itemArray[2]
      && itemArray[0] != "empty"){
        setWinMessage (`${itemArray[0]} wins`)
      }
      else if(itemArray[3] === itemArray[4]
        && itemArray[3] === itemArray[5]
        && itemArray[3] != "empty"){
        setWinMessage (`${itemArray[3]} wins`)
      }
      else if(itemArray[6] === itemArray[7]
        && itemArray[6] === itemArray[8]
        && itemArray[6] != "empty"){
        setWinMessage (`${itemArray[6]} wins`)
      }
      else if(itemArray[0] === itemArray[3]
        && itemArray[3] === itemArray[6]
        && itemArray[0] != "empty"){
        setWinMessage (`${itemArray[0]} wins`)
      }
      else if(itemArray[1] === itemArray[4]
        && itemArray[4] === itemArray[7]
        && itemArray[1] != "empty"){
        setWinMessage (`${itemArray[1]} wins`)
      }
      else if(itemArray[2] === itemArray[5]
        && itemArray[5] === itemArray[8]
        && itemArray[2] != "empty"){
        setWinMessage (`${itemArray[2]} wins`)
      }
      else if(itemArray[0] === itemArray[4]
        && itemArray[0] === itemArray[8]
        && itemArray[0] != "empty"){
        setWinMessage (`${itemArray[0]} wins`)
      }
      else if(itemArray[2] === itemArray[4]
        && itemArray[2] === itemArray[6]
        && itemArray[2] != "empty"){
        setWinMessage (`${itemArray[2]} wins`)
      }
      if(c === 36){
        console.log(c);
        setWinMessage("No winner")
      }

  };

  const circleFirst = () => {
    setIsCross(false);
    setRen(true);
    setGray(false);
  }
  const crossFirst = () => {
    setIsCross(true);
    setRen(true);
    setGray(false);
  }

  const changeItem = (itemNumber) => {
    if(winMessage) {
      return Snackbar.show({
      text: 'Winner is Declared',
      duration: Snackbar.LENGTH_SHORT,
    });
    }
 
    if(itemArray[itemNumber] === "empty"){
      itemArray[itemNumber] = isCross ? 'cross' : 'circle';
      setIsCross(!isCross);
    }

    else Snackbar.show({
      text: "Item alredy filled",
      duration: Snackbar.LENGTH_SHORT,
    });

    isWinner(itemNumber);
  
  }
  return (
    <Container style = {{backgroundColor: "#87cefa"}}>
      <Header transparent>
        <Body>
          <Text style ={{alignSelf: "center", fontSize: 25, color: "#2B3436"}}>TicTacToe</Text>
        </Body>  
      </Header>

      {gray ? (
        <View>
          <Button rounded warning block style = {{marginTop: 10, width: "96%", alignSelf: "center"}} onPress = {circleFirst}>
            <Text style= {{color: "#F25751", fontSize: 20, fontFamily: "monospace"}}>Circle</Text>
          </Button>
          <Button rounded warning block style = {{marginTop: 10, width: "96%", alignSelf: "center"}} onPress = {crossFirst}>
            <Text style= {{color: "#F25751", fontSize: 20, fontFamily: "monospace"}}>Cross</Text>
          </Button>
        </View>
      ) : (
        <View>
          <Button rounded disabled block style = {{marginTop: 10, width: "96%", alignSelf: "center"}} onPress = {circleFirst}>
            <Text style= {{color: "#535C68", fontSize: 20, fontFamily: "monospace"}}>Circle</Text>
          </Button>
          <Button rounded disabled block style = {{marginTop: 10, width: "96%", alignSelf: "center"}} onPress = {crossFirst}>
            <Text style= {{color: "#535C68", fontSize: 20, fontFamily: "monospace"}}>Cross</Text>
          </Button>
        </View>
      )}
 
      {ren ? (
        <View>
          {winMessage ? (
            <View>
              <H1 style = {{color: "#C71585", alignSelf : "center", fontFamily: "monospace", fontSize: 30, marginTop: 20}}>
                {winMessage}
              </H1>
                <Button rounded danger block style = {{marginTop: 10, width: "96%", alignSelf: "center"}} onPress = {reloadGame}>
                  <Text>Reload</Text>
                </Button>
            </View>           
          ): (
            <H1 style = {{color: "#812B6E", alignSelf : "center", fontFamily: "monospace", fontSize: 30, marginTop: 20}}>{isCross ? "cross" : "circle"} turns</H1>
          ) }
          <View style = {styles.grid}>
            {itemArray.map ((item, index) => (
              <TouchableOpacity 
              key = {index}
              style = {styles.box}
              onPress = {() => changeItem(index)}
              >
                <Card style = {styles.card}>
                  <Icons name = {item}/>
                </Card>
              </TouchableOpacity>
          ))}
          </View>
        </View>
      ): (<View style= {{alignSelf: "center", marginTop: 10}}><H1 style = {{color: "#812B6E"}}>Select circle or cross</H1></View>) }
    </Container>
  )
}

const styles = StyleSheet.create ({
  grid: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 50
  },
  box: {
    width: "33%",
  },
  card: {
    height: 120,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#812B6E"
  },
  text: {
    alignItems: "center", 
    justifyContent: "center",
    marginTop: 30,
    alignSelf: "center",
    width: "26%",
    paddingTop: 10,
    paddingRight: 10,
    backgroundColor: "red",
    borderRadius: 10,
  }
})

export default App;