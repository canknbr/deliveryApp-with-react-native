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
  description: {
    fontSize: 16,
    color: '#a9a9a9',
  },
  separator: {
    height: 1,
    backgroundColor: '#d3d3d3',
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 50,
  },
  quantity: {
    fontSize: 24,
    color: '#343a40',
    marginHorizontal: 10,
    fontWeight: 'bold',
    minWidth: 50,
    maxWidth: 100,
    textAlign: 'center',
  },
  buttonContainer: {
    backgroundColor: '#343a40',
    padding: 20,
    borderRadius: 5,
    marginVertical: 10,
    marginTop:"auto"
  },
  buttonText: {
    textAlign: 'center',
    color: '#d3d3d3',
    fontSize: 16,
  },
});
