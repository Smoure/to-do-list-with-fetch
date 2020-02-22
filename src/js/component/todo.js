import React, { useState } from "react";
import PropTypes from "prop-types";

export function ToDo(props) {
	return (
		<>
			<div className="d-flex justify-content-center">{props.todo}</div>
		</>
	);
}

ToDo.propTypes = {
	todo: PropTypes.string
};
