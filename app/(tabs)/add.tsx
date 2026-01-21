import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Bottom from "../_components/add/Bottom";
import Form from "../_components/add/Form";
import Header from "../_components/home/Header";

export default function AddJobPage() {
  const [formData, setFormData] = useState({
    title: "",
    department: "",
    jobType: "",
    level: "",
    salaryMin: "",
    salaryMax: "",
    responsibilities: "",
    requirements: "",
    additionalInfo: "",
    skills: "",
    benefits: "",
    contactInfo: "",
    location: "",
  });

  return (
    <View style={styles.container}>
      <Header />
      <Form formData={formData} setFormData={setFormData} />
      <Bottom formData={formData} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
});
