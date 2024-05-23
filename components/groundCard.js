import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
const GroundCard = ({groundDetails}) => {

  const navigation = useNavigation()
function extractTimeFromDate(dateStr) {
  const date = new Date(dateStr);
  let hours = date.getUTCHours();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = (hours % 12) || 12;
  const minutes = date.getUTCMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes} ${ampm}`;
}

  const {name, address, description, timeSlot, image} = groundDetails
  return (
   <>
     <View
            style={[
              styles.box,
              {
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                width: "98%",
                height: 150,
                backgroundColor: "white",
                borderWidth: 2,
                borderColor: "#DFDFDF",
                borderRadius: 10,
                flexDirection: "row",
              },
            ]}
          >
            <View>
              <Image
                source={{ uri: image }}
                style={{ height: "95%", width: 190, borderRadius: 10 }}
              ></Image>
            </View>
            <View
              style={[
                styles.textContainer,
                { flexDirection: "column", marginTop: 0 },
              ]}
            >
              <Text style={[styles.headText, { color: "black" }]}>
                {name}
              </Text>
              <TouchableOpacity
                style={[styles.button, { width: 170, marginTop: 10 }]}
                 onPress={() => navigation.navigate('ProductPage', { groundDetails: groundDetails })}
              >
                <Text style={[styles.buttonText, { marginLeft: 55 }]}>
                  Book Now
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: "row",
                  marginTop: 10,
                }}
              >
                <View style={{ marginLeft: 10, marginRight: 10 }}>
                  <Text style={{ fontWeight: "bold" }}>{timeSlot[0].price}</Text>
                  <Text
                    style={{ color: "blue", fontSize: 10, textAlign: "center" }}
                  >
                    {extractTimeFromDate(timeSlot[0].startTime)}
                  </Text>
                </View>
                <View style={{ marginLeft: 10, marginRight: 10 }}>
                  <Text style={{ fontWeight: "bold" }}>{timeSlot[1].price}</Text>
                  <Text
                    style={{ color: "blue", fontSize: 10, textAlign: "center" }}
                  >
                    {extractTimeFromDate(timeSlot[1].startTime)}
                  </Text>
                </View>
                <View style={{ marginLeft: 10, marginRight: 10 }}>
                  <Text style={{ fontWeight: "bold" }}>{timeSlot[2].price}</Text>
                  <Text
                    style={{ color: "blue", fontSize: 10, textAlign: "center" }}
                  >
                    {extractTimeFromDate(timeSlot[2].startTime)}
                  </Text>
                </View>
              </View>
              {/* <Text style={{ marginTop: 15 }}>3:00PM | 6:00PM | 9:00PM </Text> */}
            </View>
          </View>
   </>
  )
}
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
      width: 180,
      height: 44,
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
      width: 70,
      height: 30,
      backgroundColor: "rgba(255, 197, 0, 1)",
      justifyContent: "center",
      alignContent: "center",
      borderRadius: 5,
    },
    buttonText: {
      color: "black",
      fontSize: 12,
      fontWeight: "bold",
      marginLeft: 8,
    },
  });
export default GroundCard
