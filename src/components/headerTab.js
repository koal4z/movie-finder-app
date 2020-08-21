import React from 'react';
import PropTypes from 'prop-types';

import '../css/headertap.css';

const HeaderTap = (props) => {
  const { tab } = props;

  return (
    <div className="section_header">
      <h3 className="section_header-heading">{tab}</h3>
    </div>
  );
};

HeaderTap.propTypes = {
  tab: PropTypes.string.isRequired
};

export default HeaderTap;
