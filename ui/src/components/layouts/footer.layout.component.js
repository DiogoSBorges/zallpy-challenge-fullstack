import React, { Component } from "react";

class AppFooter extends Component {
  render() {
    return (
      <footer className="page-footer" style={{backgroundColor: "#262626"}}>
      <div className="footer-copyright">
          <div className="container">
              <a style={{color:'white'}} href='https://github.com/DiogoSBorges'>Developed By Diogo Sousa Borges</a>
          </div>
      </div>
  </footer>
    );
  }
}

export default AppFooter;