import React, { Component, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, StatusBar, Pressable } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as FS from "expo-file-system";
import * as ImageManipulator from "expo-image-manipulator";
import * as Network from 'expo-network';
import { NetworkInfo } from "react-native-network-info";
import { useNavigation } from '@react-navigation/native';
import { Card, Title, Paragraph } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DiseaseData from "./DiseaseContext";



class PredictScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cameraRollPer: null,
      disableButton: false,
      fileUri: null,
      disease_result: null,
      probs_result: null
    };

  }


  async componentDidMount() {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    this.setState((state, props) => {
      return {
        cameraRollPer: status === "granted",
        disableButton: false,
      };
    });
  }

  uriToBase64 = async (uri) => {
    let base64 = await FS.readAsStringAsync(uri, {
      encoding: FS.EncodingType.Base64,
    });
    return base64;
  };

  pickMedia = async () => {
    this.setState((state, props) => {
      return {
        cameraRollPer: state.cameraRollPer,
        disableButton: true,
      };
    })

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      base64: true,
    });

    if (result.cancelled) {
      return;
    }
    if (result.type == "image") {
      const manipResult = await ImageManipulator.manipulateAsync(
        result.localUri || result.uri,
        [{ resize: { height: 480, width: 480 } }],
        { compress: 1, format: ImageManipulator.SaveFormat.PNG },
      );
      await this.toServer({
        type: manipResult.type,
        base64: manipResult.base64,
        uri: manipResult.uri,
      });
      this.setState((state, props) => {
        return {
          fileUri: result.uri
        };
      });
    }
  };

  pickCamera = async () => {
    this.setState((state, props) => {
      return {
        cameraRollPer: state.cameraRollPer,
        disableButton: true,
      };
    });

    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!");
      return;
    }

    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      base64: true,
    });

    if (result.cancelled) {
      return;
    }
    if (result.type == "image") {
      const manipResult = await ImageManipulator.manipulateAsync(
        result.localUri || result.uri,
        [{ resize: { height: 480, width: 480 } }],
        { compress: 1, format: ImageManipulator.SaveFormat.PNG },
      );
      await this.toServer({
        type: manipResult.type,
        base64: manipResult.base64,
        uri: manipResult.uri,
      });
      this.setState((state, props) => {
        return {
          fileUri: result.uri
        };
      });
    }
  };


  toServer = async (mediaFile) => {
    let schema = "http://";
    let host = "192.168.18.14"; //input model server ip
    let route = "/image";
    let port = "5000";
    let url = "";
    let content_type = "image/jpeg";

    url = schema + host + ":" + port + route;

    let response = await FS.uploadAsync(url, mediaFile.uri, {
      headers: {
        "content-type": content_type,
      },
      httpMethod: "POST",
      uploadType: FS.FileSystemUploadType.BINARY_CONTENT,
    });

    console.log(response.headers);
    console.log(response.body);

    let response_json = response.body.replace("{", "")
    response_json = response_json.replace("}", "")
    response_json = response_json.replace("\"disease\":", "")
    response_json = response_json.replace("\"probs\":", "")
    response_json = response_json.replace("\"", "")
    response_json = response_json.replace("\"", "")
    response_json = response_json.replace("\"", "")
    response_json = response_json.replace("\"", "")

    response_json_split = response_json.split(",")

    this.setState((state, props) => {
      return {
        disease_result: response_json_split[0],
        probs_result: response_json_split[1]
      };
    });
  };

  render() {

    if (this.state.disease_result == "bacterial_leaf_blight") {
      this.state.disease_result = "Hawar Daun Bakteri"
    }
    else if (this.state.disease_result == "bacterial_leaf_streak") {
      this.state.disease_result = "Hawar Daun Bergaris"
    }
    else if (this.state.disease_result == "bacterial_panicle_blight") {
      this.state.disease_result = "Hawar Malai padi"
    }
    else if (this.state.disease_result == "blast") {
      this.state.disease_result = "Blas"
    }
    else if (this.state.disease_result == "brown_spot") {
      this.state.disease_result = "Bercak Daun Coklat"
    }
    else if (this.state.disease_result == "dead_heart") {
      this.state.disease_result = "Sundep"
    }
    else if (this.state.disease_result == "downy_mildew") {
      this.state.disease_result = "Bulai"
    }
    else if (this.state.disease_result == "hispa") {
      this.state.disease_result = "Hispa"
    }
    else if (this.state.disease_result == "tungro") {
      this.state.disease_result = "Tungro"
    }


    return (
      <DiseaseData.Consumer>
        {(context) => (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <StatusBar hidden={true} />

            <Card style={styles.card}>
              <Card.Content>
                <Image
                  source={{ uri: this.state.fileUri }}
                  style={styles.thumbnail}
                />

                <View style={styles.flex_container}>
                  {this.state.cameraRollPer ? (
                    <TouchableOpacity onPress={async () => {
                      await this.pickCamera();
                      this.setState((s, p) => {
                        return {
                          cameraRollPer: s.cameraRollPer,
                          disableButton: false,
                          fileUri: s.fileUri
                        };
                      });
                    }}
                      style={styles.button}  >
                      <Ionicons name={"camera"} size={50} color={"white"} />
                    </TouchableOpacity>
                  ) : (
                    <Text>Camera Roll Permission Required ! </Text>
                  )}

                  <TouchableOpacity
                    onPress={async () => {
                      await this.pickMedia();
                      this.setState((s, p) => {
                        return {
                          cameraRollPer: s.cameraRollPer,
                          disableButton: false,
                          fileUri: s.fileUri
                        };
                      });
                    }}
                    style={styles.button}  >
                    <Ionicons name={"cloud-upload"} size={50} color={"white"} />
                  </TouchableOpacity>
                </View>




                {this.state.probs_result && this.state.disease_result && this.state.disease_result != "normal" ? (


                  <Pressable style={styles.diseasePress} onPress={() => {
                    this.props.navigation.navigate("Informasi", {diseaseName : this.state.disease_result});
                    context.setMessage(this.state.disease_result);
                  }}>

                    <Text style={styles.diseaseText}>
                      {this.state.disease_result}
                    </Text>

                    <Text style={styles.diseaseText}>
                      {"Probabilitas: " + (parseFloat(this.state.probs_result) * 100).toFixed(2).toString() + "%"}
                    </Text>
                  </Pressable>


                ) : (
                  <Text></Text>
                )}

                {this.state.probs_result && this.state.disease_result == "normal" ? (
                  <Pressable style={styles.diseasePress}>
                    <Text style={styles.diseaseText}>
                      {this.state.disease_result}
                    </Text>

                    <Text style={styles.diseaseText}>
                      {"Probabilitas: " + (parseFloat(this.state.probs_result) * 100).toFixed(2).toString() + "%"}
                    </Text>
                  </Pressable>
                ) : (
                  <Text></Text>
                )}

              </Card.Content>
            </Card>

          </View>
        )}
      </DiseaseData.Consumer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  button: {
    width: 100,
    height: 100,
    backgroundColor: '#3740ff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100 / 2,
    marginBottom: 12
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 15,
    color: '#fff'
  },
  thumbnail: {
    width: 300,
    height: 300,
    marginBottom: 30,
    backgroundColor: "#F4F3F3"
  },
  diseasePress: {
    marginTop: 15,

  },
  diseaseText: {
    fontSize: 20,
    textAlign: "center"
  },
  card: {
    marginTop: 30,
    marginBottom: 30
  },
  flex_container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20
  },
  size: {

  },
  color: {

  }

});

export default function (props) {
  const navigation = useNavigation()

  return <PredictScreen {...props} navigation={navigation} />
}