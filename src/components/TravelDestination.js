import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ImageBackground } from "react-native";

const services = [
  "Flight Booking",
  "Hotel Reservations",
  "Guided Tours",
  "Travel Insurance",
];

const TravelDestination = () => {
  return (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1666239849393-4c094a5ffb18?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      }}
      style={styles.backgroundImage}
      blurRadius={5}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Our Travel Services</Text>
        {services.map((service, index) => (
          <Text key={index} style={styles.subText}>
            - {service}
          </Text>
        ))}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    marginBottom: 20,
  },
  subText: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
  },
});

export default TravelDestination;
