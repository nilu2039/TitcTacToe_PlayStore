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

var c = 0;
var iter = 0;
var d = 0;
const itemArray = new Array(9).fill("empty")
const App = () => {
  const [ren ,setRen] = useState(false);
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");
  const [gray, setGray] = useState(true);
  const [ai, setAi] = useState(false);
  const [selectMode, setSelectMode] = useState(true);
  const [board, setBoard] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  //const [itemArray, setItemArray] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const boardCopy = new Array(9).fill("empty");
  const [tie , setTie] = useState(0);
  var huPlayer = "circle";
  var aiPlayer = "cross";

  const reloadGame = () => { 
    setIsCross(false);
    setWinMessage("");
    itemArray.fill("empty", 0, 9);
    setBoard([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    setTie(0)
    c = 0;
    setRen(false);
    setGray(true);
    setAi(false);
    setSelectMode(true)
  }
  const isWinnerPlayerVsPlayer = (item) => {
    d += item;
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
      if(d === 36){
        console.log(c);
        setWinMessage("No winner")
      }

  };
  const isWinner = (hulu) => {

    if(board[0] === board[1]
      && board[0] === board[2]
      && board[0] != "empty"){
        setWinMessage (`${board[0]} wins`)
      }
      else if(board[3] === board[4]
        && board[3] === board[5]
        && board[3] != "empty"){
        setWinMessage (`${board[3]} wins`)
      }
      else if(board[6] === board[7]
        && board[6] === board[8]
        && board[6] != "empty"){
        setWinMessage (`${board[6]} wins`)
      }
      else if(board[0] === board[3]
        && board[3] === board[6]
        && board[0] != "empty"){
        setWinMessage (`${board[0]} wins`)
      }
      else if(board[1] === board[4]
        && board[4] === board[7]
        && board[1] != "empty"){
        setWinMessage (`${board[1]} wins`)
      }
      else if(board[2] === board[5]
        && board[5] === board[8]
        && board[2] != "empty"){
        setWinMessage (`${board[2]} wins`)
      }
      else if(board[0] === board[4]
        && board[0] === board[8]
        && board[0] != "empty"){
        setWinMessage (`${board[0]} wins`)
      }
      else if(board[2] === board[4]
        && board[2] === board[6]
        && board[2] != "empty"){
        setWinMessage (`${board[2]} wins`)
      }
      if(hulu == 36){
        console.log(c);
        setWinMessage("No winner")
      }

  };

  const isWinnerCopy = (item, board, player) => {

    //c += item;
    if (
      (board[0] == player && board[1] == player && board[2] == player) ||
      (board[3] == player && board[4] == player && board[5] == player) ||
      (board[6] == player && board[7] == player && board[8] == player) ||
      (board[0] == player && board[3] == player && board[6] == player) ||
      (board[1] == player && board[4] == player && board[7] == player) ||
      (board[2] == player && board[5] == player && board[8] == player) ||
      (board[0] == player && board[4] == player && board[8] == player) ||
      (board[2] == player && board[4] == player && board[6] == player)
    ) {
      return true;
    } else {
      return false;
    }
    
    /*if(c === 36){
      console.log(c);
      setWinMessage("No winner")
    }*/

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
      console.log("Working");
      itemArray[itemNumber] = isCross ? 'cross' : 'circle';
      console.log(itemArray);
      setIsCross(!isCross);
    }

    else Snackbar.show({
      text: "Item alredy filled",
      duration: Snackbar.LENGTH_SHORT,
    });

    isWinnerPlayerVsPlayer(itemNumber);
  
  }
  const modePlayer = () => {
    setAi(false);
    setSelectMode(false)
  }
  const modeComputer = () => {
    setAi(true);
    setSelectMode(false)
  }
  const changeItem_ai = (itemNumber) => {
    if(winMessage) {
      return Snackbar.show({
      text: 'Winner is Declared',
      duration: Snackbar.LENGTH_SHORT,
    });
    }
 
    if(board[itemNumber] != "circle" && board[itemNumber] != "cross"){
      if(!isCross) {
        board[itemNumber] = 'circle';
      
        //itemArray[itemNumber] = 'circle'
        //setItemArray([...board])
        var index = minimax(board, aiPlayer).index
       
        //itemArray[index] = "cross"
        board[index] = "cross"
        console.log(index);
        //setItemArray([...board])
        
      } else {
        board[itemNumber] = 'cross';
        
        //itemArray[itemNumber] = 'cross'
        //setItemArray([...board])
        var index = minimax(board, huPlayer).index
      
        //itemArray[index] = "circle"
        board[index] = "circle"
        //console.log(index);
        //setItemArray([...board])
      
      }
    }
    else Snackbar.show({
      text: "Item alredy filled",
      duration: Snackbar.LENGTH_SHORT,
    });

  setTie(tie + itemNumber + index)
  if(typeof index !== 'undefined' && typeof itemNumber !== 'undefined') {

    console.log(itemNumber);
    console.log(index);
    c = c + itemNumber + index;
  } else if (typeof index == 'undefined') {
    c = c + itemNumber;
  } else if (typeof itemNumber == 'undefined') {
    c = c + index;
  }
  console.log(c);
  isWinner(c)
  }

  const minimax = (reboard, player, itemNumber) => {
    iter++;
    let array = avail(reboard);
    if(isWinnerCopy(itemNumber, reboard, aiPlayer) ) {
      return {score: 10}
    } else if (isWinnerCopy(itemNumber, reboard, huPlayer) ) {
      return {score: -10}
    }
    else if (array.length === 0) {
      return {score: 0}
    }
    var moves = [];
    for(var i = 0; i < array.length; i++) {
      var move = {};
      move.index = reboard[array[i]];
      reboard[array[i]] = player;
      if(player == aiPlayer) {
        var g = minimax(reboard, huPlayer);
        move.score = g.score
      } else {
        var g = minimax(reboard, aiPlayer)
        move.score = g.score
      }
      reboard[array[i]] = move.index;
      moves.push(move);
    }
    var bestMove;
    if(player == aiPlayer) {
      var bestScore = -10000;
      for (var i = 0; i < moves.length; i++) {
        if(moves[i].score > bestScore) {
          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    } else {
      var bestScore = 10000;
      for (var i = 0; i < moves.length; i++) {
        if (moves[i].score < bestScore) {
          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    }
    return moves[bestMove];
  }

  const avail = (reboard) => {
    return reboard.filter(s => s!= "circle" && s != "cross")
  }
  return (
    <Container style = {{backgroundColor: "#87cefa"}}>
      <Header transparent>
        <Body>
          <Text style ={{alignSelf: "center", fontSize: 25, color: "#2B3436"}}>TicTacToe</Text>
        </Body>  
      </Header>
      {selectMode ? (
        <>
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
              <Button rounded  success block style = {{marginTop: 10, width: "96%", alignSelf: "center"}} onPress = {modePlayer}>
                <Text style= {{color: "#535C68", fontSize: 20, fontFamily: "monospace"}}>Player v Player </Text>
              </Button>
              <Button rounded warning block style = {{marginTop: 10, width: "96%", alignSelf: "center"}} onPress = {modeComputer}>
                <Text style= {{color: "#535C68", fontSize: 20, fontFamily: "monospace"}}>Player v Computer</Text>
              </Button>
            </View>
          )}
        </>
      ) : (
        <>
          
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
          ) : (
            <H1 style = {{color: "#812B6E", alignSelf : "center", fontFamily: "monospace", fontSize: 30, marginTop: 20}}>{isCross ? "cross" : "circle"} turns</H1>
          ) }
          {ai ? (
            <>
              <View style = {styles.grid}>
                {board.map ((item, index) => (
                  <TouchableOpacity 
                  key = {index}
                  style = {styles.box}
                  onPress = {() => changeItem_ai(index)}
                  >
                    <Card style = {styles.card}>
                      <Icons name = {item}/>
                    </Card>
                  </TouchableOpacity>
                ))}
              </View>
            </>
          ) : (
            <>
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
            </>
          )}
        </View>
      ): (<View style= {{alignSelf: "center", marginTop: 10}}><H1 style = {{color: "#812B6E"}}>Select circle or cross</H1></View>) }
        </>
      )}
      
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