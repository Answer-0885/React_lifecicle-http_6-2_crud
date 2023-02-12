const Form = ({ handleSubmit, handleChange, value }) => (
  <form onSubmit={handleSubmit} className="form">
    <textarea value={value} onChange={handleChange} required={true} />
    <button className="btn-send" onSubmit={handleSubmit} disabled={!value}>
      {" "}
      <i class="fa fa-sign-in" aria-hidden="true"></i>
    </button>
  </form>
);

export default Form;