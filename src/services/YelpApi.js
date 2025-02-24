//  Keys Details
const MY_CLIENT_ID = 'QgksCOeHrthu_Z51RTVCyg'
const MY_API_KEY = 'hgDaRlpzfH7M9FM6ntoWnTJNulYa_9mXyHTRV8DxYHkxD5HNc8pi33s2v_EiQylH8vy46Xy4lFsPKd0beykcJB9pHTudL3UrTb0q9bPFqxaSVie4xlUQ_SqtQp28Z3Yx'
const COURSE_API_KEY = 'KYa0WJPuoVaE1XNx5pClnHPalw7NPWWgClaUkWG6_2r5nj5CK2bvEeSLlUteebd_ODDrFnqhppSGx0ZUICWEEa663gqcPY7p_KX3evAq0r7BVnlm7r9vHqbhZoKKZ3Yx'
//  search - string - required:  This endpoint returns up to 240 businesses 
// with some basic information based on the provided search criteria.
const GET_BUSINESS_DETAILS = (business) => {
  return `https://api.yelp.com/v3/businesses/${business}`
}


