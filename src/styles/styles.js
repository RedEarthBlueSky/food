const em = 18

const parentStyles = {
  h1: {fontSize: 2*em},
  h2: {fontSize: 1.5*em},
  h3: {fontSize: 1.13*em},
  h4: {fontSize: em},
  p: {fontSize: em},
  h5: {fontSize: 0.83*em},
  h6: {fontSize: 0.67*em},
}

const searchStyles = {
  // ...parentStyles,
  backgroundStyle: {
    backgroundColor: '#abdbe3',
    borderColor: 'grey',
    borderRadius: 5,
    borderWidth: 1,
    flexDirection: 'row',
    height: 50,
    justifyContent: 'center',
    marginHorizontal: 17,
    marginTop: 15,
    paddingLeft: 10,
  },
  iconStyle: {
    alignSelf: 'center',
    color: 'grey',
    fontSize: 30,
  },
  inputStyle: {
    flex: 1,
    fontSize: 1.13*em,
  },
}

export { parentStyles, searchStyles }