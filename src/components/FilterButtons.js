import { ButtonGroup, Button } from 'react-bootstrap';
import React from 'react';

function FilterButtons({ filterChange }) {
    return ( <ButtonGroup size="lg" display="flex"> 
                  <Button onClick={() => filterChange('all')}>All</Button>
                  <Button onClick={() => filterChange('active')}>Active</Button>
                  <Button onClick={() => filterChange('completed')}>Completed</Button>
          </ButtonGroup>);
  
    
}

export default FilterButtons;