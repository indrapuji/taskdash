import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import React, {FC} from 'react';
import {Fonts} from '../styles/fonts';
import {Colors} from '../styles/colors';

const screenWidth = Dimensions.get('screen').width;

interface priorityCard {
  priority: number;
  index: number;
  title: string;
  desc: string;
  status: string;
}

const TaskCard: FC<priorityCard> = ({index, priority, title, desc, status}) => {
  return (
    <TouchableOpacity
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
        <View style={{width: screenWidth / 2}}>
          <Text numberOfLines={1} style={styles.cardText}>
            {title}
          </Text>
          <Text numberOfLines={1} style={styles.cardSub}>
            {desc}
          </Text>
        </View>
        <View style={{alignItems: 'flex-end'}}>
          <Text style={styles.cardText}>{status}</Text>
          <Text style={styles.cardSub}>14 April</Text>
        </View>
      </View>
    </TouchableOpacity>
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
    height: 60,
    justifyContent: 'center',
  },
  cardLabel: {
    position: 'absolute',
    height: 58,
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
  cardSub: {
    fontSize: 13,
    fontFamily: Fonts.poppinsRegular,
    color: Colors.textCardDisabled,
  },
});
