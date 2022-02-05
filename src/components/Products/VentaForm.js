import React, { Component } from 'react'
//import axios from 'axios'

export default class VentaForm extends Component {
    constructor() {
    super();
    this.state = {
          producto: '',
          cantidad: '',
          rellenas: '',
          frutales: '',
          infantiles: '',
          premiun: '',
          total: '',
          fecha: '',
          _id: '',
          posts: []
        
       
      };
      this.handleChange = this.handleChange.bind(this);
      this.addPost = this.addPost.bind(this);

    }

   addPost(e){
    e.preventDefault();
    if(this.state._id) {
      fetch(`http://localhost:5000/ventasdiarias`, {
        method: 'PUT',
          //body: JSON.stringify(this.state),
          body: JSON.stringify({
            producto: this.state.producto,
            rellenas: this.state.rellenas,
            frutales: this.state.frutales,
            premiun: this.state.premiun,
            infantiles: this.state.infantiles,
            total: this.state.total,
            fecha: this.state.fecha 

          }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data => {
          this.setState({producto: '', cantidad: '', rellenas: '', frutales: '', premiun: '', infantiles: '', total: '', fecha: '',_id: '' });
          this.fetchPosts();
        });

    }else{
           // fetch('https://stelenapp.herokuapp.com/api/post/add',{       
            fetch('http://localhost:5000/api/post/prodtrece/new-prodtrece',{
              method: 'POST',
              body: JSON.stringify(this.state),
          
              headers: {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json'
              }
            })
            .then(res => res.json(res))  
            .then(data => {
                console.log(data)
                this.setState({producto: '', cantidad: '', rellenas: '', frutales: '', premiun: '', infantiles: '', total: '', fecha: '',_id: '' });
                this.fetchPosts();
     
            })
            .catch(err => console.error(err));
            console.log(this.state);

    }
 
      
   }

   componentDidMount() {
    this.fetchPosts();

  }

    fetchPosts   ()   {

      fetch('http://localhost:5000/api/post/ventasdiarias')
     .then(res => res.json())
     .then(data => {
       console.log(data);
       this.setState({posts: data});
       console.log(this.state.posts)
     });

     
 }

  deletePost(_id){ 
       // fetch(`https://stelenapp.herokuapp.com/api/post/delete/${_id}`, {
          fetch(`http://localhost:5000/api/post/delete/${_id}`, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            this.fetchPosts();
          });
      
    }


    editPost(_id) {
      fetch(`http://localhost:5000/api/post/${_id}`)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          this.setState({
             producto: data.producto,
            rellenas: data.rellenas,
            frutales: data.frutales,
            premiun: data.premiun,
            infantiles: data.infantiles,
            total: data.total,
            fecha: data.fecha,
            _id: data._id
          });
        });
    }



   handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

    render() {
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
      <form onSubmit={this.addPost} class="forms-sample">
        <div class="form-group">
          <label for="exampleInputUsername1">Productos</label>
          <input 
          type="text" 
          name="producto"  
          onChange={this.handleChange} 
          value={this.state.producto}
          class="form-control" 
          id="exampleInputUsername1" 
          placeholder=" "/>
        </div>
         <div class="form-group">
            <label for="exampleInputEmail1">Cantidad</label>
            <input 
            type="text" 
            name="cantidad" 
            onChange={this.handleChange} 
            value={this.state.cantidad}
            class="form-control" 
            id="exampleInputEmail1" 
            placeholder=" "/>
        </div>
     

        <div class="form-group">
              <label for="exampleInputPassword1">rellenas</label>
              <input 
              type="text" 
              name="rellenas"  
              onChange={this.handleChange} 
              value={this.state.rellenas}
              class="form-control" 
              id="exampleInputPassword1" 
              placeholder=" "/>
       </div>

       <div class="form-group">
              <label for="exampleInputPassword1">frutales</label>
              <input 
              type="text" 
              name="frutales" 
              onChange={this.handleChange} 
              value={this.state.frutales}
              class="form-control" 
              id="exampleInputPassword1" 
              placeholder=" "/>
      </div>

      <div class="form-group">
              <label for="exampleInputPassword1">infantiles</label>
              <input 
              type="text" 
              name="infantiles"  
              onChange={this.handleChange} 
              value={this.state.infantiles}
              class="form-control" 
              id="exampleInputPassword1" 
              placeholder=" "/>
      </div>

      <div class="form-group">
              <label for="exampleInputPassword1">Premiun</label>
              <input 
              type="text" 
              name="premiun"  
              onChange={this.handleChange} 
              value={this.state.premiun}
              class="form-control" 
              id="exampleInputPassword1" 
              placeholder=" "/>
      </div>




        <div class="form-group">
          <label for="exampleInputConfirmPassword1">Total</label>
          <input 
          type="text" 
          name="total" 
          onChange={this.handleChange} 
          value={this.state.total}
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



        

        )
    }
}







		
