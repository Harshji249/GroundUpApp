import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import iconSource from "../images/images/search.png";
import CrouselItem from "../components/crouselItem";
import GroundCard from "../components/groundCard";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ConfirmationPage = ({}) => {
  const navigation = useNavigation();
const handleNavigation =()=>{
    navigation.navigate('BottomNavbar')
}
  return (
    <>
      <View style={styles.container}>
        <Image
          style={{ marginTop: 20 }}
          source={require("../images/images/officialLogo2.png")}
        />
        <Image
          style={{ marginTop: 50, marginBottom: 20 }}
          source={require("../images/images/Check.png")}
        />
        <Text style={{ fontSize: 30, fontWeight: "bold", marginBottom: 20 }}>
          Booking Confirmed
        </Text>

        <View style={{height:200, display:"flex", justifyContent:'space-around', marginTop:30}}>
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              width: "70%",
            }}
          >
            <Text style={{fontWeight:"bold"}}>Ground name</Text>
            <Text style={{color:'#4285F4', fontWeight:"bold"}}>Cricket Ground</Text>
          </View>
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              width: "70%",
            }}
          >
            <Text style={{fontWeight:"bold"}}>Booked by</Text>
            <Text style={{color:'#4285F4', fontWeight:"bold"}}>Harsh Sharma</Text>
          </View>
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              width: "70%",
            }}
          >
            <Text style={{fontWeight:"bold"}}>Play Timing</Text>
            <Text style={{color:'#4285F4', fontWeight:"bold"}}>03:00PM - 05:00PM</Text>
          </View>
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              width: "70%",
            }}
          >
            <Text style={{fontWeight:"bold"}}>Code</Text>
            <Text style={{color:'#4285F4', fontWeight:"bold"}}>7856</Text>
          </View>
        </View>
        <View
          style={{ display: "flex", flexDirection: "column", width: "90%" }}
        >
          <TouchableOpacity
            style={[styles.button, { width: "100%", marginTop: 50 }]}
            onPress={handleNavigation}
          >
            <Text style={[styles.buttonText]}>Book Now</Text>
          </TouchableOpacity>
        </View>

      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    top: 50,
  },
  container2: {
    marginTop: 50,
  },
  container3: {
    flex: 1,
    marginTop: 30,
  },
  inputContainer2: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    width: 330,
    marginTop: 10,
    borderWidth: 2,
    borderColor: "#DFDFDF",
    borderRadius: 50,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    marginLeft: 10,
  },
  scrollbar: {
    flexDirection: "row",
    marginTop: 10,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    marginLeft: 10,
    color: "#ABABAB",
  },
  text2: {
    fontSize: 10,
  },
  headText: {
    color: "white",
    fontWeight: "500",
    marginLeft: 20,
    fontSize: 20,
    marginRight: 25,
    marginBottom: 0,
  },
  textContainer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 60,
  },
  addressText: {
    fontSize: 10,
  },
  box: {
    height: 113,
    width: "50%",
    overflow: "hidden",
    borderRadius: 10,
    marginLeft: 5,
    marginRight: 10,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  sideImage: {
    width: 120,
    height: 50,
  },
  button: {
    height: 50,
    backgroundColor: "rgba(255, 197, 0, 1)",
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
});
export default ConfirmationPage;
