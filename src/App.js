const App = () => {
  const categories = [
    {
      id: 0,
      title: 'Hats',
    },
    {
      id: 1,
      title: 'Jackets',
    },
    {
      id: 2,
      title: 'Sneakers',
    },
    {
      id: 3,
      title: 'Womens',
    },
    {
      id: 4,
      title: 'Mens',
    },
  ];


  return (
   <div className="categories-container">
      {categories.map(({title}) => (
        <div className="category-container">
          <div className='background-image' />
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
      </div>
      ))}
   </div>
  );
};

export default App;
