import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import { useDispatch } from 'react-redux';
import Block from '../../../components/utilities/Block';
import Button from '../../../components/utilities/Button';
import CustomTextInput from '../../../components/utilities/CustomTextInput';
import Text from '../../../components/utilities/Text';
import useApiErrorsHandler from '../../../hooks/useApiErrorHandler';
import { setAuthTokenAction } from '../../../store/auth';
import { responsiveScale } from '../../../styles/mixins';
import { colors, perfectSize } from '../../../styles/theme';
import { setAuthToken } from '../../../helpers/auth';

const LogIn = ({ navigation }) => {
  const handleApiError = useApiErrorsHandler();
  const dispatch = useDispatch();
  const { top, bottom } = useSafeAreaInsets();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginLoading, setIsLoginLoading] = useState(false);

  const handleLoginBtn = async () => {
    const emailAddressCheck = validateEmail();
    const passwordError = validatePassword();
    if (emailAddressCheck) {
      Alert.alert('Error', emailAddressCheck);
    } else if (passwordError) {
      Alert.alert('Error', passwordError);
    } else {
      // setIsLoginLoading(true);
      // const data = {
      //   email: email,
      //   password: password,
      // };
      try {
        // const res = await login(data);
        dispatch(setAuthTokenAction('true'));
        await setAuthToken('true');
      } catch (error) {
        handleApiError(error);
      } finally {
        setIsLoginLoading(false);
      }
    }
  };
  const validateEmail = () => {
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;

    if (email.trim() === '') {
      return 'Please enter an email address';
    } else if (email.length > 50) {
      return 'Email address is too long';
    } else if (!emailRegex.test(email)) {
      return 'Please enter a valid email address';
    }
    return null;
  };

  const validatePassword = () => {
    const minLength = 8;
    const maxLength = 30;
    const lowercaseRegex = /[a-z]/;
    const uppercaseRegex = /[A-Z]/;
    const numericRegex = /[0-9]/;
    const specialCharRegex = /[!@#$%^&*]/;

    if (password.trim() === '') {
      return 'Please enter password';
    } else if (password.length < minLength) {
      return 'Password must be at least 8 characters long';
    } else if (password.length > maxLength) {
      return 'Password cannot exceed 30 characters';
    } else if (!lowercaseRegex.test(password)) {
      return 'Password must contain at least one lowercase letter (a-z)';
    } else if (!uppercaseRegex.test(password)) {
      return 'Password must contain at least one uppercase letter (A-Z)';
    } else if (!numericRegex.test(password)) {
      return 'Password must contain at least one numeric digit (0-9)';
    } else if (!specialCharRegex.test(password)) {
      return 'Password must contain at least one special character (!, @, #, $)';
    }

    return null;
  };

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Block
      flex={1}
      padding={[
        top + perfectSize(15),
        perfectSize(15),
        perfectSize(15),
        perfectSize(15),
      ]}
      color={colors.white}
    >
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <Block flex={1}>
          <Block flex={false} style={styles.imageStyle}></Block>
          <Text
            regular
            size={responsiveScale(9)}
            color={colors.Black_Text}
            style={{ marginVertical: perfectSize(10) }}
          >
            {/* Ride the Odds, Win Big! */}
          </Text>
          <Text
            regular
            size={responsiveScale(15)}
            color={colors.Black_Text}
            style={{ marginVertical: perfectSize(15) }}
          >
            Log in to your account
          </Text>
          <CustomTextInput
            itemTitle={'Email address'}
            placeholder={'Your email'}
            // placeholderTextColor={colors.Gray_Text}
            value={email}
            onchangeText={value => {
              setEmail(value);
            }}
            autoCapitalize={'none'}
            keyboardType={'email-address'}
          />
          <CustomTextInput
            itemTitle={'Password'}
            placeholder={'Password'}
            isVisiblePassword={true}
            // placeholderTextColor={colors.Gray_Text}
            value={password}
            onchangeText={value => {
              setPassword(value);
            }}
            secureTextEntry={true}
            autoCapitalize={'none'}
            extraTextInputStyle={{
              width: '95%',
            }}
          />
          <Block flex={false} style={styles.forgotStyle}>
            <Text regular size={responsiveScale(10)} color={colors.Black_Text}>
              Forgot password?
            </Text>
          </Block>

          <Button
            onPress={() => {
              handleLoginBtn();
            }}
            name="Log in"
          />
        </Block>
        <Block
          flex={false}
          row
          center
          middle
          style={{ marginBottom: bottom + perfectSize(10) }}
        >
          <Text regular size={responsiveScale(10)} color={colors.Gray_Text}>
            Don’t have an account?{' '}
          </Text>
          <TouchableOpacity
            style={{
              borderBottomColor: colors.black,
              borderBottomWidth: 1,
            }}
            onPress={() => navigation.navigate('Register')}
          >
            <Text
              semiBold
              size={responsiveScale(10)}
              color={colors.Black_Text}
              style={styles.signupText}
            >
              Sign up
            </Text>
          </TouchableOpacity>
        </Block>
      </KeyboardAwareScrollView>
    </Block>
  );
};

export default LogIn;
const styles = StyleSheet.create({
  imageStyle: {
    height: perfectSize(24),
    width: perfectSize(138),
    marginTop: perfectSize(20),
  },
  forgotStyle: {
    marginVertical: perfectSize(15),
    alignItems: 'flex-end',
  },
  bottomText: {
    marginVertical: perfectSize(15),
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  signupText: {
    borderBottomColor: 'red',
    borderBottomWidth: 1,
  },
});
