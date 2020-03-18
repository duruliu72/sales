import React, { Component } from "react";
class Modals extends Component {
  state = {};
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "js/modals.js";
    script.async = true;
    document.body.appendChild(script);
  }
  render() {
    return (
      <div className="content">
        <div
          id="myModal"
          className="modal fade"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title mt-0" id="myModalLabel">Promotion</h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">

                <p>
                  Duis mollis, est non commodo luctus, nisi erat
                  porttitor ligula.
                          </p>
                <hr />
                <h4>Overflowing text to show scroll behavior</h4>
              </div>
              {/* <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary waves-effect"
                  data-dismiss="modal"
                >
                  Close
                          </button>
                <button
                  type="button"
                  className="btn btn-primary waves-effect waves-light"
                >
                  Save changes
                          </button>
              </div> */}
            </div>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-primary waves-effect waves-light"
          data-toggle="modal"
          data-target="#myModal"
        >
          Standard Modal
        </button>
      </div>
    );
  }
}

export default Modals;
