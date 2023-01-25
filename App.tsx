import React, { useRef, useState, useEffect } from 'react'
import { WebView } from "react-native-webview";
import { source } from "./assets/index.js"

const App = () => {
  return (
    <WebView
      originWhitelist={['*']}
      source={source}
    />
  )
}

export default App;
