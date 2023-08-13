import React from "react";



const But = ({ reset }) => {


    return (

        <div class=" card d-flex">

            <div className="row d-flex justify-content-between align-items-center mt-5">

                <div className="">
                    <div class="col"> <button type="button" onClick={reset} class="btn btn-primary ">Reset</button></div>
                </div>


            </div>

        </div>


    );
}

export default But; 