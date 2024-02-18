import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6e0c38',
  },
  topBar: {
    height: 100,
    backgroundColor: '#42001e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBarImage: {
    width: '90%',
    height: '100%',
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomBar: {
    height: 70,
    backgroundColor: '#42001e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cocktailCard: {
    flexDirection: 'row',
    backgroundColor: '#fffae6',
    borderRadius: 10,
    overflow: 'hidden',
    margin: 10,
    elevation: 5,
  },
  cocktailImage: {
    flex: 1,
    resizeMode: 'contain',
  },
  cocktailDetails: {
    flex: 1,
    padding: 10,
  },
  cocktailName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cocktailDescription: {
    fontSize: 14,
  },
  flatListContainer: {
    flex: 1,
  },
  datosAl:{
    color: '#ffee2e',
    fontFamily: 'serif',
    fontStyle: 'italic',
  },
});

export { styles };