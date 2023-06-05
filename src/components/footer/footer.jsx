import { Component } from "react"
import {Contact} from "../"
class Footer extends Component {
    render() {
        return (
            <>
                <footer>
                    <div className="conatiner basis-shadow text-white bg-dark position-sticky bottom-0 end-0 overlow-hidden">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="title">
                                    About Us
                                </div>
                                <div className="info">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quae magnam qui deleniti. Nobis, at repellat assumenda perspiciatis sed hic dolores veniam velit totam nemo culpa fuga incidunt, animi odio!
                                </div>
                                <div className="row p-3 icons">
                                    <div className="col-md">
                                        <a href="#" className="nav-link">
                                        <i className="fa fa-brands fs-2 fa-telegram"></i>
                                        </a>
                                    </div>
                                    <div className="col-md">
                                        <a href="#" className="nav-link">
                                        <i className="fa fa-brands fs-2 fa-linkedin"></i>
                                        </a>
                                    </div>
                                    <div className="col-md">
                                        <a href="#" className="nav-link">
                                        <i className="fa fa-brands fs-2 fa-odnoklassniki"></i>
                                        </a>
                                    </div>
                                    <div className="col-md">
                                        <a href="#" className="nav-link">
                                        <i className="fa fa-brands fs-2 fa-facebook"></i>
                                        </a>
                                    </div>
                                    <div className="col-md">
                                        <a href="#" className="nav-link">
                                        <i className="fa fa-brands fs-2 fa-instagram"></i>
                                        </a>
                                    </div>
                                    <div className="col-md">
                                        <a href="#" className="nav-link">
                                        <i className="fa fa-brands fs-2 fa-whatsapp"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="title">
                                    Search Something
                                </div>
                                <div className="footerForm info">
                                    <form action="" className="from">
                                        <input type="Search" placeholder="Search" name="" id="" className="form-control bg-transparent" />
                                    </form>
                                    <div className="row pt-3">
                                        <div className="location text-break lh-lg">
                                            <i className="fa fa-home pe-2"/>
                                            Uzbekistan , Tashkent , Buka
                                        </div>
                                        <div className="location text-break lh-lg">
                                            <i className="fa fa-envelope pe-2"/>
                                           hayotsultonov2005@mail.ru
                                        </div>
                                        <div className="location text-break lh-lg">
                                            <i className="fa fa-phone pe-2"/>
                                            (+93) 608 33 34
                                        </div>
                                        <div className="location text-break lh-lg">
                                            <a target="_blank" href="https://www.google.com/maps/place/%D0%A2%D0%B0%D1%88%D0%BA%D0%B5%D0%BD%D1%82%D1%81%D0%BA%D0%B8%D0%B9+%D0%A3%D0%BD%D0%B8%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D1%82%D0%B5%D1%82+%D0%98%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D1%8B%D1%85+%D0%A2%D0%B5%D1%85%D0%BD%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D0%B9:/@41.3409302,69.2867291,15z/data=!4m2!3m1!1s0x0:0x52a8f9d9414a2ad8?sa=X&ved=2ahUKEwiR-fKZ1Oj-AhWSxIsKHVhUCkoQ_BJ6BAgwEAg" className="nav-link">
                                            <i className="fa fa-location-dot pe-2"/>I am study Tashkent University of Information Technology
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 footerForm">
                                <div className="title">
                                    About of TUIT
                                </div>
                                <div className="info">
                                    {/* <Contact/> */}
                                    <form action="" method="get" className="form">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <input placeholder="Name . . ." type="text" name="" id="" className="form-control border-0 border-bottom rounded-0  shadow bg-transparent" />
                                            </div>
                                            <div className="col-md-12">
                                                <input placeholder="email@exaple.com . . ." type="email" name="" id="" className="form-control border-0 border-bottom rounded-0  shadow bg-transparent" />
                                            </div>
                                            <div className="col-md-12">
                                                <textarea placeholder="Write message..." type="email" name="" id="" className="form-control border-0 border-bottom rounded-0  shadow bg-transparent" ></textarea>
                                            </div>
                                            <div className="col-md justify-content-center d-flex my-2 mx-auto">
                                                <button className="btn  btn-outline-success" type="button">Send</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        )
    }

}

export default Footer