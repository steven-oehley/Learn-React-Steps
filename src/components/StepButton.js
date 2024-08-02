function StepButton({ btnTxt, emoji, stepHandler }) {
  return (
    <button
      onClick={stepHandler}
      style={{ backgroundColor: "#7950f2", color: "#fff" }}
    >
      {btnTxt.toLowerCase() === "next"
        ? btnTxt + " " + emoji
        : emoji + " " + btnTxt}
    </button>
  );
}
export default StepButton;
