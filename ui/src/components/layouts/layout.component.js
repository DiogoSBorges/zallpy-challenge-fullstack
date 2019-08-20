import React, { Component } from "react";
import PropTypes from "prop-types";
import Header from "./header.layout.component";
import Footer from "./footer.layout.component";

class AppLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

AppLayout.propTypes = { children: PropTypes.node.isRequired };

export default AppLayout;