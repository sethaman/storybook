import React from 'react';
import PropTypes from 'prop-types';
import './breadcrumb.css';

/**
 * Primary UI component for user interaction
 */
 export const Breadcrumb = ({ primary, Color, size,  ...props }) => {
  const mode = primary ? 'storybook-breadcrumb--primary' : 'storybook-breadcrumb--secondary';
  return (

    
    <a href='#'>Home Furniture  <svg class="svg-inline--fa fa-external-link-alt fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="external-link-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path></svg>  ||   Beaver, Homes & Cottages   <svg class="svg-inline--fa fa-external-link-alt fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="external-link-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path></svg>  ||   BeautiTone   <svg class="svg-inline--fa fa-external-link-alt fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="external-link-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path></svg></a>
   
      // { path: "/pizza", name: "Pizzas", Component: Pizza },
      // { path: "/pizza/:pizzaId", name: "Edit Pizza", Component: EditPizza },
      // {
      //   path: "/pizza/:pizzaId/toppings",
      //   name: "Pizza Toppings",
      //   Component: Toppings
      // }
    //   className={['storybook-breadcrumb--primary', `storybook-breadcrumb--secondary${size}`, mode].join(' ')}
    // style={backgroundColor && { backgroundColor }}
    // {...props}
    
  );
};

Breadcrumb.propTypes = {
  
  primary: PropTypes.bool, 
  Color: PropTypes.string,  
    size: PropTypes.oneOf(['small', 'medium', 'large']),  
    
  onClick: PropTypes.func,
};

Breadcrumb.defaultProps = {
  Color: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};