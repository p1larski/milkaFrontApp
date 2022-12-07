import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";
import Select from "react-select";
import "../Calendar.css";

const Employee = () => {
  const [refresh, setRefresh] = useState(false);
  const [Data, setData] = useState([]);
  const [RowData, SetRowData] = useState([]);
  const [ViewShow, SetViewShow] = useState(false);
  const handleViewShow = () => {
    SetViewShow(true);
  };
  const hanldeViewClose = () => {
    SetViewShow(false);
  };
  //FOr Edit Model
  const [ViewEdit, SetEditShow] = useState(false);
  const handleEditShow = () => {
    SetEditShow(true);
  };
  const hanldeEditClose = () => {
    SetEditShow(false);
  };
  //FOr hours of day
  const [ViewHours, SetViewHours] = useState(false);
  const handleHoursShow = () => {
    SetViewHours(true);
  };
  const handleHoursClose = () => {
    SetViewHours(false);
  };
  //FOr apply changes
  const [ViewClose, SetViewClose] = useState(false);
  const handleCloseShow = () => {
    SetViewClose(true);
  };
  const handleCloseClose = () => {
    SetViewClose(false);
  };
  //FOr Add New Data Model
  const [ViewPost, SetPostShow] = useState(false);
  const handlePostShow = () => {
    SetPostShow(true);
  };
  const hanldePostClose = () => {
    SetPostShow(false);
  };
  //FOr visit reservation
  const [ViewReservation, SetViewReservation] = useState(false);
  const handleReservationShow = () => {
    SetViewReservation(true);
  };
  const handleReservationClose = () => {
    SetViewReservation(false);
  };
  //Properties for new month request
  const [year, setyear] = useState();
  const [month, setmonth] = useState();
  const [day, setday] = useState();
  //Properties for reservation request
  const [date, setDate] = useState();
  const [noteVisit, setNoteVisit] = useState();
  const [hourStartVisit, setHourStartVisit] = useState();
  const [hairDresEnum, setHairDresEnum] = useState();
  const [hourStartDay, sethourStartDay] = useState("");
  const [hourEndDay, sethourEndDay] = useState("");
  const [hoursOfDay, sethoursOfDay] = useState([]);
  const hourSelect = [];
  hoursOfDay.forEach(function (hour) {
    hourSelect.push({ label: hour, value: hour });
  });
  const [Delete, setDelete] = useState(false);
  const [id, setId] = useState("");
  const months = [
    { value: 1, label: "Styczeń" },
    { value: 2, label: "Luty" },
    { value: 3, label: "Marzec" },
    { value: 4, label: "Kwiecień" },
    { value: 5, label: "Maj" },
    { value: 6, label: "Czerwiec" },
    { value: 7, label: "Lipiec" },
    { value: 8, label: "Sierpień" },
    { value: 9, label: "Wrzesień" },
    { value: 10, label: "Październik" },
    { value: 11, label: "Listopad" },
    { value: 12, label: "Grudzień" },
  ];
  const hairdressing = [
    { value: "CIĘCIE", label: "CIĘCIE" },
    { value: "KOLORYZACJA", label: "KOLORYZACJA" },
    { value: "PIELĘGNACJA", label: "PIELĘGNACJA" },
    { value: "MODELOWANIE", label: "MODELOWANIE" },
    { value: "PASEMKA", label: "PASEMKA" },
    { value: "BALEJAŻ", label: "BALEJAŻ" },
    { value: "ONDULACJA", label: "ONDULACJA" },
    { value: "PRZEDŁUŻANIE", label: "PRZEDŁUŻANIE" },
  ];

  const hours = [
    {
      value: "07:00",
      label: "7:00",
    },
    { value: "07:30", label: "7:30" },
    { value: "08:00", label: "8:00" },
    { value: "08:30", label: "8:30" },
    { value: "09:00", label: "9:00" },
    { value: "09:30", label: "9:30" },
    { value: "10:00", label: "10:00" },
    { value: "10:30", label: "10:30" },
    { value: "11:00", label: "11:00" },
    { value: "11:30", label: "11:30" },
    { value: "12:00", label: "12:00" },
    { value: "12:30", label: "12:30" },
    { value: "13:00", label: "13:00" },
    { value: "13:30", label: "13:30" },
    { value: "14:00", label: "14:00" },
    { value: "14:30", label: "14:30" },
    { value: "15:00", label: "15:00" },
    { value: "15:30", label: "15:30" },
    { value: "16:00", label: "16:00" },
    { value: "16:30", label: "16:30" },
    { value: "17:00", label: "17:00" },
    { value: "17:30", label: "17:30" },
    { value: "18:00", label: "18:00" },
    { value: "18:30", label: "18:30" },
    { value: "19:00", label: "19:00" },
    { value: "19:30", label: "19:30" },
    { value: "20:00", label: "20:00" },
    { value: "20:30", label: "20:30" },
  ];
  
  axios.defaults.headers.common["Authorization"] = `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxLHNpc2l0b3JvMkBnbWFpbC5jb20iLCJpc3MiOiJDb2RlSmF2YSIsImlhdCI6MTY3MDQyOTk4MCwiZXhwIjoxNjcwNDM3MTgwfQ.54rhObz--7pkESYyLceWUYb_ZiqheH-fpkfb015BNeIRpCWGxrYC81immPWRH89iFMN081LxzAlydnkz8Ypy0g`;
  //handle Delete Function
  const GetEmployeeData = () => {
    const url = "http://localhost:8080/calendar";
    axios.get(url).then((response) => {
      const result = response.data;
      setData(result);
    });
  };
  //handle Create Function
  function handleSubmite() {
    const url = "http://localhost:8080/month/new/save";
    const Credentials = { year, month };
    axios.post(url, Credentials);
  }
  //handle reservation
  function handleReservation() {
    const url = "http://localhost:8080/visit/new/save";
    const Credentials = { date, noteVisit, hairDresEnum, hourStartVisit };
    axios.post(url, Credentials);
  }
  //handle Edit Function
  const handleEdit = () => {
    const url = `http://localhost:8080/day/${id}`;
    const Credentials = { hourStartDay, hourEndDay };
    axios.put(url, Credentials);
  };
  //handle Delete Function
  const handleDelete = () => {
    const url = `http://localhost:8080/day/${id}`;
    axios.delete(url);
  };
  const GetLogin = () => {
    const url2 = "http://localhost:8080/login";
    const login = { username: "wiochm3n@wp.pl", password: "adminPass" };
    axios.post(url2, login);
  };
  //Useeffect
  useEffect(() => {
    GetEmployeeData();
  }, []);
  // Pagination
  function Pagination({ data, RenderComponent, pageLimit, dataLimit }) {
    const [pages] = useState(Math.round(data.length / dataLimit));
    const [currentPage, setCurrentPage] = useState(1);

    function goToNextPage() {
      setCurrentPage((page) => page + 1);
    }

    function goToPreviousPage() {
      setCurrentPage((page) => page - 1);
    }

    function changePage(event) {
      const pageNumber = Number(event.target.textContent);
      setCurrentPage(pageNumber);
    }

    const getPaginatedData = () => {
      const startIndex = currentPage * dataLimit - dataLimit;
      const endIndex = startIndex + dataLimit;
      return data.slice(startIndex, endIndex);
    };

    const getPaginationGroup = () => {
      let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
      return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
    };

    return (
      <div>
        {/* show content */}
        <div className="dataContainer">
          {getPaginatedData().map((d, idx) => (
            <RenderComponent key={idx} data={d} />
          ))}
        </div>

        {/* show the pagiantion
                it consists of next and previous buttons
                along with page numbers, in our case, 5 page
                numbers at a time
            */}
        <div className="pagination">
          {/* previous button */}
          <button
            onClick={goToPreviousPage}
            className={`prev ${currentPage === 1 ? "disabled" : ""}`}
          >
            Poprzednia
          </button>

          {/* show page numbers */}
          {getPaginationGroup().map((item, index) => (
            <button
              key={index}
              onClick={changePage}
              className={`paginationItem ${
                currentPage === item ? "active" : null
              }`}
            >
              <span>{item}</span>
            </button>
          ))}

          {/* next button */}
          <button
            onClick={goToNextPage}
            className={`next ${currentPage === pages ? "disabled" : ""}`}
          >
            Następna
          </button>
        </div>
      </div>
    );
  }
  const Monnth = (props) => {
    const { date, days } = props.data;
    return (
      <div className="calendar">
        <div className="Title">
          Terminarz dla: {date}
          <div className="viewDisplay">
            <Button
              className="buttonAdd"
              variant="secondary"
              onClick={() => {
                handlePostShow();
              }}
            >
              Nowy miesiąc
            </Button>
          </div>
        </div>
        <div className="grid-container">
          {days.map((day) => (
            <div className="grid-item" key={day.id}>
              <a style={{ color: "#639" }}>{day.date}</a>
              <p>Otwarcie: {day.hourStartDay}</p>
              <p>Zamknięcie: {day.hourEndDay}</p>
              <Button
                className="buttonAction"
                variant="secondary"
                onClick={() => {
                  handleViewShow(
                    SetRowData(day),
                    sethoursOfDay(day.hoursSet),
                    setDelete(false),
                    setday(day),
                    setDate(day.date)
                  );
                }}
              >
                Podgląd
              </Button>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="calendar">
      {Data.length > 0 ? (
        <>
          <Pagination
            data={Data}
            RenderComponent={Monnth}
            pageLimit={1}
            dataLimit={1}
          />
        </>
      ) : (
        <h1>Brak danych</h1>
      )}

      {/* View Modal */}
      <Modal
        show={ViewShow}
        onHide={hanldeViewClose}
        backdrop="static"
        keyboard={false}
        scrollable={true}
      >
        <Button
          variant="secondary"
          className="buttonAction"
          onClick={() => {
            hanldeViewClose();
            GetEmployeeData();
          }}
        >
          Zamknij
        </Button>
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h3 class="modal-title text-center">
                <div className="viewDisplay">{RowData.date}</div>
              </h3>
            </div>
          </div>
        </div>
        <Modal.Body>
          <div className="viewDisplay">
            <label>Pierwsza wizyta:</label>
            <p style={{ color: "rgb(133, 38, 120)" }}>{hoursOfDay[0]}</p>
            <label>Ostatnia wizyta :</label>
            <p style={{ color: "rgb(133, 38, 120)" }}>
              {hoursOfDay[hoursOfDay.length - 1]}
            </p>

            <div className="form-group mt-3">
              <Button
                className="buttonAction"
                variant="secondary"
                onClick={() => {
                  handleHoursShow(sethoursOfDay(hoursOfDay));
                }}
              >
                Sprawdź dostępne godziny
              </Button>
              <p></p>
              <Button
                className="buttonAction"
                variant="secondary"
                onClick={() => {
                  handleEditShow(SetRowData(day), setId(day.id));
                  hanldeViewClose();
                }}
              >
                Zmień godziny
              </Button>
              <p></p>
              <Button
                className="buttonAction"
                variant="secondary"
                onClick={() => {
                  handleReservationShow(sethoursOfDay(hoursOfDay));
                  hanldeViewClose();
                }}
              >
                Rezerwacja wizyty
              </Button>
              <p></p>
              <Button
                className="buttonAction"
                variant="danger"
                onClick={() => {
                  handleViewShow(
                    SetRowData(day),
                    setId(day.id),
                    setDelete(true),
                    sethoursOfDay(day.hoursSet)
                  );
                }}
              >
                Usuń
              </Button>
            </div>
            {Delete && (
              <Button
                className="buttonAction"
                variant="danger"
                type="submit"
                onClick={handleDelete}
              >
                Usuń dzień
              </Button>
            )}
          </div>
        </Modal.Body>
      </Modal>
      {/* Modal for submit data to database */}
      <Modal
        show={ViewPost}
        onHide={hanldePostClose}
        backdrop="static"
        keyboard={false}
        scrollable={true}
      >
        <Button
          variant="secondary"
          className="buttonAction"
          onClick={() => {
            hanldePostClose();
            GetEmployeeData();
          }}
        >
          Zamknij
        </Button>
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h3 class="modal-title text-center">
                <div className="viewDisplay">Nowy miesiąc</div>
              </h3>
            </div>
          </div>
        </div>
        <Modal.Body>
          <div className="viewDisplay">
            <div className="form-group">
              <input
                type="text"
                style={{
                  height: "70px",
                  fontSize: "46px",
                  width: "100%",
                  paddingLeft: "8px",
                  paddingTop: "6px",
                  paddingBottom: "6px",
                  textAlign: "center",
                }}
                className="form-control"
                onChange={(e) => setyear(e.target.value)}
                placeholder="Rok"
              />
            </div>
            <div className="form-group mt-3">
              <Select
                options={months}
                onChange={(months) => setmonth(months.value)}
                placeholder="Miesiąc"
              />
            </div>
            <Button
              type="submit"
              className="buttonAction"
              onClick={handleSubmite}
            >
              Dodaj
            </Button>
          </div>
        </Modal.Body>
      </Modal>
      {/* Modal for Edit employee record */}
      <Modal
        show={ViewEdit}
        onHide={hanldeEditClose}
        backdrop="static"
        keyboard={false}
        scrollable={true}
      >
        <Button
          variant="secondary"
          className="buttonAction"
          onClick={() => {
            hanldeEditClose();
            GetEmployeeData();
          }}
        >
          Zamknij
        </Button>
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h3 class="modal-title text-center">
                <div className="viewDisplay">
                  <center>{RowData.date}</center>
                </div>
              </h3>
            </div>
          </div>
        </div>
        <Modal.Body>
          <div className="viewDisplay">
            <input type="hidden" defaultValue={RowData.id} />
            Otwarcie :
            <Select
              options={hours}
              onChange={(hours) => sethourStartDay(hours.value)}
              placeholder="Wybierz godzinę"
            />
            Zamknięcie :
            <Select
              options={hours}
              onChange={(hours) => sethourEndDay(hours.value)}
              placeholder="Wybierz godzinę"
            />
            <Button
              type="secondary"
              className="buttonAction"
              onClick={() => {
                handleEdit();
                handleCloseShow();
              }}
            >
              Zatwierdź zmiany
            </Button>
          </div>
        </Modal.Body>
      </Modal>
      <Modal
        show={ViewHours}
        onHide={handleHoursClose}
        backdrop="static"
        keyboard={false}
        scrollable={true}
      >
        <Button
          variant="secondary"
          className="buttonAction"
          onClick={() => {
            handleHoursClose();
            GetEmployeeData();
          }}
        >
          Zamknij
        </Button>

        <Modal.Body>
          <div className="viewDisplay">
            <h1>Dostępne godziny</h1>
            <div className="scrollable">
              {hoursOfDay.map((hour) => (
                <p key={hour} style={{ color: "rgb(133, 38, 120)" }}>
                  {hour}
                </p>
              ))}
            </div>
          </div>
        </Modal.Body>
      </Modal>
      {/* View day modal */}
      <Modal
        show={ViewReservation}
        onHide={handleReservationClose}
        backdrop="static"
        keyboard={false}
        scrollable={true}
      >
        <Button
          variant="secondary"
          className="buttonAction"
          onClick={() => {
            handleReservationClose();
            GetEmployeeData();
          }}
        >
          Zamknij
        </Button>
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h3 class="modal-title text-center">
                <div className="viewDisplay">
                  Rezerwacja wizyty w dniu {RowData.date}
                </div>
              </h3>
            </div>
          </div>
        </div>
        <Modal.Body>
          <div className="viewDisplay">
            <div className="form-group">
              <input
                type="text"
                style={{
                  width: "100%",
                  paddingLeft: "8px",
                  paddingTop: "6px",
                  paddingBottom: "6px",
                  textAlign: "center",
                }}
                onChange={(e) => setNoteVisit(e.target.value)}
                placeholder="Notatka"
              />
              <Select
                options={hairdressing}
                onChange={(hairdressing) => setHairDresEnum(hairdressing.value)}
                placeholder="Dostępne zabiegi"
              />
              <Select
                options={hourSelect}
                onChange={(hourSelect) => {
                  setHourStartVisit(hourSelect.value);
                  console.log("tukej z guzika");
                }}
                placeholder="Godzina wizyty"
              />
            </div>
            <Button
              type="submit"
              className="buttonAction"
              onClick={() => {
                handleReservation();
                handleReservationClose();
                GetEmployeeData();
              }}
            >
              Dodaj
            </Button>
          </div>
        </Modal.Body>
      </Modal>
      <Modal
        show={ViewClose}
        onHide={handleCloseClose}
        backdrop="static"
        keyboard={false}
        scrollable={true}
      >
        <Modal.Body>
          <div className="viewDisplay">
            <h1>Zmiany zapisane!</h1>
            <div className="scrollable">
              <Button
                variant="secondary"
                className="buttonAction"
                onClick={() => {
                  handleCloseClose();
                  GetEmployeeData();
                }}
              >
                Zamknij
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Employee;
