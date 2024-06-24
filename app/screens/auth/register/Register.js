import React, { useState } from "react";
import {
  TouchableOpacity,
  SafeAreaView,
  Image,
  Alert,
  StyleSheet,
  ActivityIndicator,
  TextInput,
  View,
  Text,
} from "react-native";
import { useDispatch } from "react-redux";
import { setAuthTokenAction } from "../../../store/auth";
import useApiErrorsHandler from "../../../hooks/useApiErrorHandler";
import { setAuthToken } from "../../../helpers/auth";
import { register } from "../../../resources/baseServices/auth";
import { responsiveScale } from "../../../styles/mixins";
import { colors } from "../../../styles/theme";

const Register = ({ navigation }) => {
  const handleApiError = useApiErrorsHandler();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isGetWesafeLoading, setIsGetWesafeLoading] = useState(false);

  const handleGetStartedBtn = async () => {
    if (email === "") {
      Alert.alert("Alert", "Please enter email");
    } else if (!validateEmail(email)) {
      Alert.alert("Alert", "Please enter valid email !");
    } else if (password === "") {
      Alert.alert("Alert", "Please enter password");
    } else {
      setIsGetWesafeLoading(true);
      const data = {
        email: email,
        password: password,
      };
      try {
        const res = await register(data);
        dispatch(setAuthTokenAction(res?.data?.token));
        await setAuthToken(res?.data?.token);
      } catch (error) {
        handleApiError(error);
      } finally {
        setIsGetWesafeLoading(false);
      }
    }
  };

  // Email validation
  const validateEmail = (Email) => {
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(Email);
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Register</Text>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  commanTextInputSty: {
    backgroundColor: colors.textInputBackgroundColor,
    height: 40,
    fontSize: 16,
    color: colors.mediumTextColor,
    borderWidth: 1,
    borderColor: colors.borderDarkColor,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  ImgSty: {
    height: "100%",
    width: "100%",
  },

  getStartedBtn: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.largeButtonColor,
    marginTop: 20,
    height: 50,
    borderRadius: 10,
    shadowColor: colors.largeButtonColor,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  appLogoMainView: { aspectRatio: 3 },
  eWorkText: { marginTop: 10, right: 4 },
  detailsText: { marginTop: 10 },
  loginText: { left: 5 },
});
