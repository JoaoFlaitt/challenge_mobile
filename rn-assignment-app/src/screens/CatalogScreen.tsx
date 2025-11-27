import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function CatalogScreen(){
  const [category, setCategory] = useState('all');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Catálogo</Text>
      <Text style={styles.label}>Filtrar por categoria:</Text>
      <View style={styles.pickerWrap}>
        <Picker
          selectedValue={category}
          onValueChange={(v)=>setCategory(String(v))}
          mode="dropdown"
          testID="categoryPicker"
        >
          <Picker.Item label="Todos" value="all" />
          <Picker.Item label="Tecnologia" value="tech" />
          <Picker.Item label="Roupas" value="fashion" />
          <Picker.Item label="Casa" value="home" />
        </Picker>
      </View>
      <Text style={styles.note}>Categoria selecionada: <Text style={{fontWeight:'700'}}>{category}</Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f7f7f8' },
  title: { fontSize: 24, fontWeight: '700', marginBottom: 12 },
  label: { marginBottom: 6, fontWeight: '600' },
  pickerWrap: { backgroundColor: 'white', borderWidth: 1, borderColor: '#e5e7eb', borderRadius: 12 },
  note: { marginTop: 12, color: '#4b5563' }
});
