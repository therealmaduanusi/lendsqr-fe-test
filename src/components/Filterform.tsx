const UserFilterPanel = () => {
  return (
    <div className="filter-panel">
      <form>
        <div className="form-group">
          <label>Organization</label>
          <select>
            <option>Select</option>
          </select>
        </div>

        <div className="form-group">
          <label>Username</label>
          <input type="text" placeholder="User" />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Email" />
        </div>

        <div className="form-group">
          <label>Date</label>
          <input type="date" placeholder="Date" />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input type="text" placeholder="Phone Number" />
        </div>

        <div className="form-group">
          <label>Status</label>
          <select>
            <option>Select</option>
          </select>
        </div>

        <div className="button-group">
          <button type="reset" className="reset">Reset</button>
          <button type="submit" className="filter">Filter</button>
        </div>
      </form>
    </div>
  );
};

export default UserFilterPanel;
