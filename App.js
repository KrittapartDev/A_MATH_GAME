import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <Image source={require("./assets/Logo.png")} style={styles.logo} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>เข้าสู่ระบบ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>สมัครสมาชิก</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5", // สีพื้นหลังที่นุ่มนวล
  },
  logo: {
    width: 512, // กำหนดขนาดโลโก้
    height: 512, // กำหนดขนาดโลโก้
    resizeMode: "contain", // ทำให้โลโก้แสดงผลเต็มที่ในขนาดที่กำหนด
    justifyContent: "center",
    alignItems: "center",
    marginTop: "-25%",
  },
  buttonContainer: {
    flexDirection: "row", // จัดปุ่มให้อยู่ในแถวเดียวกัน
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginTop: -300, // ลดช่วงว่างระหว่างปุ่ม
    backgroundColor: "#2c3e50", // สีพื้นหลังของปุ่ม
    paddingVertical: 15, // เพิ่มช่องว่างแนวตั้งในปุ่ม
    paddingHorizontal: 25, // เพิ่มช่องว่างแนวนอนในปุ่ม
    borderRadius: 8, // มุมโค้งของปุ่ม
    marginHorizontal: 10, // เพิ่มช่องว่างระหว่างปุ่ม
    shadowColor: "#000", // สีของเงา
    shadowOffset: { width: 0, height: 2 }, // ตำแหน่งของเงา
    shadowOpacity: 0.25, // ความโปร่งใสของเงา
    shadowRadius: 3.84, // รัศมีของเงา
    elevation: 5, // ยกระดับของปุ่ม (สำหรับ Android)
  },
  buttonText: {
    color: "#FFF", // สีของข้อความในปุ่ม
    fontSize: 18, // ขนาดของข้อความในปุ่ม
    fontWeight: "bold", // น้ำหนักของข้อความในปุ่ม
  },
});

export default App;
