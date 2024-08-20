import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import colors from '../constants/colors';

interface IProps {
  onPress: () => void;
  buttonText: string;
  descriptiveText: string;
}

export const SwitchAuthPage = ({
  onPress,
  buttonText,
  descriptiveText,
}: IProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{descriptiveText} </Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  text: {
    color: colors.gray,
    fontWeight: '600',
    fontSize: 14,
  },
  buttonText: {
    color: colors.primary,
    fontWeight: '600',
    fontSize: 14,
  },
});
