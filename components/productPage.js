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

const ProductPage = ({ route }) => {
  const navigation = useNavigation();
  const [selectedTime, setSelectedTime] = useState(0);
  const { groundDetails } = route.params;

  useEffect(() => {
    console.log("groundDetails ", groundDetails);
  }, []);

  function extractTimeFromDate(dateStr) {
    const date = new Date(dateStr);
    let hours = date.getUTCHours();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = (hours % 12) || 12;
    const minutes = date.getUTCMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes} ${ampm}`;
  }
  
  const handleTimeSelection = (index) => {
    setSelectedTime(index);
  };

  const handleBooking = async () => {
    const user = await AsyncStorage.getItem('user')
    const payload = {
      adminId: groundDetails.admin,
      groundId: groundDetails._id,
      timeSlot: JSON.stringify(groundDetails.timeSlot[selectedTime]),
      userName: JSON.parse(user).name,
      groundName:groundDetails.name,
      image:groundDetails.image
    };
    await axios.post("https://groundup-server.onrender.com/api/ground/bookground", payload, {
      headers: {
        "auth-token": await AsyncStorage.getItem("authToken"),
      },
    }).then((res)=>{
        if(res.status === 200){
            navigation.navigate('ConfirmationPage')
        }
    }).catch((err)=>{
        console.log(err)
    })
    console.log("Payload Check", payload);
  };
  return (
    <>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: groundDetails.image }} />
        <Text style={{ fontSize: 25, margin: 5 }}>{groundDetails.name}</Text>

        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "90%",
          }}
        >
          <Text>Choose Time Slot</Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              width: "100%",
              height: 60,
            }}
          >
            {groundDetails.timeSlot.map((timeSlot, index) => (
              <TouchableOpacity
                key={index}
                style={{
                  width: "30%",
                  height: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: index === selectedTime ? "#4285F4" : "white",
                }}
                onPress={() => handleTimeSelection(index)}
              >
                <Text
                  style={{
                    fontSize:10,
                    color: index === selectedTime ? "white" : "#4285F4",
                  }}
                >
                  {extractTimeFromDate(timeSlot.startTime)}-
                  {extractTimeFromDate(timeSlot.endTime)}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "column",
            width: "90%",
            height: "30%",
          }}
        >
          <Text>About</Text>
          <Text>{groundDetails.description}</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            width: "90%",
            marginTop: 5,
            marginBottom: 10,
          }}
        >
          <Text>Owner Details</Text>
          <Text>{groundDetails.admin}</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            width: "90%",
            height: "8%",
            marginBottom: 5,
          }}
        >
          <Text>Address</Text>
          <Text>{groundDetails.address}</Text>
        </View>

        <View
          style={{ display: "flex", flexDirection: "column", width: "90%" }}
        >
          <TouchableOpacity
            style={[styles.button, { width: "100%", marginTop: 10 }]}
            onPress={handleBooking}
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

  image: {
    width: "90%",
    height: 200,
    borderRadius: 10,
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
export default ProductPage;
