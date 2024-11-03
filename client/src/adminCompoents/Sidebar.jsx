import React from 'react'

import './sidebar.css'

function Sidebar() {
    return (


<div>

<nav class="navbar navbar-light  fixed-top" style={{backgroundColor:'#46494b',height:'13%'}}>
<div class="container-fluid d-flex justify-content-start">
    <button class="navbar-toggler me-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebar" aria-controls="sidebar" style={{width:'5%',height:'5%'}}>
        <span class="navbar-toggler-icon"></span>
    </button>
    {/* <i class='bx bxs-like bx-spin bx-lg'></i> */}
    <i class='p-1 bx bxs-chevrons-left bx-fade-left '></i>
  <h5>Admin Panel</h5>
</div>
</nav>

<div class="offcanvas offcanvas-start bg-dark text-white" tabindex="-1" id="sidebar">
<div class="offcanvas-header text-white" >

    <h5 class="offcanvas-title " id="sidebarLabel">Admin Panel</h5>
    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
</div>
<div class="offcanvas-body">
    <ul class="nav flex-column">
        <li class="items nav-item">
            <a class="nav-link text-white" href="/admin-users">
                <i class='bx bxs-user-circle'></i>
                <span class="ms-2">Users</span>
            </a>
        </li>
        <li class=" items nav-item">
            <a class="nav-link text-white" href="/admin-category">
                <i class='bx bxs-grid-alt'></i>
                <span class="ms-2">Categories</span>
            </a>
        </li>
        <li class=" items nav-item">
            <a class="nav-link text-white" href="/admin-products">
            <i class='bx bxs-cube'></i>
                <span class="ms-2">Products</span>
            </a>
        </li>
  
  
    </ul>
</div>
</div>

<div class="container-fluid">
<div class="row">
    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4 offset-md-2">
        ndnnd
       
    </main>
</div>
</div>
</div>
    )
}

export default Sidebar
