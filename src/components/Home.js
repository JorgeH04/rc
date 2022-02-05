import React from "react";
import Hero from "./Hero";
import { Link } from "react-router-dom";

 import { ProductContext } from "../context/products";
import Loading from "../components/Products/Loading";
 import PageProducts from "../components/Products/PageProducts";
import Filters from "../components/Products/Filters";
export default function Home() {
  const { loading, products, rellenas, infantiles, premiun, frutales, ultim, porcentinicial } = React.useContext(ProductContext);

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
      <Link to="/products" class="nav-link" > 
          <span class="menu-icon">
              <i class="mdi mdi-file-document-box"></i>
          </span>
          <span class="menu-title">Ventas </span>
          </Link>
      </li>

   
      <li class="nav-item menu-items">
           
        <a class="nav-link" href="/proddoce/edit/61eca0551b08a2dab1af1d6c">
          <span class="menu-icon">
            <i class="mdi mdi-table-large"></i>
          </span>
          <span class="menu-title">Actualizar Stock</span>
        </a> 
      </li>

      <li class="nav-item menu-items">
        <a class="nav-link" href="/users/backend">
          <span class="menu-icon">
            <i class="mdi mdi-playlist-play"></i>
          </span>
          <span class="menu-title">Usuarios Autorizados</span>
        </a>
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
            <div class="row">
              <div class="col-12 grid-margin stretch-card">

 
           
               
              </div>
            </div>

            <h3>Datos generales</h3><br/>

            <div class="row">
              <div class="col-xl-3 col-sm-6 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-9">
                        <div class="d-flex align-items-center align-self-start">
                          <h3 class="mb-0">${ultim}</h3>


                            {porcentinicial  > 0? (
                                <p class="text-success ml-2 mb-0 font-weight-medium">+{porcentinicial}%</p>
                                ) : (
                                  <p class="text-danger ml-2 mb-0 font-weight-medium">{porcentinicial}%</p>
                              )}


                           

                        
 
                        </div>
                      </div>
                      <div class="col-3">

                          {porcentinicial  > 0? (
                                <div class="icon icon-box-success ">
                                    <span class="mdi mdi-arrow-top-right icon-item"></span>
                                </div> 
                                ) : (
                                  <div class="icon icon-box-danger">
                                    <span class="mdi mdi-arrow-bottom-left icon-item"></span>
                                 </div>
                              )}
                          
                      
                        
                      </div>
                    </div>
                    <h6 class="text-muted font-weight-normal">Recaudación de hoy</h6>
                  </div>
                </div>
              </div>


              <div class="col-xl-3 col-sm-6 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-9">
                        <div class="d-flex align-items-center align-self-start">
                          <h3 class="mb-0">332</h3>
                          <p class="text-success ml-2 mb-0 font-weight-medium"> </p>
                        </div>
                      </div>
                      <div class="col-3">
                         
                      </div>
                    </div>
                    <h6 class="text-muted font-weight-normal">Unidades vendidas</h6>
                  </div>
                </div>
              </div>
              
              <div class="col-xl-3 col-sm-6 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-9">
                        <div class="d-flex align-items-center align-self-start">
                          <h3 class="mb-0"> 32323</h3>
                          <p class="text-danger ml-2 mb-0 font-weight-medium"> </p>
                        </div>
                      </div>
                      <div class="col-3">
                       
                      </div>
                    </div>
                    <h6 class="text-muted font-weight-normal">Stock inicial</h6>
                  </div>
                </div>
              </div>
 
              <div class="col-xl-3 col-sm-6 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-9">
                        <div class="d-flex align-items-center align-self-start">
                          <h3 class="mb-0">6322</h3>
                          <p class="text-success ml-2 mb-0 font-weight-medium"> </p>
                        </div>
                      </div>
                      <div class="col-3">
                        
                      </div>
                    </div>
                    <h6 class="text-muted font-weight-normal">Stock remanente</h6>
                  </div>
                </div>
              </div>  






            </div>





        <h3>Stock de cada tipo de paleta</h3><br/>

            <div class="row">
               
  
                <div class="col-xl-3 col-sm-6 grid-margin stretch-card">
                  <div class="card">
                    <div class="card-body">
                      <div class="row">
                        <div class="col-9">
                          <div class="d-flex align-items-center align-self-start">
                            <h3 class="mb-0">{rellenas}</h3>
                            <p class="text-success ml-2 mb-0 font-weight-medium"> </p>
                          </div>
                        </div>
                        <div class="col-3">
                           
                        </div>
                      </div>
                      <h6 class="text-muted font-weight-normal">Paletas Rellenas</h6>
                    </div>
                  </div>
                </div>
                
                <div class="col-xl-3 col-sm-6 grid-margin stretch-card">
                  <div class="card">
                    <div class="card-body">
                      <div class="row">
                        <div class="col-9">
                          <div class="d-flex align-items-center align-self-start">
                            <h3 class="mb-0">{infantiles}</h3>
                            <p class="text-danger ml-2 mb-0 font-weight-medium"> </p>
                          </div>
                        </div>
                        <div class="col-3">
                         
                        </div>
                      </div>
                      <h6 class="text-muted font-weight-normal">Paletas Infantiles</h6>
                    </div>
                  </div>
                </div>
  
                <div class="col-xl-3 col-sm-6 grid-margin stretch-card">
                  <div class="card">
                    <div class="card-body">
                      <div class="row">
                        <div class="col-9">
                          <div class="d-flex align-items-center align-self-start">
                            <h3 class="mb-0">{premiun}</h3>
                            <p class="text-success ml-2 mb-0 font-weight-medium"> </p>
                          </div>
                        </div>
                        <div class="col-3">
                          
                        </div>
                      </div>
                      <h6 class="text-muted font-weight-normal">Paletas Premiun</h6>
                    </div>
                  </div>
                </div>
  
  
                <div class="col-xl-3 col-sm-6 grid-margin stretch-card">
                    <div class="card">
                      <div class="card-body">
                        <div class="row">
                          <div class="col-9">
                            <div class="d-flex align-items-center align-self-start">
                              <h3 class="mb-0">{frutales}</h3>
                              <p class="text-success ml-2 mb-0 font-weight-medium"> </p>
                            </div>
                          </div>
                          <div class="col-3">
                            
                          </div>
                        </div>
                        <h6 class="text-muted font-weight-normal">Paletas Frutales</h6>
                      </div>
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