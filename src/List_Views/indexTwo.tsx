import React from 'react';
import {SectionList, StyleSheet, Text, View} from 'react-native';

const SectionListPage = () => {
  return (
      <View style={styles.container}>
          <SectionList
              sections={[
                  { title: 'D', data: ['Devin', 'David', 'Daniel'] },
                  { title: 'J', data: ['Jackson', 'James', 'Jimmy', 'Joel', 'Julissa', 'John'] }
              ]}
              renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
              renderSectionHeader={({ section }) => (
                  <Text style={styles.sectionHeader}>{section.title}</Text>
              )}
              keyExtractor={item => `basicListEntry-${item}`}
          />
      <Text>indexTwo</Text>
    </View>
  );
};

export default SectionListPage;

const styles = StyleSheet.create({
  container: {
    paddingTop: 22,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 15,
    fontWeight: 'bold',
    backgroundColor: 'red',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
