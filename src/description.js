/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React, { useState } from 'react';
import { Tooltip } from 'reactstrap';
import { ReactComponent as InfoIcon } from './assets/infoIcon.svg';

const Example = (props) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);
  let id = "Tooltip"+props.key1
  
  return (
    
    <div class="infoIcon">
      <span href="#" id={id}><InfoIcon /></span>
      <Tooltip placement="right" isOpen={tooltipOpen} target={id} toggle={toggle}>
        {props.description}
      </Tooltip>
    </div>
  );
}

export default Example;