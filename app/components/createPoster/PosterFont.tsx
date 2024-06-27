  import React, { useState } from "react";
  import { Alert, StyleSheet, Modal, TouchableOpacity, View } from "react-native";
  import Block from "../utilities/Block";
  import Text from "../utilities/Text";
  import { color } from "../../config/color";
  import { perfectSize } from "../../styles/theme";
  import { TriangleColorPicker } from "react-native-color-picker";

  const PosterFont = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedColor, setSelectedColor] = useState(color.BLACK);

    const handleColorSelected = (color:any) => {
      setSelectedColor(color);
      setModalVisible(false);
    };

    return (
      <Block flex={false}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Block
            flex={false}
            row
            evenly
            margin={[
              perfectSize(20),
              perfectSize(0),
              perfectSize(0),
              perfectSize(0),
            ]}
          >
            <Text caption regular color={color.BLACK}>
              Font Color
            </Text>

            <Block
              flex={false}
              style={{ height: 30, width: "40%" }}
              color={selectedColor}
            />
          </Block>
        </TouchableOpacity>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}
        >
          <Block flex={false} style={styles.modalBackground}>
            <Block flex={false} style={styles.modalContainer}>
              <TriangleColorPicker
                onColorSelected={handleColorSelected}
                style={{ width: 300, height: 300 }}
              />
            </Block>
          </Block>
        </Modal>

        <Block
          flex={false}
          row
          evenly
          margin={[
            perfectSize(35),
            perfectSize(0),
            perfectSize(0),
            perfectSize(0),
          ]}
        >
          <Text caption regular color={color.BLACK}>
            Font Style
          </Text>

          <Block flex={false} style={{ height: 30, width: "40%" }}>
            <Text caption regular color={color.BLACK}>
              Font Color
            </Text>
          </Block>
        </Block>

        <Block
          flex={false}
          row
          evenly
          margin={[
            perfectSize(35),
            perfectSize(0),
            perfectSize(0),
            perfectSize(0),
          ]}
        >
          <Text caption regular color={color.BLACK} >
            Font Size
          </Text>

          <Block flex={false} style={{ height: 30, width: "40%" }}>
            <Text caption regular color={color.BLACK} >
              Font Color
            </Text>
          </Block>
        </Block>
      </Block>
    );
  };

  const styles = StyleSheet.create({
    modalBackground: {
      flex: 1,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      justifyContent: "center",
      alignItems: "center",
    },
    modalContainer: {
      backgroundColor: "white",
      padding: 20,
      borderRadius: 10,
      width: "80%",
      alignItems: "center",
    },
  });

  export default PosterFont;
