import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';

function App() {


  
  return (
   
      <div class="bg-dark d-flex align-items-center justify-content-around">
    <div class="container d-flex justify-content-center align-items-center flex-column flex-wrap m-2 text-center">
        <div
            class="row  bg-dark.bg-gradient border_gradient shadow-lg rounded-5 rounded-top-0 p-4 m-3  d-flex flex-wrap align-items-center justify-content-center gap-5 flex-column">

            {/* <!-- HEAD --> */}

            <div class="col m-2 p-1 d-flex align-items-center justify-content-around">
                <div class=" text-light  border-bottom border-danger">
                    <h3 class="fw-bold fst-italic text-center "><i class="bi bi-check-all p-2 m-2"></i>MY TODO LIST<i
                            class="bi bi-check-all p-2 m-2"></i></h3>
                </div>
            </div>

            {/* <!-- INPUT --> */}

            <div class="col m-2 p-1 d-flex align-items-center justify-content-around">
                <div class=" text-light row d-flex flex-wrap justify-content-center align-items-center p-2 m-2">
                    <div class="col m-2 p-2 boxes d-flex justify-content-around align-items-center">
                        <div class="row g-3 mt-2  d-flex justify-content-center align-items-center ">

                            <div class="col-auto m-2 p-2 d-flex align-items-center justify-content-around flex-wrap">
                                {/* <!-- <label for="staticEmail2" class="visually-hidden">TODO LIST<i class="bi bi-list-task"></i></label> --> */}
                                <input type="text" readonly class="form-control-plaintext text-light p-1" id="staticEmail2 "
                                    value="ADD TODO"/>
                            </div>
                            <div class="col-auto m-2 p-2 d-flex align-items-center justify-content-around flex-wrap">
                                {/* <!-- <label for="inputPassword2" class="visually-hidden">Todo Input</label> --> */}
                                <input type="text" class="form-control p-1" id="todoInput"
                                    placeholder=" Enter Todo"/>
                            </div>
                            <div class="col-auto m-2 p-2 d-flex justify-content-around align-items-center gap-2 flex-wrap">
                                <button  onclick="addTodo(); addTodoInDB();" class=" ms-2 btn btn-outline-success mb-3 p-1">ADD<i
                                        class="bi bi-plus-square p-2 "></i></button>
                                <button  onclick="deleteAll();" class="ms-2 btn btn-outline-warning mb-3 p-1">DELETE ALL<i
                                        class="bi bi-trash p-2"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- LIST --> */}

            <div class="col m-2 p-1 d-flex align-items-center justify-content-around">
                <div class=" text-light row d-flex flex-wrap justify-content-center align-items-center p-2 m-2">
                    <div class="col m-2 p-2 boxes d-flex justify-content-around">
                        <div class="row d-flex flex-wrap justify-content-center align-items-center p-2 m-2">
                            <div class="col m-2 p-2 bg-dark.bg-gradient text-light d-flex justify-content-around">
                                <div class="span bg-dark.bg-gradient">
                                <ul  class= "d-flex flex-column align-items-center justify-content-center gap-2 " id="list">



                                </ul>
                                </div>

                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
    
  );
}

export default App;
