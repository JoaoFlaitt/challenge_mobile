import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default function SettingsScreen(){
  const confirmClear = () => {
    Alert.alert('Sair da conta', 'Tem certeza que deseja deslogar?', [
      { text: 'Cancelar', style: 'cancel' },
      { text: 'Sair', style: 'destructive', onPress: () => Alert.alert('Deslogado', 'Você foi desconectado com sucesso.') }
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações</Text>
      <TouchableOpacity style={styles.item} activeOpacity={0.7} onPress={confirmClear}>
        <Text style={styles.itemText}>Sair</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} activeOpacity={0.7} onPress={()=>Alert.alert('Sobre', 'App de exemplo para avaliação.')}>
        <Text style={styles.itemText}>Sobre</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f7f7f8' },
  title: { fontSize: 24, fontWeight: '700', marginBottom: 12 },
  item: { backgroundColor: 'white', padding: 16, borderRadius: 12, borderWidth: 1, borderColor: '#e5e7eb', marginBottom: 12 },
  itemText: { fontWeight: '600' }
});
