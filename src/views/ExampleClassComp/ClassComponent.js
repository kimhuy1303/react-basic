import React from "react";

class ClassComponent extends React.Component {
  // Không cần khai báo function
  /*
   JSX => return only one block 
   Fragment
   State: Lưu trữ dữ liệu -> memory 
*/
  // Object keyword "this"
  state = {
    //key: value
    name: "Quý Vy",
    facebook: "Quý Vy Lê Hoàng",
  };
  //   handleOnChangeName = (event) => {
  //     this.setState({
  //       name: event.target.value,
  //     });
  //   };
  handleClickButton = () => {
    alert("Click me !");
  };
  render() {
    return (
      <>
        <div className="first">
          {/* {console.log("My name is:" + name)} */}
          {/* <input
            value={this.state["name"]}
            type="text"
            onChange={(event) => this.handleOnChangeName(event)}
            // Demo
          /> */}
          Hello class component, my name is {this.state["name"]}
        </div>
        <div className="second"> My facebook is {this.state.facebook}</div>

        <div className="third">
          <button onClick={() => this.handleClickButton()}>Click me!</button>
        </div>
      </>
    );
  }
}

// default: export 1 class
// {}: export nhiều class
export default ClassComponent;
