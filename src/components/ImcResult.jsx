import {colors} from '../constants/index'
import {Text, StyleSheet } from "react-native";
import { ImcType } from '../components/ImcType'

export function ImcResult({imc}){

    return(
        <>
            {imc < 18.50 ?
                <Text style={styles.imcResult}>
                    <ImcType imcType={"Magreza"}/> 
                    {('\n')}
                    Muito abaixo, considere ir ao médico. Possíveis sintomas: Fadiga, stress, ansiedade.
                </Text> : imc <= 24.9 ? 
                <Text style={styles.imcResult}>
                    <ImcType imcType={"Peso Normal"}/> 
                    {('\n')}
                    Menor risco de doenças cardíacas e vasculares.
                </Text> : imc <=29.9 ? 
                <Text style={styles.imcResult}>
                    <ImcType ImcType={"Sobrepeso"}/>
                    {('\n')}
                    Considere ir ao médico. Possíveis sintomas: Fadiga, má circulação, varizes.
                </Text> : imc <= 34.9 ?
                <Text style={styles.imcResult}>
                    <ImcType imcType={"Obesidade grau I"}/>
                    {('\n')}
                    Sintomas e riscos: Diabetes, angina, infarto, aterosclerose.
                </Text> : imc <=40 ?
                <Text style={styles.imcResult}>
                    <ImcType imcType={"Obesidade grau II"}/>
                    {('\n')}
                    Possíveis sintomas e riscos: Apneia do sono, falta de ar
                </Text> : imc >40 ?
                    <Text style={styles.imcResult}> 
                        <ImcType imcType={"Obesidade grau III"}/>
                        {('\n')}
                        Possíveis sintomas e riscos: Refluxo, dificuldade para se mover, escaras, diabetes, infarto, AVC
                    </Text> : <Text></Text>
            }
        </>
    )


}


const styles = StyleSheet.create({
    imcResult: {
      fontSize: 16,
      color: colors.white,
      marginTop:8,
      padding:10,
    },
  });