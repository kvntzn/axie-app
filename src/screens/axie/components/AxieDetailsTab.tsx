import React from 'react'
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import { Layout, Text, Input, Divider, useTheme } from '@ui-kitten/components'

const AxieDetailsTab: React.FC<{
  value: number
  onChangeItem: (index: number) => void
}> = ({ value, onChangeItem }) => {
  const theme = useTheme()

  const renderUnderLine = (index: number) => {
    return (
      index === value && (
        <Divider
          style={{
            backgroundColor: theme['color-primary-default'],
            height: 4,
          }}
        />
      )
    )
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.item} onPress={() => onChangeItem(0)}>
        <View style={styles.upper}>
          {/* <Image
            source={require('../../../../assets/axie.png')}
            style={{ width: 24, height: 24 }}
          /> */}
          <Text category={'s1'}>Info</Text>
        </View>
        {renderUnderLine(0)}
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={() => onChangeItem(1)}>
        <View style={styles.upper}>
          {/* <Image
            source={require('../../../../assets/land.png')}
            style={{ width: 24, height: 24 }}
          /> */}
          <Text category={'s1'}>Abilities</Text>
        </View>
        {renderUnderLine(1)}
      </TouchableOpacity>

      {/* <TouchableOpacity style={styles.item} onPress={() => onChangeItem(2)}>
        <View style={styles.upper}>
          <Image
            source={require('../../../../assets/item.png')}
            style={{ width: 24, height: 24 }}
          />
          <Text category={'s1'}>Items</Text>
        </View>
        {renderUnderLine(2)}
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={() => onChangeItem(3)}>
        <View style={styles.upper}>
          <Image
            source={require('../../../../assets/bundle.png')}
            style={{ width: 24, height: 24 }}
          />
          <Text category={'s1'}>Bundles</Text>
        </View>
        {renderUnderLine(3)}
      </TouchableOpacity> */}
    </View>
  )
}

export default AxieDetailsTab

const styles = StyleSheet.create({
  container: { margin: 16, flexDirection: 'row' },
  item: {
    marginRight: 16,
  },
  upper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
})
