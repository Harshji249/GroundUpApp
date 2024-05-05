import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

const CrouselItem = () => {
  const navigation = useNavigation();


  return (
    <>
      <View style={styles.box}>
              <ImageBackground
                source={require("../images/images/bg2.png")}
                style={styles.background}
                resizeMode="cover"
              >
                <View style={styles.textContainer}>
                  <Text style={styles.headText}>
                    Cricket Ground {"\n"}
                    <MaterialIcons
                      name="location-pin"
                      size={10}
                      color="#FD003A"
                    />
                    <Text style={styles.addressText}> Delhi</Text>
                  </Text>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Book Now</Text>
                  </TouchableOpacity>
                </View>
              </ImageBackground>
            </View>
    </>
  );
};

const styles = StyleSheet.create({
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

export default CrouselItem;
