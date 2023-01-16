
// ************************************************get***********************************************

// export const getKiffsData = () => async (dispatch) => {
//   try {
//     const { data } = await axios.get(`${base_URL}/kiff`)
//     if (data?.data?.success) {
//       dispatch({
//         type: GET_KIFFS_DATA,
//         payload: data?.data?.kiffData
//       })
//     }
//   }
//   catch (error) {
//     console.log("", error)
//   }
// };
// ***********************************************post************************************************** 
// export const userLogin = (data, setLoading, setError,refRBSheet) => async (dispatch) => {
//   try {
//     setLoading(true)
//     const response = await axios.post(`${base_URL}/user/login`, data)
//     console.log(response)
//     if (response?.data?.data?.success) {
//       refRBSheet?refRBSheet.current.close():null
//       setTimeout(()=>{
//         setLoading(false)
//         dispatch({
//           type: LOG_IN,
//           payload: response?.data?.data
//         })
//       },200)
//     }
//   }
//   catch (error) {
//     setLoading(false)
//     setError(true)
//     console.log(error)
//   }
// };
// ***********************************************put**************************************************
// export const profileUpdate = (data, userId, setPage) => async (dispatch) => {
//   try {
//     const response = await axios.put(`${base_URL}/user/${userId}`, data)
//     console.log("5data",response?.data?.data)
//     // console.log(response)
//     if (response?.data?.data) {
//       setPage(1)
 
//       dispatch({
//         type: CONSULT_DATA,
//         payload: response?.data?.data.data,
//       })
//     }
//   }
//   catch (error) {
//     console.log(error)

//   }
// };
// ***********************************************delete**************************************************
// export const Delete_User = (id, token) => async (dispatch) => {

//   try {
//     const response = await axios.delete(`${base_URL}/user/${id}`

//     )
//     if (response?.data?.data?.success) {
//       dispatch({
//         type: LOG_OUT
//       })

//     }
//   }
//   catch (error) {
//     console.log("deleting", error)
//   }
// };

// ***********************************************Image Upload**************************************************
// export const imageUpload = (data,setReminder) => async (dispatch) => {

//   var bodyFormData = new FormData();
//   bodyFormData.append('filePush', {
//     uri: data.uri,
//     type: data.type,
//     name: data.fileName

//   });

//   axios.post(`${base_URL}/uploadImage/?type=user`, bodyFormData, {
//     headers: {
//       'Content-Type': 'multipart/form-data'
//     }
//   })
//     .then((response) => {
//       console.log(response)
//       // setReminder(true)
//       dispatch(
//         {
//           type: ID_CARD_IMAGE,
//           payload: response.data
//         }
//       )
//     })
//     .catch(err => {
//       console.log("image error")
   
//       setReminder(true)
//     })

// };
