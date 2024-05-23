import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'; 
import AsyncStorage from "@react-native-async-storage/async-storage";

const UserRegister = () => {
  const [token, setToken] = useState('');
  const [user, setUser] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    phone: ''
  });

  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await AsyncStorage.getItem('authToken');
        setToken(token);

        const userData = await AsyncStorage.getItem('user');
        console.log('USER DATA', userData);

        if (userData) {
          const user = JSON.parse(userData);
          setUser(user);
          setFormData({
            name: user.name || '',
            address: '',
            city: '',
            state: '',
            pincode: '',
            phone: ''
          });
        }
      } catch (error) {
        console.error('Error fetching data from AsyncStorage', error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (value, fieldName) => {
    setFormData({ ...formData, [fieldName]: value });
  };

  const handleLogin = async () => {
    try {
      const response = await axios.put(`https://groundup-server.onrender.com/api/auth/registeruser/${user._id}`, formData);
      console.log(response);

      if (response.status === 200) {
        navigation.navigate('BottomNavbar');
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require("../images/images/officialLogo2.png")} />
        <Text style={{ color: "black", fontSize: 20, fontWeight: 'semibold' }}>Register Yourself</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={formData.name}
          onChangeText={(value) => handleChange(value, "name")}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Address"
          value={formData.address}
          onChangeText={(value) => handleChange(value, "address")}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="City"
          value={formData.city}
          onChangeText={(value) => handleChange(value, "city")}
        />
        <TextInput
          style={styles.input}
          placeholder="Pincode"
          value={formData.pincode}
          onChangeText={(value) => handleChange(value, "pincode")}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="State"
          value={formData.state}
          onChangeText={(value) => handleChange(value, "state")}
        />
      </View>

      <View style={styles.inputContainer}>
        <MaterialIcons
          name="phone"
          size={24}
          color="black"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone"
          keyboardType="phone-pad"
          maxLength={10}
          value={formData.phone}
          onChangeText={(value) => handleChange(value, "phone")}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleLogin} style={styles.sendOTPButton}>
          <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold' }}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    width: 250,
    borderColor: "gray",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 8,
  },
  input: {
    flex: 1,
    height: 40,
    marginLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
  buttonContainer: {
    borderRadius: 10,
    overflow: 'hidden',
    width: 100,
    marginVertical: 8,
  },
  sendOTPButton: {
    backgroundColor: '#FFC500',
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default UserRegister;
