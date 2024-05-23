import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const CartInfo = () => {
  const [selectedTab, setSelectedTab] = useState("upcoming");
  const [grounds, setGrounds] = useState([]);
  const handleTabPress = (tab) => {
    setSelectedTab(tab);
  };
  const fetchBookedGrounds = async () => {
    await axios
      .get("https://groundup-server.onrender.com/api/ground/mybooking", {
        headers: {
          "auth-token": await AsyncStorage.getItem("authToken"),
        },
      })
      .then((res) => {
        if (res.status === 200) {
          console.log("allllllll", res.data);
          setGrounds(res.data.grounds);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useState(() => {
    fetchBookedGrounds();
  }, []);
  return (
    <>
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[
            styles.tabItem,
            selectedTab === "upcoming"
              ? styles.selectedTab
              : styles.unselectedText,
          ]}
          onPress={() => handleTabPress("upcoming")}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === "upcoming"
                ? styles.selectedText
                : styles.unselectedText,
            ]}
          >
            Upcoming
          </Text>
        </TouchableOpacity>
        <View style={styles.verticalLine} />
        <TouchableOpacity
          style={[
            styles.tabItem,
            selectedTab === "finished"
              ? styles.selectedTab
              : styles.unselectedText,
          ]}
          onPress={() => handleTabPress("finished")}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === "finished"
                ? styles.selectedText
                : styles.unselectedText,
            ]}
          >
            Past Booking
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        <View>
          {selectedTab === "upcoming" ? (
            <View>
              {grounds.map((ground) => (
                <View
                  key={ground.id}
                  style={{
                    borderWidth: 2,
                    borderColor: "#DFDFDF",
                    borderRadius:10,
                    width: "100%",
                    height: 80,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems:"center"
                  }}
                >
                  <View style={{ width: "35%", height: "80%" }}>
                    <Image
                      style={{ width: "100%", height: "100%" }}
                      source={{ uri: ground.image }}
                    />
                  </View>
                  <View style={{ width: "55%", height: "100%", display:"flex",justifyContent:'space-evenly' }}>
                    <Text>{ground.groundName}</Text>
                    <View style={{display:"flex", flexDirection:'row', justifyContent:"space-around"}}>
                      <TouchableOpacity
                        style={[
                          styles.button,
                          { width: "40%" },
                        ]}
                        
                      >
                        <Text style={[styles.buttonText]}>View</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[
                          styles.button,
                          { width: "40%"},
                        ]}
                      >
                        <Text style={[styles.buttonText]}>Cancel</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              ))}
            </View>
          ) : (
            <View>
              <Text>No past Bookings</Text>
            </View>
          )}
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  tabsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    width: 300,
    borderWidth: 1,
    borderColor: "#CCCACA",
    borderRadius: 10,
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "light-grey",
  },
  selectedTab: {
    backgroundColor: "transparent",
  },
  tabText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  button: {
    height: 20,
    backgroundColor: "rgba(255, 197, 0, 1)",
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "black",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
  verticalLine: {
    height: "60%",
    width: 1,
    backgroundColor: "#CCCACA",
  },
  selectedText: {
    color: "black",
  },
  unselectedText: {
    color: "grey",
  },
  contentContainer: {
    width: "80%",
    marginTop: 20,
  },
});
export default CartInfo;
