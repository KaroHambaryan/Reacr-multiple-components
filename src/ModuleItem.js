import React from "react";

class ModuleItem extends React.Component {
	render() {
		const { id, title, pricePerMonth, duration, onSelectModule } = this.props;
		return (
			<div>
				
				<h3>{title}</h3>
				<p>{pricePerMonth} AMD</p>
				<p>{duration} months</p>

				{
					onSelectModule &&

					<button className="add-module"
						onClick={() => onSelectModule(id)}
					> Add
					</button>
				}

			</div>
		);
	}
}

export default ModuleItem;