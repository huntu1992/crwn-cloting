import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.style.scss';
import SECTIONS_DATA from './sections.data.js';
class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      section: SECTIONS_DATA
    };
  }
  render() {
    return (
      <div className='directory-menu'>
        {this.state.section.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}
export default Directory;
