const AddButton = ({ num, text }) => {
  // Add num to Redux Store
  return (
    <button className="button">
      {text} {num}
    </button>
  );
};

export default AddButton;
