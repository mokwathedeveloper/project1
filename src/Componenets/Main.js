import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Main=()=> {
    return (
        <>
        <div class="container-fluid text-center mt-3">
  <h1>Welcome Everyone</h1>
  <p>Lorem ipsum...</p>
</div>
            <div className="container my-5">
                <div className="row">
                <div className="col-lg-3" >
                    <div className="card">
  <img src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Python</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-dark">Read More</a>
  </div>
</div>

  </div>
  <div className="col-lg-3" >
                    <div className="card">
  <img src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">JavaScript</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-dark">Read More</a>
  </div>
</div>

  </div>
  <div className="col-lg-3" >
                    <div className="card">
  <img src="https://images.pexels.com/photos/1597776/pexels-photo-1597776.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">React</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-dark">Read More</a>
  </div>
</div>

  </div>
  <div className="col-lg-3" >
                    <div className="card">
  <img src="https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Kotlin</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-dark">Read More</a>
  </div>
</div>

  </div>
  
                    </div>
                </div>
           
        </>
    )
}

export default Main;