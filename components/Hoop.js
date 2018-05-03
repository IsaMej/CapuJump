import React, {
  Component,
} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Image
} from 'react-native';
import {
  PropTypes,
} from 'prop-types';

class Hoop extends Component {
  render() {
    return (
      <Image
      renderToHardwareTextureAndroid
      source={require ('../assets/Capumain.png')} style={[{
        width: 150,
        height: 112,
        top: 68,
        left: 120
        //backgroundColor: 'transparent',
      }]}
    />
    );
  }
}

const styles = StyleSheet.create({
  hoopContainer: {
    position: 'absolute',
    left: (Dimensions.get('window').width / 2) - (179 / 2),
    width: 179,
    height: 112,
    alignItems: 'center',
    borderWidth: 5,
    borderColor: '#b7b7b7',
    borderRadius: 4,
  },
  hoopContained: {
    width: 70,
    height: 54,
    marginTop: 38,
    borderWidth: 5,
    borderColor: '#b7b7b7',
  },
});

Hoop.defaultProps = {
  y: 0,
};

Hoop.propTypes = {
  y: PropTypes.number,
};

export default Hoop;
