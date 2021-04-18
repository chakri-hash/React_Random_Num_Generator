import React from "react";

const Generate = ({ currentClick }) => {
	return (
		<div className="gen-box">
		<button 
		type="button" 
		className="gen-btn" 
		onClick={currentClick}>
		Get a number 
		</button>
		</div>
		);
}

export default Generate;