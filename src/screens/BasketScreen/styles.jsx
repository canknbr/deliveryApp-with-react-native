import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  page: {
    flex: 1,

    paddingVertical: 50,
    paddingHorizontal: 10,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#343a40',
  },
  yourItems: {
    fontSize: 16,
    color: '#343a40',
    marginVertical: 10,
    fontWeight: 'bold',
  },
  separator: {
    height: 1,
    backgroundColor: '#d3d3d3',
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
  },
  quantityContainer: {
    backgroundColor: '#d3d3d3',
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginRight: 20,
  },
  buttonContainer: {
    backgroundColor: '#343a40',
    padding: 20,
    borderRadius: 5,
    marginVertical: 10,
    marginTop: 'auto',
  },
  buttonText: {
    textAlign: 'center',
    color: '#d3d3d3',
    fontSize: 16,
  },
});
