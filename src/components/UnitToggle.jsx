function UnitToggle({ unit, setUnit }) {
  return (
    <div className="unit-toggle">
      <input
        type="button"
        value="°C"
        disabled={unit === "C"}
        onClick={() => setUnit("C")}
      />

      <input
        type="button"
        value="°F"
        disabled={unit === "F"}
        onClick={() => setUnit("F")}
      />
    </div>
  );
}

export default UnitToggle;