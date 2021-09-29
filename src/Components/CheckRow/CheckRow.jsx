import data from "../Data/Data";

function CheckRow({ children }) {
  return (
    <div className="post">
      <div>
        {children[1] === "i"
          ? data[children]
          : children[0] === "t"
          ? data[children]
          : " xato"}
      </div>
    </div>
  );
}

export default CheckRow;
