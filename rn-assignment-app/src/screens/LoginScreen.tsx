import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function LoginScreen({ navigation }: Props){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [touched, setTouched] = useState({email:false, password:false});

  const validateEmail = (value: string) => /\S+@\S+\.\S+/.test(value);
  const isValid = validateEmail(email) && password.length >= 6;

  const onSubmit = () => {
    setTouched({email:true,password:true});
    if(!validateEmail(email)){
      Alert.alert('E-mail inválido', 'Digite um e-mail válido (ex: nome@dominio.com).');
      return;
    }
    if(password.length < 6){
      Alert.alert('Senha fraca','A senha deve ter pelo menos 6 caracteres.');
      return;
    }
    Alert.alert('Sucesso', 'Login validado!');
    navigation.replace('MainTabs');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo 👋</Text>
      <Text style={styles.subtitle}>Entre para continuar</Text>
      <Text style={styles.label}>E-mail</Text>
      <TextInput
        accessibilityLabel="Digite seu e-mail"
        style={[styles.input, touched.email && !validateEmail(email) && styles.inputError]}
        placeholder="seu@email.com"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
        onBlur={() => setTouched(prev=>({...prev,email:true}))}
      />
      <Text style={styles.label}>Senha</Text>
      <TextInput
        accessibilityLabel="Digite sua senha"
        style={[styles.input, touched.password && password.length<6 && styles.inputError]}
        placeholder="••••••"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        onBlur={() => setTouched(prev=>({...prev,password:true}))}
      />
      <TouchableOpacity
        style={[styles.button, !isValid && styles.buttonDisabled]}
        onPress={onSubmit}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <Text style={styles.hint}>Dica: use qualquer e-mail válido e senha com 6+ caracteres.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: 'center', backgroundColor: '#f7f7f8' },
  title: { fontSize: 28, fontWeight: '700', marginBottom: 4 },
  subtitle: { fontSize: 16, color: '#666', marginBottom: 24 },
  label: { marginTop: 12, marginBottom: 6, fontWeight: '600' },
  input: { backgroundColor: 'white', borderColor: '#e5e7eb', borderWidth: 1, borderRadius: 12, padding: 12 },
  inputError: { borderColor: '#ef4444' },
  button: { marginTop: 16, backgroundColor: '#111827', padding: 14, borderRadius: 12, alignItems: 'center' },
  buttonDisabled: { opacity: 0.9 },
  buttonText: { color: 'white', fontWeight: '700' },
  hint: { marginTop: 12, fontSize: 12, color: '#6b7280' }
});
