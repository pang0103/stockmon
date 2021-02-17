import React, { useState, useEffect } from "react";

export default function CompanyOverview(props) {
  const [overview, setoverview] = useState();

  useEffect(() => {
    setoverview(props.details);
    console.log(props.details);
  }, [props.details]);

  return (
    <div>
      <h2>Company overview:</h2>
      <h5>{JSON.stringify(overview)}</h5>;
    </div>
  );
}
