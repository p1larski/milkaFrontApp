import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalTitle } from 'react-bootstrap'
import axios from 'axios'
import Select from 'react-select'
import '../Calendar.css';


const Employee = () => {
    const refreshPage = ()=>{
        window.location.reload();  }
    const [Data, setData] = useState([]);
    const [Month, setMonth] = useState();
    const [RowData, SetRowData] = useState([])
    const [ViewShow, SetViewShow] = useState(false)
    const handleViewShow = () => { SetViewShow(true) }
    const hanldeViewClose = () => { SetViewShow(false) }
    //FOr Edit Model
    const [ViewEdit, SetEditShow] = useState(false)
    const handleEditShow = () => { SetEditShow(true) }
    const hanldeEditClose = () => { SetEditShow(false) }
    //FOr hours of day
    const [ViewHours, SetViewHours] = useState(false)
    const handleHoursShow = () => { SetViewHours(true) }
    const handleHoursClose = () => { SetViewHours(false) }
    //FOr Delete Model
    const [ViewDelete, SetDeleteShow] = useState(false)
    const handleDeleteShow = () => { SetDeleteShow(true) }
    const hanldeDeleteClose = () => { SetDeleteShow(false) }
    //FOr Add New Data Model
    const [ViewPost, SetPostShow] = useState(false)
    const handlePostShow = () => { SetPostShow(true) }
    const hanldePostClose = () => { SetPostShow(false) }
    //FOr visit reservation
    const [ViewReservation, SetViewReservation] = useState(false)
    const handleReservationShow = () => {SetViewReservation(true)}
    const handleReservationClose = () => {SetViewReservation(false)}
    //Define here local state that store the form Data
    const [year, setyear] = useState()
    const [month, setmonth] = useState()
    const [day, setday] = useState()
    //Const for reservation
    const [date, setDate] = useState()
    const [noteVisit, setNoteVisit] = useState()
    const [hourStartVisit, setHourStartVisit] = useState()
    const [hairDresEnum, setHairDresEnum] = useState()

    const [hourStartDay, sethourStartDay] = useState("")
    const [hourEndDay, sethourEndDay] = useState("")
    const [calendarDay, setCalendarDay] = useState("")
    const [hoursOfDay, sethoursOfDay] = useState([])
    const hourSelect = []
    hoursOfDay.forEach(function(hour){
        hourSelect.push({ label:hour, value: hour})
    })
    const [Delete,setDelete] = useState(false)
    const [id,setId] = useState("");
    const months = [
        { value: 1, label: 'Styczeń' },
        { value: 2, label: 'Luty' },
        { value: 3, label: 'Marzec' },
        { value: 4, label: 'Kwiecień' },
        { value: 5, label: 'Maj' },
        { value: 6, label: 'Czerwiec' },
        { value: 7, label: 'Lipiec' },
        { value: 8, label: 'Sierpień' },
        { value: 9, label: 'Wrzesień' },
        { value: 10, label: 'Październik' },
        { value: 11, label: 'Listopad' },
        { value: 12, label: 'Grudzień' }
      ]
      const hairdressing = [
        { value: 'CIĘCIE', label: 'CIĘCIE' },
        { value: 'KOLORYZACJA', label: 'KOLORYZACJA' },
        { value: 'PIELĘGNACJA', label: 'PIELĘGNACJA' },
        { value: 'MODELOWANIE', label: 'MODELOWANIE' },
        { value: 'PASEMKA', label: 'PASEMKA' },
        { value: 'BALEJAŻ', label: 'BALEJAŻ' },
        { value: 'ONDULACJA', label: 'ONDULACJA' },
        { value: 'PRZEDŁUŻANIE', label: 'PRZEDŁUŻANIE' }
      ]

      const hours = [{ 
        value: 7, label: '7:00' },
      { value: 7.5, label: '7:30' },
      { value: 8, label: '8:00' },
      { value: 8.5, label: '8:30' },
      { value: 9, label: '9:00' },
      { value: 9.5, label: '9:30' },
      { value: 10, label: '10:00' },
      { value: 10.5, label: '10:30' },
      { value: 11, label: '11:00' },
      { value: 11.5, label: '11:30' },
      { value: 12, label: '12:00' },
      { value: 12.5, label: '12:30' },
      { value: 13, label: '13:00' },
      { value: 13.5, label: '13:30' },
      { value: 14, label: '14:00' },
      { value: 14.5, label: '14:30' },
      { value: 15, label: '15:00' },
      { value: 15.5, label: '15:30' },
      { value: 16, label: '16:00' },
      { value: 16.5, label: '16:30' },
      { value: 17, label: '17:00' },
      { value: 17.5, label: '17:30' },
      { value: 18, label: '18:00' },
      { value: 18.5, label: '18:30' },
      { value: 19, label: '19:00' },
      { value: 19.5, label: '19:30' },
      { value: 20, label: '20:00' },
      { value: 20.5, label: '20:30' }]

    
    //handle Delete Function 
    const GetEmployeeData = () => {
        const url = 'http://localhost:8080/calendar'
        axios.get(url)
            .then(response => {
                const result = response.data;
                    setData(result);
            })
    }
    const GetMonthByDate = (year, month) => {
        const url = 'http://localhost:8080/month/'+ year + '-' + month
        axios.get(url)
            .then(response => {
                const result = response.data;
                    setMonth(result)
            })        
    }
    //handle Create Function 
    function handleSubmite() {
        const url = 'http://localhost:8080/month/new/save'
        const Credentials = { year, month }
        axios.post(url, Credentials)
    }
    //handle reservation
    function handleReservation() {
        const url = 'http://localhost:8080/visit/new/save'
        const Credentials = { date, noteVisit, hairDresEnum, hourStartVisit}
        axios.post(url, Credentials)
            
    }
    //handle Edit Function 
    const handleEdit = () =>{
        const url = `http://localhost:8080/day/${id}`
        const Credentials = { hourStartDay, hourEndDay }
        axios.put(url, Credentials)
    }
    //handle Delete Function 
    const handleDelete = () =>{
        const url = `http://localhost:8080/day/${id}`
        axios.delete(url)
    }
    //Useeffect
    useEffect(() => {
        GetEmployeeData(); 
    }, [])
    // Pagination
    const Monnth = (props) => {
        const { date, days} = props.data;
        return (
          <div className='calendar'>
            
            <div className='Title'>
                Terminarz dla: {date}
                    <div>
                        <Button className='buttonAdd'
                                variant='secondary'
                                onClick={() => { handlePostShow()}}>
                        Nowy miesiąc
                        </Button>
                        </div>
            </div>
                    <div className='grid-container'>
                            {days.map(day => 
                            <div className='grid-item' key = {day.id}>
                                    <a style={{color: '#639'}}>{day.date}</a>
                                    <p>Otwarcie: {day.hoursSet[0]}</p>
                                    <p>Zamknięcie: {day.hoursSet[day.hoursSet.length-1]}</p>
                                    <Button className='buttonAction' 
                                            variant='secondary'
                                            onClick={() => {handleViewShow(SetRowData(day),
                                                            sethoursOfDay(day.hoursSet), 
                                                            setDelete(false), setday(day), setDate(day.date))}}>Podgląd
                                    </Button>
                                    
                            </div>)
            }
            </div>
        </div>
        );
      }
      const Days = (props) => {
        const { date, days} = props.data;
        return (
          <div className='calendar'>
            ddd
            {/* <div className='Title'>
                Terminarz dla: {date}
                    <div>
                        <Button className='buttonAdd'
                                variant='secondary'
                                onClick={() => { handlePostShow()}}>
                        Nowy miesiąc
                        </Button>
                        </div>
            </div> */}
            {/* <div className='grid-container'>
                            {days.map(day => 
                            <div className='grid-item' key = {day.id}>
                                    <a style={{color: '#639'}}>{day.date}</a>
                                    <p>Otwarcie: {day.hoursSet[0]}</p>
                                    <p>Zamknięcie: {day.hoursSet[day.hoursSet.length-1]}</p>
                                    <Button className='buttonAction' 
                                            variant='secondary'
                                            onClick={() => {handleViewShow(SetRowData(day),
                                                            sethoursOfDay(day.hoursSet), 
                                                            setDelete(false), setday(day))}}>Podgląd
                                    </Button>
                                    
                            </div>)
            }
            </div> */}
        </div>
        );
      }
      function Pagination({ data, RenderComponent, title, pageLimit, dataLimit }) {
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
            <div className='pagination'>
              {/* previous button */}
              <button onClick={goToPreviousPage} className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
              >
                Poprzednia
              </button>
        
              {/* show page numbers */}
              {getPaginationGroup().map((item, index) => (
                <button
                  key={index} onClick={changePage} className={`paginationItem ${currentPage === item ? 'active' : null}`}
                >
                  <span>{item}</span>
                </button>
              ))}
        
              {/* next button */}
              <button onClick={goToNextPage} className={`next ${currentPage === pages ? 'disabled' : ''}`}
              >
                Następna
              </button>
            </div>
          </div>
        );
      }

    return (
        <div className='calendar'>
      {Data.length > 0 ? (
        <>
          <Pagination   data={Data}
                        RenderComponent={Monnth}
                        pageLimit={1}
                        dataLimit={1}/>
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
                >
                    <Button variant='secondary'
                                className='buttonAction' 
                                onClick={hanldeViewClose}>
                                    Zamknij
                        </Button>
                        <div class='modal-dialog' role='document'>
                            <div class='modal-content'>
                                <div class='modal-header'>
                                    <h3 class='modal-title text-center'>
                                        <div className='viewDisplay'>
                    {RowData.date}
                                        </div>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    <Modal.Body>
                        <div className='viewDisplay'>
                            
                            <label>Otwarcie:</label> 
                            <p style={{color: "rgb(133, 38, 120)"}}>{hoursOfDay[0]}</p>
                            <label>Zamknięcie:</label>  
                            <p style={{color: "rgb(133, 38, 120)"}}>{hoursOfDay[hoursOfDay.length-1]}</p>
                            <div className='form-group mt-3'>
                            <Button className='buttonAction' 
                                    variant='secondary' 
                                    onClick={()=> {handleHoursShow(sethoursOfDay(hoursOfDay))}}>
                                        Sprawdź dostępne godziny
                            </Button>
                            <p></p>
                            <Button className='buttonAction' 
                                            variant='secondary' 
                                            onClick={()=> {handleEditShow(SetRowData(day),setId(day.id))}}>Zmień godziny
                                    </Button>
                                    <p></p>
                                    <Button className='buttonAction' 
                                            variant='secondary' 
                                            onClick={()=> {handleReservationShow(sethoursOfDay(hoursOfDay))}}>Rezerwacja wizyty
                                    </Button>
                                    <p></p>
                            <Button className='buttonAction' 
                                            variant='danger' 
                                            onClick={() => {handleViewShow(SetRowData(day),setId(day.id),
                                                            setDelete(true),sethoursOfDay(day.hoursSet))}}>Usuń
                            </Button>
                            </div>
                            {
                                Delete && (
                                        <Button 
                                                className='buttonAction' 
                                                variant='danger'
                                                type='submit' 
                                                onClick={handleDelete}>
                                                    Usuń dzień
                                        </Button>
                                )
                            }
                        </div>
                    </Modal.Body>
                </Modal>
            {/* Modal for submit data to database */}
                <Modal
                    show={ViewPost}
                    onHide={hanldePostClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Button variant='secondary' 
                            className='buttonAction'
                            onClick={hanldePostClose}>
                                Zamknij
                    </Button>
                    <div class='modal-dialog' role='document'>
                            <div class='modal-content'>
                                <div class='modal-header'>
                                    <h3 class='modal-title text-center'>
                                        <div className='viewDisplay'>
                    Nowy miesiąc
                                        </div>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    <Modal.Body>
                        <div className='viewDisplay'>
                            <div className='form-group'>
                                <input type="text" 
                                       style={{
                                            height: "70px",
                                            fontSize: "46px",
                                            width: "100%",
                                            paddingLeft: "8px",
                                            paddingTop: "6px",
                                            paddingBottom: "6px",
                                            textAlign: "center"
                                          }}
                                        className='form-control' 
                                        onChange={(e) => setyear(e.target.value)}
                                        placeholder="Rok" />
                            </div>
                            <div className='form-group mt-3'>
                                <Select options={months} 
                                        onChange={(months) => setmonth(months.value)} 
                                        placeholder="Miesiąc" />
                            </div>
                                <Button type='submit' 
                                        className='buttonAction' 
                                        onClick={handleSubmite}>Dodaj
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
                >   
                  
                <Button variant='secondary'
                                className='buttonAction' 
                                onClick={hanldeEditClose}>
                                    Zamknij
                </Button>
                        <div class='modal-dialog' role='document'>
                            <div class='modal-content'>
                                <div class='modal-header'>
                                    <h3 class='modal-title text-center'>
                                        <div className='viewDisplay'>
                    <center>{RowData.date}</center>
                                        </div>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    <Modal.Body>
                        <div className='viewDisplay'>
                                <input type="hidden"  defaultValue={RowData.id}/>
                        <div>
                            <div>
                            Otwarcie :
                                    <Select options={hours} 
                                            onChange={(hours) => sethourStartDay(hours.value)} 
                                            placeholder="Wybierz godzinę"
                                            />
                            </div>
                            <div>
                                Zamknięcie :
                                        <Select options={hours}  
                                                onChange={(hours) => sethourEndDay(hours.value)} 
                                                placeholder="Wybierz godzinę"
                                                />
                            </div>
                            <div className='form-group mt-3'>
                            <Button type='secondary' 
                                    className='buttonAction' 
                                    onClick={handleEdit}>
                                        Zatwierdź zmiany
                            </Button>
                            </div>
                        </div>
                        </div>
                    </Modal.Body>
                </Modal>
                <Modal
                    show={ViewHours}
                    onHide={handleHoursClose}
                    backdrop="static"
                    keyboard={false}
                    scrollable = {true}
                >   <Button variant='secondary'
                            className='buttonAction' 
                            onClick={handleHoursClose}>
                                Zamknij
                    </Button>
                        
                    <Modal.Body>
                        <div className='viewDisplay'>
                            <h1>Dostępne godziny</h1>
                            <div className='scrollable'>
                        {hoursOfDay.map((hour)=>
                            <p key={hour} style={{color: "rgb(133, 38, 120)"}}>
                                {hour}</p>)}
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
                >
                    <Button variant='secondary' 
                            className='buttonAction'
                            onClick={handleReservationClose}>
                                Zamknij
                    </Button>
                    <div class='modal-dialog' role='document'>
                            <div class='modal-content'>
                                <div class='modal-header'>
                                    <h3 class='modal-title text-center'>
                                        <div className='viewDisplay'>
                    Rezerwacja wizyty w dniu {RowData.date}
                                        </div>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    <Modal.Body>
                        <div className='viewDisplay'>
                            <div className='form-group'>
                               <input type="text" 
                                      style={{
                                            width: "100%",
                                            paddingLeft: "8px",
                                            paddingTop: "6px",
                                            paddingBottom: "6px",
                                            textAlign: "center"
                                          }}
                                      onChange={(e) => setNoteVisit(e.target.value)}
                                      placeholder="Notatka" />
                                <Select options={hairdressing} 
                                        onChange={(hairdressing) => setHairDresEnum(hairdressing.value)} 
                                        placeholder="Rodzaj zabiegu" 
                                />
                                <Select options={hourSelect} 
                                        onChange={(hourSelect) => setHourStartVisit(hourSelect.value)} 
                                        placeholder="Godzina wizyty" 
                                />
                            </div>
                                <Button type='submit' 
                                        className='buttonAction' 
                                        onClick={handleReservation}>Dodaj
                                </Button>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
    );
};

export default Employee;