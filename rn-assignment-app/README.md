# RN Assignment App

App móvel em **React Native (Expo)** que cumpre os requisitos:

- **Login** com *validação de formulário* (e-mail e senha) ✔️  
- **3–5 telas** com **React Navigation** (Stack + Bottom Tabs) ✔️  
  - Home (View, **ScrollView**, **Image**, **Text**, **TouchableOpacity**)  
  - Catalog (**Picker**)  
  - Settings (**TouchableOpacity**, **Alert**)  
  - Details (Stack screen)  
- Componentes exigidos usados: **View, ScrollView, TextInput, Text, Image, TouchableOpacity, Alert, Picker** ✔️  
- **Estilização** com `StyleSheet` ✔️  
- **Arquitetura** organizada em `src/screens`, `assets`, `components` ✔️  
- **Vídeo**: veja instruções abaixo para gravar no Android/iOS ✔️  

## Como rodar

1. **Pré‑requisitos**  
   - Node 18+  
   - `npm i -g expo-cli` (ou use `npx expo`)  
   - Android Studio com um *AVD* (emulador) **ou** Xcode para iOS.

2. **Instalação**  
   ```bash
   npm install
   npx expo install react-native-screens react-native-safe-area-context
   ```

3. **Executar**  
   ```bash
   npm start
   # Depois pressione 'a' para Android ou 'i' para iOS
   ```

> Dica: se o Metro travar, limpe cache: `expo start -c`.

## Fluxo e testes rápidos

1. **Login**  
   - Digite um e-mail válido (ex: `teste@fiap.com`) e senha com **6+** caracteres.  
   - Tente e-mail inválido para ver o **Alert** de erro.  

2. **Navegação**  
   - Após login, você cai nas **abas**: Home / Catalog / Settings.  
   - Em **Home**, role a **ScrollView** e toque num card para abrir **Details** (Stack).  
   - Em **Catalog**, troque a categoria pelo **Picker**.  
   - Em **Settings**, toque em **Sair** para ver o **Alert** de confirmação.

## Estrutura
```
rn-assignment-app/
├── assets/
│   └── logo.png
├── src/
│   └── screens/
│       ├── CatalogScreen.tsx
│       ├── DetailsScreen.tsx
│       ├── HomeScreen.tsx
│       ├── LoginScreen.tsx
│       └── SettingsScreen.tsx
├── App.tsx
├── index.js
├── package.json
├── app.json
├── tsconfig.json
└── README.md
```

## Como gravar o **vídeo de demonstração**

- **Android (Android Studio AVD)**  
  1. Abra o emulador.  
  2. `npm start` e pressione `a`.  
  3. No AVD, use **Record and Playback > Start Recording**.  
  4. Mostre: login inválido → login válido → navegar pelas abas → abrir Details → Alert de "Sair".  
  5. **Stop Recording** e salve o `.mp4`.

- **iOS (Xcode Simulator)**  
  1. `npm start` e pressione `i`.  
  2. Menu do Simulator: `File > New Screen Recording`.  
  3. Repita o roteiro e salve o `.mov`.

---

Qualquer dúvida, é só chamar. Bom proveito! 🚀
