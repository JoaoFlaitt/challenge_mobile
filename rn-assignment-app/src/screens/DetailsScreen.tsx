import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

export default function DetailsScreen({ route }: Props){
  const id = route.params?.itemId ?? '—';
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes do Item</Text>
      <Text style={styles.text}>ID: <Text style={{fontWeight:'700'}}>{id}</Text></Text>
      <Text style={styles.text}>Esta tela faz parte do Stack Navigator.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f7f7f8' },
  title: { fontSize: 24, fontWeight: '700', marginBottom: 12 },
  text: { color: '#4b5563', marginBottom: 6 }
});
