import React from 'react';
import TopBar from './TopBar/TopBar';
import SideNav from './SideNav/SideNav';
import { Plus } from 'react-bootstrap-icons';
import './Home.css'

const HomePage = () => {
  const medicines = [
    { name: 'Paracetamol', type: 'Tablet', dose: 500, unit: 'mg', dosage: 'Twice a day', timing: 'After meals' },
    { name: 'Benadryl', type: 'Syrup', dose: 10, unit: 'ml', dosage: 'Thrice a day', timing: 'After meals' },
  ];

  return (
    <div>
      <TopBar />
      <div className="container-fluid">
        <div className="row">
          <SideNav />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="row row-cols-1 row-cols-md-3 g-4 my-3">
              {medicines.map((med, index) => (
                <div className="col" key={index}>
                  <div className="card h-100">
                    <div className="card-body">
                      <h5 className="card-title">{med.name}</h5>
                      <ul className="list-unstyled mt-3 mb-4">
                        <li>Type: {med.type}</li>
                        <li>Dose: {med.dose} {med.unit}</li>
                        <li>Dosage: {med.dosage}</li>
                        <li>Timing: {med.timing}</li>
                      </ul>
                    </div>
                    <div className="card-footer">
                      <button className="btn btn-primary mx-2">Edit</button>
                      <button className="btn btn-danger mx-2 ">Delete</button>
                    </div>
                  </div>
                </div>
              ))}
              <div className="col">
                <div className="card h-100 add-card">
                  <button className="add-card-button" aria-label="Add new medicine">
                    <Plus size={30} /> {/* Replace with your plus icon/image if not using Bootstrap icons */}
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
