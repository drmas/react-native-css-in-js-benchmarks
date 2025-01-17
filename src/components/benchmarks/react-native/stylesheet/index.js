import React from 'react';
import {ScrollView, StyleSheet, Text, View, ViewPropTypes} from 'react-native';

import * as colors from '../../../../utils/colors';
import {getCellColor, toPercent} from '../../../../utils/helpers';
import {TablePropTypes} from '../../../../utils/types';

const styles = StyleSheet.create({
  table: {},
  row: {
    flexDirection: 'row',
  },
  cell: {
    flex: 1,
    padding: 10,
  },
  text: {
    textAlign: 'center',
    color: colors.white,
  },
});

const TableComponent = ({table, ...props}) => (
  <ScrollView
    removeClippedSubviews={false}
    {...props}
    style={[styles.table, props.style]}>
    {table.map((row, rowIndex) => (
      <View key={`row-${rowIndex}`} style={styles.row}>
        {row.map((value, columnIndex) => (
          <View
            key={`row-${rowIndex}-column-${columnIndex}`}
            style={[
              styles.cell,
              {
                backgroundColor: getCellColor(parseFloat(value)),
              },
            ]}>
            <Text numberOfLines={1} style={styles.text}>
              {toPercent(value)}
            </Text>
          </View>
        ))}
      </View>
    ))}
  </ScrollView>
);

TableComponent.key = 'react-native-stylesheet-table';
TableComponent.title = 'React Native (StyleSheet)';

TableComponent.propTypes = {
  style: ViewPropTypes.style,
  table: TablePropTypes.isRequired,
};

export default TableComponent;
