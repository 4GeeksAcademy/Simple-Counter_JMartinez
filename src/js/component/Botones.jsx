import React from "react";



const But = ({ reset }) => {


    return (

        <div class=" card d-flex">

            <div className="row d-flex justify-content-between align-items-center mt-5">

                <div className="">
                    <div class="col"> <button type="button" onClick={reset} class="btn btn-primary ">Primary</button></div>
                </div>


                <div class="row bg-black text-white  mx-1 pt-5 px-5 pb-2 rounded-top">

                    <div class="col"> <input type="text" id="años" placeholder=" años" /></div>
                    <div class="col"> <input type="text" id="text" placeholder=" meses" /></div>
                    <div class="col"><input type="text" id="text" placeholder=" dias" /></div>
                    <div class="col"> <input type="text" id="text" placeholder=" horas" /></div>
                    <div class="col"> <input type="text" id="text" placeholder=" minutos" /></div>
                    <div class="col"> <input type="text" id="text" placeholder=" segundos" /></div>


                </div>
            </div>
            <div className="">
                <button type="button" class="btn btn-primary m-3">Primary</button>
                <button type="button" class="btn btn-primary m-3">Primary</button>
                <button type="button" class="btn btn-primary m-3">Primary</button>
            </div>
        </div>


    );
}

export default But; 