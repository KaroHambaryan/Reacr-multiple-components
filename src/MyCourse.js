import React from "react";
import ModuleItem from "./ModuleItem";

class MyCourse extends React.Component {
	render() {
		const { subjects } = this.props
		return (
			<div className="my-course">
				{
					subjects.map(elem => { 
						return <ModuleItem key={elem.id} {...elem} /> 
					})
				}
			</div>
		);
	}
}

export default MyCourse;