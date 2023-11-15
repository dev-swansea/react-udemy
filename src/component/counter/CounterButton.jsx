import PropTypes from "prop-types";

const CounterButton = ({
  by,
  incrementCounterParentFunction,
  decrementCounterParentFunction,
}) => {
  return (
    <div>
      <div>
        <button
          className="countBtnIncrement"
          onClick={() => incrementCounterParentFunction(by)}
        >
          +{by}
        </button>

        <button
          className="countBtnDecrement"
          onClick={() => decrementCounterParentFunction(by)}
        >
          -{by}
        </button>
      </div>
    </div>
  );
};

CounterButton.propTypes = {
  by: PropTypes.number,
};

export default CounterButton;
