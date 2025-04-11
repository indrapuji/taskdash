import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {Fonts} from '../styles/fonts';
import {Colors} from '../styles/colors';

interface priorityCard {
  priority: number;
  index: number;
  desc: string;
  status: string;
}

const TaskCard: FC<priorityCard> = ({index, priority, desc, status}) => {
  return (
    <View
      style={[
        styles.cardContainer,
        {
          backgroundColor: index % 2 == 0 ? Colors.evenColor : Colors.oddColor,
        },
      ]}>
      <View
        style={[
          styles.cardLabel,
          {
            backgroundColor:
              priority == 1
                ? Colors.lowColor
                : priority == 2
                ? Colors.normalColor
                : '#FA3B06',
            width: priority == 1 ? 20 : priority == 2 ? 30 : 40,
          },
        ]}
      />
      <View style={styles.textPosition}>
        <Text style={styles.cardText}>{desc}</Text>
        <Text style={styles.cardText}>{status}</Text>
      </View>
    </View>
  );
};

export default TaskCard;

const styles = StyleSheet.create({
  cardContainer: {
    paddingLeft: 40,
    paddingVertical: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    position: 'relative',
    height: 40,
    justifyContent: 'center',
  },
  cardLabel: {
    position: 'absolute',
    height: 38,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  textPosition: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  cardText: {
    fontSize: 15,
    fontFamily: Fonts.poppinsMedium,
    color: Colors.textCardColor,
  },
});
