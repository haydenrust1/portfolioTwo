import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import './style.css'

function ProjectCarousel() {
    return(
        <Carousel className='carousel'>
            <Carousel.Item>
                <a href='https://employee-directory-hr.herokuapp.com/' target='_blank' rel='noreferrer'>
                    <img
                    className="d-block w-100"
                    src="./images/employeeDirectory.png"
                    alt="First slide"
                    />
                </a>
                <div className='caption'>
                <Carousel.Caption>
                <a href='https://employee-directory-hr.herokuapp.com/' target='_blank' rel='noreferrer'>
                    <h3>Employee Directory</h3>
                </a>
                <a href='https://github.com/haydenrust1/employeeDirectory' target='_blank' rel="noreferrer">Repo</a>
                </Carousel.Caption>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <a href='https://budget-tracker-uo.herokuapp.com/' target='_blank' rel='noreferrer'> 
                    <img
                    className="d-block w-100"
                    src="./images/budgetTracker.png"
                    alt="Second slide"
                    />
                </a>
                <div className='caption'>
                <Carousel.Caption>
                <a href='https://budget-tracker-uo.herokuapp.com/' target='_blank' rel='noreferrer'> 
                    <h3>Budget Tracker</h3>
                </a>
                <a href='https://github.com/haydenrust1/BudgetTracker' target='_blank' rel="noreferrer">Repo</a>
                </Carousel.Caption>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <a href='https://workout-journal-app.herokuapp.com/?id=5fab35a50e4ac10017962699' target='_blank' rel='noreferrer'>
                    <img
                    className="d-block w-100"
                    src="./images/fitnessTracker.png"
                    alt="Third slide"
                    />
                </a>
                <div className='caption'>
                <Carousel.Caption>
                <a href='https://workout-journal-app.herokuapp.com/?id=5fab35a50e4ac10017962699' target='_blank' rel='noreferrer'>
                    <h3>Exercise Journal</h3>
                </a>
                <a href='https://github.com/haydenrust1/ExerciseJournal' target='_blank' rel="noreferrer">Repo</a>
                </Carousel.Caption>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <a href='https://uo-bootcamp-project-two.herokuapp.com/login' target='_blank' rel='noreferrer'>
                    <img
                    className="d-block w-100"
                    src="./images/jeopardized.png"
                    alt="Fourth slide"
                    />
                </a>
                <div className='caption'>
                <Carousel.Caption>
                <a href='https://uo-bootcamp-project-two.herokuapp.com/login' target='_blank' rel='noreferrer'>
                    <h3>Jeopardize</h3>
                </a>
                <a href='https://github.com/haydenrust1/Jeopardize' target='_blank' rel="noreferrer">Repo</a>
                </Carousel.Caption>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <a href='https://eat-the-burgerzz.herokuapp.com' target='_blank' rel='noreferrer'>
                    <img
                    className="d-block w-100"
                    src="./images/EatABurger.png"
                    alt="Fifth slide"
                    />
                </a>
                <div className='caption'>
                <Carousel.Caption>
                <a href='https://eat-the-burgerzz.herokuapp.com' target='_blank' rel='noreferrer'>
                    <h3>Eat A Burger</h3>
                </a>
                <a href='https://github.com/haydenrust1/ExpressHandlebarsBurger' target='_blank' rel="noreferrer">Repo</a>
                </Carousel.Caption>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <a href='https://github.com/haydenrust1/EmployeeTracker' target='_blank' rel="noreferrer">
                    <img
                    // style={{height: '100% auto'}}
                    className="d-block w-100"
                    src="./images/managerTwo.png"
                    alt="Sixth slide"
                    />
                </a>
                <div className='caption'>

                <Carousel.Caption>
                <a href='https://github.com/haydenrust1/EmployeeTracker' target='_blank' rel="noreferrer">
                    <h3>Employee Tracker</h3>
                </a>
                <small>Command Line Application</small>
                <br />
                <a href='https://github.com/haydenrust1/EmployeeTracker' target='_blank' rel="noreferrer">Repo</a>
                </Carousel.Caption>
                </div>
            </Carousel.Item>
        </Carousel>
    )
}

export default ProjectCarousel;