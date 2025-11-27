import React from 'react';
import { View, ScrollView, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../App';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen(){
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const items = Array.from({length: 12}, (_,i)=>({id: String(i+1), title: `Item ${i+1}`, desc: 'Descrição breve do item.'}));

  return (
    <ScrollView style={styles.container} contentContainerStyle={{padding:16}}>
      <Text style={styles.heading}>Home</Text>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
      <Text style={styles.paragraph}>
        Esta tela demonstra o uso de View, ScrollView, Text e Image. Role para ver mais itens e toque para abrir detalhes.
      </Text>
      <View style={{gap:12}}>
        {items.map(it => (
          <TouchableOpacity key={it.id} style={styles.card} onPress={()=>navigation.navigate('Details', { itemId: it.id })} activeOpacity={0.75}>
            <Text style={styles.cardTitle}>{it.title}</Text>
            <Text style={styles.cardDesc}>{it.desc}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f7f7f8' },
  heading: { fontSize: 24, fontWeight: '700', marginBottom: 12 },
  paragraph: { color: '#4b5563', marginBottom: 16 },
  logo: { width: 64, height: 64, marginBottom: 8, borderRadius: 12 },
  card: { backgroundColor: 'white', padding: 16, borderRadius: 14, borderWidth: 1, borderColor: '#e5e7eb' },
  cardTitle: { fontWeight: '700', marginBottom: 4 },
  cardDesc: { color: '#6b7280' }
});
