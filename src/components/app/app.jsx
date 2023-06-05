import React, { Component } from "react";
import { Header, Main, Footer, Loader, Home, About,Price,Admin} from "../";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import $ from "jquery"
class App extends Component {
  state = {
    loading: true,
  };
  componentDidMount() {
    setTimeout(() => {
      $(".load").css({
        "opacity": 0,
        "display": "none"
      })
      setInterval(() => {
        $(".block").css({
          "opacity": "1",
        })
      }, 500)
      this.setState({ loading: false });
    }, 2500);


  }

  render() {
    return (
      <BrowserRouter>
        {this.state.loading ? (
          <Loader />
        ) : (
          <div className="block">
            <Header />
            <div style={{"height":"400px"}}>
            <Routes>
              <Route exact path="/" element={<Main/>} />
              <Route path="/home" element={<Home />}/>
              <Route path="/about" element={<About />}/>
              {/* <Route path="/contact" element={<Contact />}/> */}
              <Route path="/price" element={<Price />}/>
              <Route path="/admin" element={<Admin />}/>
            </Routes>
            </div>
            <Footer />
          </div>
        )
        }
      </BrowserRouter>
    );
  }
}

export default App;
