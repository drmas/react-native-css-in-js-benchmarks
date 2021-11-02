import React from 'react';
import {ScrollView} from 'react-native';
import {createBox, createText, ThemeProvider} from '@shopify/restyle';

// See the "Defining Your Theme" readme section below
import theme, {Theme} from './theme';
import {toPercent} from '../../../utils/helpers';

const Box = createBox<Theme>();
const Text = createText<Theme>();

const Table = ({table, ...props}) => {
  return (
    <ScrollView removeClippedSubviews={false} {...props}>
      {table.map((row, rowIndex) => (
        <Box key={`row-${rowIndex}`} flexDirection="row">
          {row.map((value, columnIndex) => (
            <Box
              flex={1}
              padding="s"
              backgroundColor={getColor(value)}
              key={`row-${rowIndex}-column-${columnIndex}`}>
              <Text numberOfLines={1} color="text">
                {toPercent(value)}
              </Text>
            </Box>
          ))}
        </Box>
      ))}
    </ScrollView>
  );
};

const getColor = (value: number) => {
  return `color_${(value * 1000).toFixed(0)}`;
};

const TableComponent = props => {
  return (
    <ThemeProvider theme={theme}>
      <Table {...props} />
    </ThemeProvider>
  );
};

TableComponent.key = 'restyle-table';
TableComponent.title = 'Restyle';

export default TableComponent;
