import React, { useState } from 'react';
import Axios from 'axios';

export default function VentaForm() {

  // all expenses, add expense
  const [post, setPost] = useState({
    producto: '',
    cantidad: '',
    rellenas: '',
    frutales: '',
    infantiles: '',
    premiun: '',
    total: '',
    fecha: '',
    _id: '',
    post: []
   
  });
  


  // const handleSubmit = (e) => {
  //   e.preventDefault();
    
  //   Axios({
  //     method: "post",
  //     url: "http://localhost:5000/prodtrece/new-prodtrece",
  //     data: JSON.stringify(post),
  //     headers: { "Content-Type": "application/json" },
  //   })
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       if (error.response) {
  //         console.log(error.response.data);
  //       }
  //     });
  // };

  async function makePost(producto, cantidad, rellenas, frutales, infantiles, premiun, total, fecha) {
    const { data } = await Axios.post('http://localhost:5000/prodtrece/new-prodtrece', {
      producto,
      cantidad,
      rellenas,
      frutales,
      infantiles,
      premiun,
      total,
      fecha
    });
    setPost(data.post);
    console.log(data.post)
   }


  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await makePost(post);
     } catch (error) {
       console.log(error);
    }
  }

  const handleChange = (e) => {
    setPost({ 
      ...post, 
      [e.target.name]: e.target.value });
  };


  // function handleChange(e) {
  //   setPost({
  //     ...post,
  //     [e.target.name]: e.target.value
  //   });
  // }



 

   


  return (
 
 
<div>

<div class="page-header">
<h3 class="page-title">Todas las ventas</h3>

</div>

<div class="row">
<div class="col-md-8 grid-margin stretch-card">
  <div class="card">
    <div class="card-body">
      <h4 class="card-title">Agregar productos vendidos </h4>
      <p class="card-description">   </p>
      <form onSubmit={handleSubmit} class="forms-sample">
        <div class="form-group">
          <label for="exampleInputUsername1">Productos</label>
          <input 
          type="text" 
          name="producto"  
          onChange={handleChange} 
          value={post.producto}
          class="form-control" 
          id="exampleInputUsername1" 
          placeholder=" "/>
        </div>
         <div class="form-group">
            <label for="exampleInputEmail1">Cantidad</label>
            <input 
            type="text" 
            name="cantidad" 
            onChange={handleChange} 
            value={post.cantidad}
            class="form-control" 
            id="exampleInputEmail1" 
            placeholder=" "/>
        </div>
     

        <div class="form-group">
              <label for="exampleInputPassword1">rellenas</label>
              <input 
              type="text" 
              name="rellenas"  
              onChange={handleChange} 
              value={post.rellenas}
              class="form-control" 
              id="exampleInputPassword1" 
              placeholder=" "/>
       </div>

       <div class="form-group">
              <label for="exampleInputPassword1">frutales</label>
              <input 
              type="text" 
              name="frutales" 
              onChange={handleChange} 
              value={post.frutales}
              class="form-control" 
              id="exampleInputPassword1" 
              placeholder=" "/>
      </div>

      <div class="form-group">
              <label for="exampleInputPassword1">infantiles</label>
              <input 
              type="text" 
              name="infantiles"  
              onChange={handleChange} 
              value={post.infantiles}
              class="form-control" 
              id="exampleInputPassword1" 
              placeholder=" "/>
      </div>

      <div class="form-group">
              <label for="exampleInputPassword1">Premiun</label>
              <input 
              type="text" 
              name="premiun"  
              onChange={handleChange} 
              value={post.premiun}
              class="form-control" 
              id="exampleInputPassword1" 
              placeholder=" "/>
      </div>




        <div class="form-group">
          <label for="exampleInputConfirmPassword1">Total</label>
          <input 
          type="text" 
          name="total" 
          onChange={handleChange} 
          value={post.total}
          class="form-control" 
          id="exampleInputConfirmPassword1" 
          placeholder=" "/>

        </div>
        <div class="form-check form-check-flat form-check-primary">
         
        </div>
        <button  class="btn btn-primary mr-2">Agregar</button>
       </form>
    </div>
  </div>
</div>
</div>  

 

</div>

         
  );
}




