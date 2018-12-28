import React from 'react';

const Card = ({ job }) => {
  const printSalary = (obj) => {
    if (obj === null) return 'Не указано';
    if (obj.to === null) {
      return `${obj.from} ${obj.currency}`;
    }
    if (obj.from === null) {
      return `${obj.to} ${obj.currency}`;
    }
    return `${obj.from} - ${obj.to} ${obj.currency}`;
  };

  return (
    <div className='card'>
      <h3 className='card--name'>
        {job.name}
      </h3>
      <h4 className='card--company'>
        {job.employer.name}
      </h4>
      <span className='card--city'>
        {job.area.name}
      </span>
      <span className='card--salary'>
        {printSalary(job.salary)}
      </span>
      <a
        href={job.alternate_url}
        target='_blank'
        rel='noopener noreferrer'
        className='card--button'
      >
        Go to hh
      </a>
    </div>
  );
};

export default Card;
