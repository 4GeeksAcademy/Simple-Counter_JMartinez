import React from "react";



const Card = ({seg, min, hora, dia, meses, años}) => {
    return (
<div class="container text-center">
  <div class="d-flex justify-content-between flex-row-reverse bg-black text-white m-5 p-5 fs-1 rounded">
    <div class="col"> <p className="card-title" style={{fontFamily: 'Times New Roman'}} id="card"><strong>{seg}</strong></p></div>
    <div class="col"> <p className="card-title" style={{fontFamily: 'Times New Roman'}} id="card"><strong>{min}</strong></p></div>
    <div class="col"> <p className="card-title" style={{fontFamily: 'Times New Roman'}} id="card"><strong>{hora}</strong></p></div>
    <div class="col"> <p className="card-title" style={{fontFamily: 'Times New Roman'}} id="card"><strong>{dia}</strong></p></div>
    <div class="col"> <p className="card-title" style={{fontFamily: 'Times New Roman'}} id="card"><strong>{meses}</strong></p></div>
    <div class="col"> <p className="card-title" style={{fontFamily: 'Times New Roman'}} id="card"><strong>{años}</strong></p></div>
    <div class="col"> 
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
        </svg> 
    </div>
  </div> 
</div>



    );
}

export default Card; 