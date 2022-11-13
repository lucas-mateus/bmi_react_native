import { colors } from '../constants/index'
import {Text, StyleSheet } from "react-native";


export function ImcType({imcType}){
    return(
        <Text style={styles.imcType}>{imcType}</Text>

    )
}

const styles = StyleSheet.create({
    imcType: {
      fontSize: 24,
      color: colors.purpleLight,
    },
  });