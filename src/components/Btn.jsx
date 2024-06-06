const Btn = ({ onButtonClick }) => {
  // onButtonClick passes as argument
  // it is destructure
  let button = [
    "c",
    "1",
    "2",
    "3",
    "/",
    "4",
    "5",
    "6",
    "*",
    "7",
    "8",
    "9",
    "-",
    "+",
    ".",
    "0",
    "=",
  ];
  return (
    <div>
      {button.map((Btns) => (
        <button key={Btns} className="button" onClick={onButtonClick}>
          {Btns}
        </button>
      ))}
    </div>
  );
};
export default Btn;
