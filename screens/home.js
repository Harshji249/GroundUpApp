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

const Home = () => {
  const [grounds, setGrounds] = useState([]);
  useEffect(() => {
    const fetchGrounds = async () => {
      await axios
        .get("https://groundup-server.onrender.com/api/ground/fetchallgrounds")
        .then(function (response) {
          console.log(response);
          if (response?.status === 200) {
            console.log("Success Full", response.grounds);
            setGrounds(response?.data.grounds);
            console.log(grounds);
          }
        })
        .catch(function (error) {
          console.log("error", error);
        });
    };
    fetchGrounds();
  }, []);
  return (
    <>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../images/images/officialLogo2.png")}
        />
        <Text>Noida, Uttar Pradesh</Text>
        <View style={styles.inputContainer2}>
          <Image source={iconSource} style={styles.search} />

          <TextInput
            style={styles.input}
            placeholder="Search Ground"
            keyboardType="visible-password"
            maxLength={10}
          />
        </View>
      </View>

      <View style={styles.container2}>
        <Text style={styles.text}>Popular Ground</Text>
        <ScrollView horizontal>
          <View style={styles.scrollbar}>
            <CrouselItem />
            <CrouselItem />
          </View>
        </ScrollView>
      </View>
      <View style={styles.container3}>
        <ScrollView vertical>
          <Text style={styles.text}>Nearby Ground</Text>
          {grounds?.map((ground) => (
            <GroundCard key={ground.id} groundDetails={ground} />
          ))}
          {/* <GroundCard/>
        <GroundCard/>
        <GroundCard/>
        <GroundCard/> */}
        </ScrollView>
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
export default Home;
