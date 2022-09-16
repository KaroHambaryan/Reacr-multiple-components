import React from "react";
import ModuleItem from "./ModuleItem";

class ModuleList extends React.Component {
	render() {
		const { modules, onSelect } = this.props
		return (
			<div className="module-list">
				<h3> Module List </h3>
				{
					modules.map((elem) => <ModuleItem
						key={elem.id}
						onSelectModule = {onSelect}
						{...elem}
					/>)
				}
			</div>
		);
	}
}

export default ModuleList;