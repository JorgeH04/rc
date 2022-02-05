import React, { useState } from 'react';
import Axios from 'axios';

export default function ProductsList({ title, products, rellenas }) {

	const [_id, set_Id] = useState(0);



	const deleteItem = (_id) => {
		let confirmDelete = window.confirm("Delete item forever?");
		if (confirmDelete) {
			fetch(`http://localhost:5000/prodtrece/delete/${_id}`, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						_id,
					}),
				})
				.then((response) => response.json())
				.then((item) => {
					this.props.deleteItemFromState(_id);
				})
				.catch((err) => console.log(err));
		}
	};


  return (

    <>
 


					 

                  		<div class="table-responsive">
									  <table class="table table-dark">
										<thead>
										  <tr>
 											<th> Producto </th>
											<th> Cantidad </th>
											<th> Total </th>
											<th> Eliminar </th>
											<th> Editar </th>
										  </tr>
										</thead>
										<tbody>
                    {products.map(post => (
										  <tr>
 											<td> {post.producto} </td>
											<td> {post.cantidad}  </td>
											<td>$  {post.total} </td>
											<td> <button  onClick={() => deleteItem(_id)}> <label class="badge badge-danger">Eliminar</label></button></td>
											<td><a href="/prodtrece/delete/<%= produn.id %>"> <label class="badge badge-warning">Editar</label></a></td>

										  </tr>
										  ))}
										</tbody>
									  </table>
									</div>
 									 
                     
								


    </>




  );
}
