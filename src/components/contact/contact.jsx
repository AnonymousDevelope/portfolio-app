import React from "react"
const Contact = () => {
  return (
    <div className="container-fluid basis-shadow main position-relative overflow-auto h-auto">
       <div className="title_content fw-1 fs-1"> Contact Window</div>
      <div className="contact ">
            <form action="" method="get" className="form mx-auto ">
                <div className="row mt-2">
                  <input type="text" name="name" id="" placeholder="Full name..." className="form-control" />
                </div>
                <div className="row mt-2">
                  <input type="email" name="email" id="" placeholder="name@example.com" className="form-control" />
                </div>
                <div className="row mt-2">
                  <input type="text" name="family" id="" placeholder="Familiyangizni kiriting..." className="form-control" />
                </div>
                <div className="row mt-2">
                  <textarea placeholder="Write Message" name="" id="" cols="30" className="form-control" rows="10"></textarea>
                </div>
            </form>
      </div>
    </div>
  )
}

export default Contact