import React from "react";
import { ProductContext } from "../context/products";
import Loading from "../components/Products/Loading";
 import EstadRender from "../components/Products/ActualizarRender";
import Filters from "../components/Products/Filters";
import { Link } from 'react-router-dom'


export default function Estadisticas() {
  const { loading, products } = React.useContext(ProductContext);

  if (loading) {
    return <Loading />;
  }
  return (
    <>

<div class="container-scroller">


  <nav class="sidebar sidebar-offcanvas" id="sidebar">
    
    <div class="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
      
        <h2>Nimico Panel </h2>
      
      <a class="sidebar-brand brand-logo-mini" href="index.html"><img src="/assets/images/logo-mini.svg" alt="logo" /></a>
    </div> 
    <ul class="nav">
      <li class="nav-item profile">
        <div class="profile-desc">
          <div class="profile-pic">
            <div class="count-indicator">
                <img class="img-xs rounded-circle " src="/assets/images/faces/face15.jpg" alt=""/>
              <span class="count bg-success"></span>
            </div>
            <div class="profile-name">
              <h5 class="mb-0 font-weight-normal">ffd </h5>
              
            </div>
          </div>
        
        </div>
      </li>
      <li class="nav-item nav-category">
        <span class="nav-link">Barra de navegación</span>
      </li>
      <li class="nav-item menu-items">
       <Link class="nav-link" to="/"> 
          <span class="menu-icon">
            <i class="mdi mdi-speedometer"></i>
          </span>
          <span class="menu-title">Inicio</span>
        </Link>
      </li>
     

      <li class="nav-item menu-items">
      <Link class="nav-link" to="/products"> 
          <span class="menu-icon">
              <i class="mdi mdi-file-document-box"></i>
          </span>
          <span class="menu-title">Ventas </span>
          </Link>
      </li>

   
      <li class="nav-item menu-items">
      <Link class="nav-link" to="/proddoce/edit/61eca0551b08a2dab1af1d6c">   
         
          <span class="menu-icon">
            <i class="mdi mdi-table-large"></i>
          </span>
          <span class="menu-title">Actualizar Stock</span>
          </Link>
      </li>

      <li class="nav-item menu-items">
      <Link class="nav-link" to="/users/backend"> 
           <span class="menu-icon">
            <i class="mdi mdi-playlist-play"></i>
          </span>
          <span class="menu-title">Usuarios Autorizados</span>
          </Link>
      </li>

  
     
   
      <li class="nav-item menu-items">
      <Link to="/estadisticas" class="nav-link" > 

          <span class="menu-icon">
              <i class="mdi mdi-chart-bar"></i>
          </span>
          <span class="menu-title">Estadísticas</span>
           
          </Link>

    <div class="collapse" id="auth">
          <ul class="nav flex-column sub-menu">
            <li class="nav-item"> <a class="nav-link" href="/variaciondiaria/1"> Diarias</a></li>
            <li class="nav-item"> <a class="nav-link" href="#"> Mensuales </a></li>
            <li class="nav-item"> <a class="nav-link" href="#"> Anuales </a></li>

          </ul>
        </div>  
      </li>
       
    </ul>
  </nav>



   <div class="container-fluid page-body-wrapper">
     <nav class="navbar p-0 fixed-top d-flex flex-row">
      <div class="navbar-brand-wrapper d-flex d-lg-none align-items-center justify-content-center">
        <a class="navbar-brand brand-logo-mini" href="/">  Nimico Panel</a>
      </div>
      <div class="navbar-menu-wrapper flex-grow d-flex align-items-stretch">
        <button class="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
          <span class="mdi mdi-menu"></span>
        </button>
        <ul class="navbar-nav w-100">
          <li class="nav-item w-100">
          
          </li>
        </ul>
        <ul class="navbar-nav navbar-nav-right">
          
            <li class="nav-item dropdown">
              <a class="nav-link" id="profileDropdown" href="#" data-toggle="dropdown">
                <div class="navbar-profile">
                  
                  <p class="mb-0 d-none d-sm-block navbar-profile-name">dfd</p>
                  <i class="mdi mdi-menu-down d-none d-sm-block"></i>
                </div>
              </a>
              <div class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="profileDropdown">
               
            
                <div class="dropdown-divider"></div>
                <a class="dropdown-item preview-item" href="/users/logout">
                  <div class="preview-thumbnail">
                    <div class="preview-icon bg-dark rounded-circle">
                      <i class="mdi mdi-logout text-danger"></i>
                    </div>
                  </div>
                  <div class="preview-item-content">
                    <p class="preview-subject mb-1">Salir</p>
                  </div>
                </a>

              </div>
            </li>
          </ul>
          <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
            <span class="mdi mdi-format-line-spacing"></span>
          </button>
        </div>
      </nav>









    		 
      <div class="main-panel">
			<div class="content-wrapper">
						<div class="col-lg-12 grid-margin stretch-card" >
								<div class="card">
								  <div class="card-body">
									<h4 class="card-title">Ventas</h4>
                     <ActualizarRender />
                 </div>
              </div>
          </div>
      </div>
   </div>
					 
 					 



            </div>
      </div>

    </>
  );
}