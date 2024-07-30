import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'blue',
    width: '60%',
    marginTop: 20,
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  H1: {
    fontSize: 46,
  },
  H2: {
    fontSize: 36,
  },
  H3: {
    fontSize: 26,
  },
  P: {
    fontSize: 18,  
  },
  resultsContainer: {
    marginBottom: 10,
    marginLeft: 10,
  },
  resultName: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  resultsDetailsImage: {
    alignSelf: 'center',
    borderRadius: 5,
    height: 200,
    marginTop: 20,
    width: 300,
  },
  searchResultsImage: {
    borderRadius: 5,
    height: 150,
    width: 250,
  },
  searchResultsTitle: {
    flexDirection: 'row',  
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 30,
  },
  searchField: {
    flexDirection: 'row',
    backgroundColor: '#f0eeee',
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 15,
    marginTop: 10,
    padding: 10,
  },
  searchFieldText: {
    color: 'rgba(0, 0, 0, 0.5)',
    fontSize: 16,
    fontWeight: 'bold',
    left: 15,
  },
  searchIcon: {
    top: 8,
    left: 6,
  },
  textInputField: {
    color: 'rgba(0, 0, 0, 0.5)',
    fontSize: 22,
    marginLeft: 0,
    padding: 5,
    paddingLeft: 15,
    width: '90%',
  },
  textStyle: {
    fontSize: 26,
    margin: 10,
    marginBottom: 20,
    marginTop: 0,
    borderColor: 'black',
    borderWidth: 1,
    padding: 20,
  },
  titleStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  }
})

export default styles