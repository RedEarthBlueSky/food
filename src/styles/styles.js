import { StatusBar } from 'react-native'

const em = 16

const parentStyles = {
  h1: {fontSize: 2*em},
  h2: {fontSize: 1.5*em},
  h3: {fontSize: 1.13*em},
  h4: {fontSize: em},
  p: {fontSize: em},
  h5: {fontSize: 0.83*em},
  h6: {fontSize: 0.67*em},
}

const wrapperStyles = {
  wrapper: {
    // backgroundColor: 'red',
    flex: 1,
    padding: 15,
    paddingTop: StatusBar.currentHeight,
  }
}

const searchStyles = {
  // ...parentStyles,
  backgroundStyle: {
    backgroundColor: '#abdbe3',
    borderRadius: 5,
    flexDirection: 'row',
    height: 50,
    justifyContent: 'center',
  },
  iconStyle: {
    alignSelf: 'center',
    color: 'grey',
    fontSize: 30,
    marginHorizontal: 15,
  },
  inputStyle: {
    flex: 1,
    fontSize: 1.13*em,
  },
}

export { parentStyles, searchStyles, wrapperStyles }