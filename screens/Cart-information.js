import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';

const CartInfo = ()=>{
    const [selectedTab, setSelectedTab] = useState('upcoming');

    const handleTabPress = (tab) => {
        setSelectedTab(tab);
      };
    return(
        <>
        <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[styles.tabItem, selectedTab === 'upcoming' ? styles.selectedTab : styles.unselectedText]}
          onPress={() => handleTabPress('upcoming')}
        >
          <Text style={[styles.tabText, selectedTab === 'upcoming' ? styles.selectedText : styles.unselectedText]}>Upcoming</Text>
        </TouchableOpacity>
        <View style={styles.verticalLine} />
        <TouchableOpacity
          style={[styles.tabItem, selectedTab === 'finished' ? styles.selectedTab : styles.unselectedText]}
          onPress={() => handleTabPress('finished')}
        >
          <Text style={[styles.tabText, selectedTab === 'finished' ? styles.selectedText : styles.unselectedText]}>Past Booking</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        <Text>{selectedTab === 'upcoming' ? 'Content for Upcoming' : 'Content for Finished'}</Text>
      </View>
        </>

    )
};
const styles = StyleSheet.create({
    tabsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        width:300,
        borderWidth:1,
        borderColor:"#CCCACA",
        borderRadius:10,
      },
      tabItem: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 10,
        backgroundColor:"light-grey",
      },
      selectedTab: {
        backgroundColor: "transparent",
        
      },
      tabText: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      verticalLine: {
        height: '60%',
        width: 1,
        backgroundColor: '#CCCACA',
      },
      selectedText: {
        color: 'black',
      },
      unselectedText: {
        color: 'grey',
      },
      contentContainer: {
        marginTop: 20,
      },
})
export default CartInfo;