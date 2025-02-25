import { ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'
import { wrapperStyles } from '../styles/styles'

const Wrapper = ({children}) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={wrapperStyles.wrapper}>
        <ScrollView>
          {children}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default Wrapper