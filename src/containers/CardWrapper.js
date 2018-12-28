import React from 'react';

import Card from '../components/Card';

class CardWrapper extends React.Component {
  render() {
    return (
      <section className='cardwrapper'>
        {this.props.data.items.map(item => (
          <Card key={item.id} job={item} />
        ))}
      </section>
    );
  }
}

export default CardWrapper;
