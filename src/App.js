import React from 'react';
import ModuleList from './ModuleList';
import MyCourse from './MyCourse';
import './App.css';

class App extends React.Component {

		state = {
			courses: [],
			modules: [],
			info: {
				amount: 0,
				duration: 0
			}
		}

	addModuleToCourses(id) {
		this.setState(current => {
			let mod = current.modules.find(elm => elm.id === id)

			if (!current.courses.includes(mod)) {
				current.courses.push(mod)
			}

			current.info.amount = current.courses.reduce(
				(a, b) => a + b.duration * b.pricePerMonth, 0
			);
			current.info.duration = current.courses.reduce(
				(a, b) => a + b.duration, 0
			);
			return current;
		})
	}

	render() {
		const{ amount, duration } = this.state.info
		return (
			<div >
				<h2> Let's create a course for you! </h2>
				<h3>Total Amount - { amount } AMD</h3>
				<h3>Total duration - { duration } monts AMD</h3>
				<div id="main">
					<MyCourse subjects={this.state.courses} />
					<ModuleList
						onSelect={(id) => this.addModuleToCourses(id)}
						modules={this.state.modules} />
				</div>
			</div>
		);
	}

	componentDidMount() {
		fetch("data.json")
			.then(response => response.json())
			.then(data => {
				this.setState({ modules: data.modules })
			})
	}
}

export default App;
