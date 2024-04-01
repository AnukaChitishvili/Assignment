
import {useFormik} from 'formik'

const Modal = ({ data}) => {

  const formik = useFormik({
    initialValues: {
      dish_name: data?.dish_name ||  "",
      description: data?.description || "",
      score: data?.score || 0,
      price: data?.price || 0, 
      url: data?.url || "../../assets/item8.png",
      ingredients: data?.ingredients || []
    },
    onSubmit: (values) => {
       const body = JSON.stringify({
        ...values
      })
      fetch(`http://localhost:3000/menu`,{
        method: "POST",
        body
      })
    }
  })   

  


  return ( 
    <form onSubmit={formik.handleSubmit}>
    <div className="modal--container"> 
        <div className="modal--content">
          <label for='dish_name' className='label'>Dish Name</label>
       <input id='dish_name' name="dish_name" onChange={formik.handleChange} className="input" value={formik.values.dish_name} />
       <label for='description' className='label' >Description</label>
       <input  id='description'name="description" onChange={formik.handleChange} className="input" value={formik.values.description}/>
       <label for='score' className='label'>Score</label>
       <input id='score'name="score" onChange={formik.handleChange} className="input" value={formik.values.score}/>
       <label for='price' className='label'>Price</label>
       <input id='price' name="price" onChange={formik.handleChange} className="input" value={formik.values.price}/>
       <button type='submit' className="button">Submit</button>
       </div>
        </div>
        </form>
  )
}

export default Modal