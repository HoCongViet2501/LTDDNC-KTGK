import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Data from './Data';
export default function App() {
  const renderItem = ({ item }) => {
    return (
      <Item item={item} />
    )
  }
  const data=Data;

  const Item = ({ item }) => (
    <View style={styles.item}>
      <Image style={{height:60,width:70}} source={item.image}></Image>
      <View style={styles.centerItem}>
        <Text style={{ marginLeft: 10, fontWeight: "bold", fontSize: 15 }}>{item.title}</Text>
        <Text style={{ marginLeft: 10 }}>Shop: {item.price}</Text>
      </View>
      
    </View>
  )

  return (
    <View style={styles.container}>
      <View style={styles.headerTop}>
        <Text style={{ marginTop: 20 }}>Good morning, Indro!  </Text>
        <Image style={{ borderRadius: 30, }} source={require("./img/trump.png")}></Image>
      </View>
      <View style={styles.find}>
        <KeyboardAvoidingView behavior={Platform.OS === 'android' ? "padding" : "height"}
          style={styles.inputField}>
          <TextInput style={styles.input} placeholder={'Find coffee for you!'} />
          <TouchableOpacity >
            <View style={styles.buttonAdd}>
              <MaterialIcons name="add-circle" size={29} color="black" style={{ left: 2.5, top: 1.5 }} />
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
      <View style={styles.headerBottom}>
        <TouchableOpacity style={styles.btnCoffee}>
          <MaterialIcons name='notifications-active' size={29}></MaterialIcons>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: "black" }}>coffee</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnSnack}>
          <MaterialIcons name='pregnant-woman' size={29}></MaterialIcons>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Snack</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.discount}>
        <Text style={{ fontSize: 14, marginLeft: 20, marginTop: 20 }}>Discount 50% for</Text>
        <Text> all purchase this morning</Text>
        <Image style={{ width: 200, height: 130, borderRadius: 20, marginLeft: 20, marginTop: 20 }} source={require("./img/coffee-worlds.jpg")}></Image>
      </View>
      <View style={styles.footer}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginRight: 160 }}>Recomendation</Text>
        <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.list}>
      </FlatList>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTop: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    marginLeft: 150
  },
  input: {
    color: "black",
    height: 50,
    flex: 1,
    paddingLeft: 10
  },
  find: {
    flex: 7,
    display: "flex",
  },
  inputField: {
    borderColor: '#fff',
    backgroundColor: '#d5d5d5',
    borderWidth: 1,
    marginHorigontal: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alginItems: 'center',
    justifycontent: 'space-between',
    width: 310,

  },
  buttonAdd: {
    height: 35,
    width: 35,
    borderRadius: 5,
    backgroundColor: "#fff",
    alginItems: "center",
    justifycontent: "center",
    top: 7,
    marginRight: 10
  },
  headerBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 300,
    position: "absolute",
    top: 200,
  },
  btnCoffee: {
    backgroundColor: "yellow",
    flexDirection: "row",
    borderRadius: 10,
    width: 120,
    height: 50,
    alignItems: "center",
  },
  btnSnack: {
    backgroundColor: "#d5d5d5",
    borderRadius: 10,
    flexDirection: "row",
    width: 120,
    height: 50,
    alignItems: "center",
  },
  discount: {
    flexDirection: "row",
    position: "absolute",
  },
  footer: {
    position: "absolute",
    top: 500,
  },
  item: {
    padding: 17,
    marginVertical: 8,
    marginHorizontal: 15,
    flexDirection: "row",
    backgroundColor: "#1BA9BC",
    borderRadius: 7
  },
});
