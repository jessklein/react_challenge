import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function CarsList(props) {
  const displayCars = (props) => {
    const {cars} = props;

    if (cars.length > 0) {
      return(
        cars.map((car, index) => {
          console.log(car);
          return(
            <div className="car" key={car.vin}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}>
                  <Typography className="model_variant">{car.model_variant}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <ul>
                      <li>Body Type: {car.body_type}</li>
                      <li>Doors: {car.doors}</li>
                      <li>Engine Size: {car.engine_size}</li>
                      <li>Fuel Type: {car.fuel_type}</li>
                      <li>Transmission Type: {car.transmission_type}</li>
                      <li>Registration Number: {car.regno}</li>
                      <li>VIN: {car.vin}</li>
                    </ul>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          )
        })
      )
    } else {
      return (<p>Car data loading...</p>)
    }
  }
  return (
    <div>
      {displayCars(props)}
    </div>
  )
}