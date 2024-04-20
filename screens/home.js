import React from "react";
import { StyleSheet, ScrollView, Text, View, Image, Button, ImageBackground, TouchableOpacity, TextInput, Dimensions } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import iconSource from '../images/images/search.png';


const Home = () => {
  const width = Dimensions.get('window').width;


  return (

    <>
      <View style={styles.container}>
        <Image style={styles.image} source={require("../images/images/officialLogo2.png")} />
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
            <View style={styles.box}>
              <ImageBackground source={require('../images/images/bg2.png')} style={styles.background} resizeMode="cover">
                <View style={styles.textContainer}>

                  <Text style={styles.headText}>Cricket Ground  {'\n'}
                    <MaterialIcons name="location-pin" size={10} color="#FD003A" />
                    <Text style={styles.addressText}> Delhi</Text>
                  </Text>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Book Now</Text>
                  </TouchableOpacity>

                </View>
              </ImageBackground>
            </View>

            <View style={styles.box}>
              <ImageBackground source={require('../images/images/bg3.png')} style={styles.background} resizeMode="cover">
                <View style={styles.textContainer}>

                  <Text style={styles.headText}>Football Ground  {'\n'}
                    <MaterialIcons name="location-pin" size={10} color="#FD003A" />
                    <Text style={styles.addressText}> Noida</Text>
                  </Text>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Book Now</Text>
                  </TouchableOpacity>

                </View>
              </ImageBackground>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.container3}>
        <ScrollView vertical>

          <Text style={styles.text}>Nearby Ground</Text>
          <View style={[styles.box, { width: 340, height: 130, backgroundColor: "white", borderWidth: 2, borderColor: "#DFDFDF", borderRadius: 5, flexDirection: 'row' }]}>
            <Image source={require('../images/images/bg3.png')} style={{ marginTop: 10, marginLeft: 10, height: 100, width: 120, borderRadius: 10 }}>
            </Image>
            <View style={[styles.textContainer, { flexDirection: "column", marginLeft: 10 }]}>

              <Text style={[styles.headText, { color: "black", marginTop: -50 }]}>Cricket Ground
              </Text>
              <TouchableOpacity style={[styles.button, { width: 170, marginTop: 10 }]}>
                <Text style={[styles.buttonText, { marginLeft: 55 }]}>Book Now</Text>
              </TouchableOpacity>
              <Text style={{ marginTop: 15 }}>3:00PM | 6:00PM | 9:00PM </Text>
            </View>
          </View>
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
    flexDirection: 'row',
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
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 60,
  },
  addressText: {
    fontSize: 10,
  },
  box: {
    height: 113,
    width: 255,
    overflow: 'hidden',
    borderRadius: 10,
    marginLeft: 5,
    marginRight: 10,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  sideImage: {
    width: 120,
    height: 50,
  },
  button: {
    width: 70,
    height: 30,
    backgroundColor: 'rgba(255, 197, 0, 1)',
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 5,

  },
  buttonText: {
    color: 'black',
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 8,

  },
});
export default Home;
