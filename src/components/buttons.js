import React from 'react';

import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image
} from 'react-native';

import {
    Button,
    ButtonStyles,
    ColoredRaisedButton,
    RaisedButton,
    FlatButton,
    Fab,
    ColoredFab,
    AccentFab,
    MKColor,
    getTheme,
} from 'react-native-material-kit';

const {
    buttonText,
    buttonTextAccent,
    buttonTextPrimary,
    coloredButtonText,
} = ButtonStyles;
  
const styles = Object.assign({}, appStyles, StyleSheet.create({
    buttonText: {
      fontSize: 14,
      fontWeight: 'bold',
      color: 'white',
    },
}));

export default () => (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.container}
    >
      <View style={styles.row}>
        <View style={styles.col}>
          <RaisedButton>
            <Text style={buttonText()}>BUTTON</Text>
          </RaisedButton>
          <Text style={styles.legendLabel}>Raised button</Text>
        </View>
        <View style={styles.col}>
          <ColoredRaisedButton>
            <Text style={coloredButtonText()}>BUTTON</Text>
          </ColoredRaisedButton>
          <Text style={styles.legendLabel}>Colored</Text>
        </View>
        <View style={styles.col}>
          {/* Or use AccentRaisedButton */}
          <ColoredRaisedButton
            style={{
              backgroundColor: getTheme().accentColor,
            }}
          >
            <Text
              pointerEvents="none"
              style={[coloredButtonText(), styles.buttonText]}
            >
              BUTTON
            </Text>
          </ColoredRaisedButton>
          <Text style={styles.legendLabel}>Accent colored</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.col}>
          <Fab>
            <Image pointerEvents="none" source={require('../img/plus_dark.png')}/>
          </Fab>
          <Text style={styles.legendLabel}>Plain FAB</Text>
        </View>
        <View style={styles.col}>
          <ColoredFab>
            <Image pointerEvents="none" source={require('../img/plus_white.png')}/>
          </ColoredFab>
          <Text style={styles.legendLabel}>Colored</Text>
        </View>
        <View style={styles.col}>
          <AccentFab>
            <Image pointerEvents="none" source={require('../img/plus_white.png')}/>
          </AccentFab>
          <Text style={styles.legendLabel}>Accent colored</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.col}>
          <FlatButton>
            <Text style={buttonText()}>BUTTON</Text>
          </FlatButton>
          <Text style={styles.legendLabel}>Flat button</Text>
        </View>
        <View style={styles.col}>
          <FlatButton>
            <Text style={buttonTextPrimary()}>BUTTON</Text>
          </FlatButton>
          <Text style={styles.legendLabel}>Colored</Text>
        </View>
        <View style={styles.col}>
          {/* custom ripple color */}
          <FlatButton
            rippleColor='rgba(253, 216, 53, 0.3)'
          >
            <Text style={buttonTextAccent()}>BUTTON</Text>
          </FlatButton>
          <Text style={styles.legendLabel}>Accent colored</Text>
        </View>
      </View>
    </ScrollView>
);