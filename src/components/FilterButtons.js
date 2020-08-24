import React from 'react';
import { Button, ButtonGroup } from '@material-ui/core'


function FilterButtons({ filterChange }) {
    return (<ButtonGroup size="medium" display="flex"> 
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={() => filterChange('all')}>
                All</Button>
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={() => filterChange('active')}>
                Active</Button>
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={() => filterChange('completed')}>
                Completed</Button>
            </ButtonGroup>);
  
    
}

export default FilterButtons;