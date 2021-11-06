import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { Text } from '@ui-kitten/components'
import { LAYOUT_SHADOW } from '../../../styles/misc'

const Selection: React.FC<{ image: any; color: string }> = ({
  image,
  color,
}) => {
  return (
    <View style={styles.selection(color)}>
      <Text style={styles.selectionText} category={'s1'}>
        Axie
      </Text>
      <Image source={image} style={styles.image} />
    </View>
  )
}

const styles = StyleSheet.create({
  selection: (color: string) => ({
    backgroundColor: color,

    flexDirection: 'row',
    borderRadius: 25,
    height: 50,
    ...LAYOUT_SHADOW,
    alignItems: 'center',
    justifyContent: 'center',

    width: '48%',
  }),
  selectionText: {
    color: '#fff',
  },
  image: { width: 20, height: 20 },
})

export default Selection
