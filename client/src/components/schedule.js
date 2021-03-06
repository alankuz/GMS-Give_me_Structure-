import React, { Component } from "react";
import moment from "moment";
import { ReactAgenda, ReactAgendaCtrl, guid, Modal } from "react-agenda";
import axios from "axios";
var now = new Date();

require("moment/locale/en-ca.js");
var colors = {
  "color-1": "rgba(102, 195, 131 , 1)",
  "color-2": "rgba(242, 177, 52, 1)",
  "color-3": "rgba(235, 85, 59, 1)",
  "color-4": "rgba(70, 159, 213, 1)",
  "color-5": "rgba(170, 59, 123, 1)"
};

var items = [
  {
    _id: guid(),
    name: "Test Event 1",
    startDateTime: new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      10,
      10
    ),
    endDateTime: new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      12,
      0
    ),
    classes: "color-1 color-4"
  },
  {
    _id: guid(),
    name: "Test Event 2",
    startDateTime: new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1,
      11,
      0
    ),
    endDateTime: new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1,
      13,
      0
    ),
    classes: "color-2"
  },
  {
    _id: guid(),
    name: "Test Event 3",
    startDateTime: new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1,
      11,
      0
    ),
    endDateTime: new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1,
      14,
      30
    ),
    classes: "color-4"
  },
  {
    _id: guid(),
    name: "Test Event 4",
    startDateTime: new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 2,
      10,
      0
    ),
    endDateTime: new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 2,
      15,
      0
    ),
    classes: "color-3"
  },
  {
    _id: guid(),
    name: "Test Event 5",
    startDateTime: new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 3,
      10,
      0
    ),
    endDateTime: new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 3,
      16,
      30
    ),
    classes: "color-4"
  },
  {
    _id: guid(),
    name: "Test Event 6",
    startDateTime: new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 7,
      9,
      14
    ),
    endDateTime: new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 7,
      17
    ),
    classes: "color-3"
  }
];
export default class Agenda extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      selected: [],
      cellHeight: 60 / 4,
      showModal: false,
      locale: "fr",
      rowsPerHour: 4,
      numberOfDays: 7,
      startDate: new Date(),
      data: ""
    };
    this.handleRangeSelection = this.handleRangeSelection.bind(this);
    this.handleItemEdit = this.handleItemEdit.bind(this);
    this.zoomIn = this.zoomIn.bind(this);
    this.zoomOut = this.zoomOut.bind(this);
    this._openModal = this._openModal.bind(this);
    this._closeModal = this._closeModal.bind(this);
    this.addNewEvent = this.addNewEvent.bind(this);
    this.removeEvent = this.removeEvent.bind(this);
    this.editEvent = this.editEvent.bind(this);
    this.changeView = this.changeView.bind(this);
    this.handleCellSelection = this.handleCellSelection.bind(this);
  }

  componentDidMount() {
    this.getDataFromDb();
  }
  getDataFromDb = () => {
    const userId = localStorage.getItem("account");
    fetch("https://give-me-structure.herokuapp.com/api/getData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id: userId })
    })
      .then(data => data.json())
      .then(res => {
        if (!res.data[0]) {
          console.log("ERROR: LOGIN INFORMATION FAILED");
        } else {
          var temp = res.data[0].message;
          for (let i = 0; i < temp.length; i++) {
            temp[i].endDateTime = new Date(temp[i].endDateTime);
            temp[i].startDateTime = new Date(temp[i].startDateTime);
          }

          this.setState({ items: temp });
        }
      });
  };
  putDataToDB = message => {
    let idToBeAdded = localStorage.getItem("account");

    axios.post("https://give-me-structure.herokuapp.com/api/putData", {
      id: idToBeAdded,
      message: items
    });
  };

  componentWillReceiveProps(next, last) {
    if (next.items) {
      this.setState({ items: next.items });
    }
  }
  handleItemEdit(item, openModal) {
    if (item && openModal === true) {
      this.setState({ selected: [item] });
      return this._openModal();
    }
    axios
      .post("https://give-me-structure.herokuapp.com/api/updateData", {
        _id: item._id,
        name: item.name,
        startDateTime: item.startDateTime,
        endDateTime: item.endDateTime,
        classes: item.classes
      })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }
  handleCellSelection(item, openModal) {
    if (this.state.selected && this.state.selected[0] === item) {
      return this._openModal();
    }
    this.setState({ selected: [item] });
  }

  zoomIn() {
    var num = this.state.cellHeight + 15;
    this.setState({ cellHeight: num });
  }
  zoomOut() {
    var num = this.state.cellHeight - 15;
    this.setState({ cellHeight: num });
  }

  handleDateRangeChange(startDate, endDate) {
    this.setState({ startDate: startDate });
  }

  handleRangeSelection(selected) {
    this.setState({ selected: selected, showCtrl: true });
    this._openModal();
  }

  _openModal() {
    this.setState({ showModal: true });
  }
  _closeModal(e) {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    this.setState({ showModal: false });
  }

  handleItemChange(items, item) {
    this.setState({ items: items });
  }

  handleItemSize(items, item) {
    this.setState({ items: items });
  }

  removeEvent(items, item) {
    this.setState({ items: items });
    axios
      .post("https://give-me-structure.herokuapp.com/api/deleteData", {
        userId: localStorage.getItem("account"),
        itemId: item._id,
        name: item.name,
        startDateTime: item.startDateTime,
        endDateTime: item.endDateTime,
        classes: item.classes
      })
      .then(res => console.log(res))
      .catch(err => console.log(err));

    this._closeModal();
  }

  addNewEvent(items, newItems) {
    this.setState({ showModal: false, selected: [], items: items });
    this._closeModal();
    let idToBeAdded = localStorage.getItem("account");

    axios.post("/api/putData", {
      id: idToBeAdded,
      message: newItems
    });
  }
  editEvent(items, item) {
    this.setState({ showModal: false, selected: [], items: items });
    axios
      .post("https://give-me-structure.herokuapp.com/api/updateData", {
        userId: localStorage.getItem("account"),
        itemId: item._id,
        name: item.name,
        startDateTime: item.startDateTime,
        endDateTime: item.endDateTime,
        classes: item.classes
      })
      .then(res => console.log(res))
      .catch(err => console.log(err));

    this._closeModal();
  }

  changeView(days, event) {
    this.setState({ numberOfDays: days });
  }

  render() {
    var AgendaItem = function(props) {
      return (
        <div
          style={{ display: "block", position: "absolute", background: "#FFF" }}
        >
          {props.item.name}{" "}
          <button onClick={() => props.edit(props.item)}>Edit </button>
        </div>
      );
    };
    return (
      <div className="content-expanded ">
        <p>
          Key:<span className="SpanGreen"> Work </span>
          <span className="SpanYellow"> School </span>
          <span className="SpanRed"> Fitness </span>
          <span className="SpanBlue"> Social </span>
          <span className="SpanPurple"> Hobby </span>
        </p>

        <div className="control-buttons">
          <button className="button-control" onClick={this.zoomIn}>
            {" "}
            <i className="zoom-plus-icon"></i>{" "}
          </button>
          <button className="button-control" onClick={this.zoomOut}>
            {" "}
            <i className="zoom-minus-icon"></i>{" "}
          </button>
          <button className="button-control" onClick={this._openModal}>
            {" "}
            <i className="schedule-icon"></i>{" "}
          </button>
          <button
            className="button-control"
            onClick={this.changeView.bind(null, 7)}
          >
            {" "}
            {moment.duration(7, "days").humanize()}{" "}
          </button>
          <button
            className="button-control"
            onClick={this.changeView.bind(null, 4)}
          >
            {" "}
            {moment.duration(4, "days").humanize()}{" "}
          </button>
          <button
            className="button-control"
            onClick={this.changeView.bind(null, 3)}
          >
            {" "}
            {moment.duration(3, "days").humanize()}{" "}
          </button>
          <button
            className="button-control"
            onClick={this.changeView.bind(null, 1)}
          >
            {" "}
            {moment.duration(1, "day").humanize()}{" "}
          </button>
        </div>

        <ReactAgenda
          minDate={new Date(now.getFullYear(), now.getMonth() - 3)}
          maxDate={new Date(now.getFullYear(), now.getMonth() + 3)}
          startDate={this.state.startDate}
          startAtTime={6}
          endAtTime={24}
          cellHeight={this.state.cellHeight}
          locale="fr"
          items={this.state.items}
          numberOfDays={this.state.numberOfDays}
          headFormat={"ddd DD MMM"}
          rowsPerHour={this.state.rowsPerHour}
          itemColors={colors}
          helper={true}
          //itemComponent={AgendaItem}
          view="calendar"
          autoScale={false}
          fixedHeader={true}
          onRangeSelection={this.handleRangeSelection.bind(this)}
          onChangeEvent={this.handleItemChange.bind(this)}
          onChangeDuration={this.handleItemSize.bind(this)}
          onItemEdit={this.handleItemEdit.bind(this)}
          onCellSelect={this.handleCellSelection.bind(this)}
          onItemRemove={this.removeEvent.bind(this)}
          onDateRangeChange={this.handleDateRangeChange.bind(this)}
        />
        {this.state.showModal ? (
          <Modal clickOutside={this._closeModal}>
            <div className="modal-content">
              <ReactAgendaCtrl
                items={this.state.items}
                itemColors={colors}
                selectedCells={this.state.selected}
                Addnew={this.addNewEvent}
                edit={this.editEvent}
              />
            </div>
          </Modal>
        ) : (
          ""
        )}
      </div>
    );
  }
}
