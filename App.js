import React, { useRef } from 'react';
import { Button, SafeAreaView, StyleSheet, View } from 'react-native';
import base64 from 'react-native-base64';
import { WebView } from 'react-native-webview';
import { scriptBase } from './test';

// const LINK = "https://welwel-128ac.web.app/" // "https://meiswap.mooneex.com/#/home"
const LINK = "https://meiswap.mooneex.com/#/home" // "https://meiswap.mooneex.com/#/home"

export default function App() {

  const ref = useRef()
  const test = base64.decode(scriptBase)
  const startScript = `${test}`

  const _onMessage = (event) => {
    let action = JSON.parse(event.nativeEvent.data)

    switch (action.type) {

      default:
        console.log("default", action)
        break;
    }
  }


  const setAccount = () => {
    ref.current.injectJavaScript(
      `window.postMessage({
      message: {
          action: 'setAccount',
          data: {
            address: 'WVzaQRtw8v6DXYtoDD2n8AbXvnVWjpgE63',
            name: 'xx',
            type: 0
          }
      },
      source: 'welups-app',
      isWelLink: true

  })
  `
    )
  }

  const setNode = () => {
    ref.current.injectJavaScript(
      `window.postMessage({
        message: {
            action: 'setNode',
            data: {
                fullNode: 'https://api-main.welscan.io',
                solidityNode: 'https://api-main.welscan.io',
                eventServer: 'https://se-co-sau.com'
            }
        }, 
        source: 'welups-app',
        isWelLink: true
    });`
    )

  }

  return (
    <SafeAreaView style={{ flex: 1, flexDirection: 'column' }}>
      <View style={{ flex: 18 }}>
        <WebView
          ref={ref}
          source={{
            // html
            uri: LINK
          }}
          onMessage={_onMessage}
          injectedJavaScriptBeforeContentLoadedForMainFrameOnly={false}
          injectedJavaScriptBeforeContentLoaded={startScript}
        />
      </View>
      <Button title='set node' onPress={setNode} />
      <Button title='set account' onPress={setAccount} />
    </SafeAreaView >
  );

}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});